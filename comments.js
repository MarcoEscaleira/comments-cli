const fs = require("fs");
const chalk = require("chalk");

const categories = ["cute", "funny", "roast"];

const getComments = () => {
  return "Your comments...";
};

const addComment = (category, comment) => {
  const comments = loadComments();
  
  if (categories.indexOf(category) !== -1) {
    comments.push({
      category,
      comment
    });
    
    saveComments(comments);
  } else {
    console.log("Please choose a valid category");
    categories.forEach(cat => console.log(`- ${chalk.green(cat)}`))
  }
}

const saveComments = (comments) => {
  try {
    const dataJSON = JSON.stringify(comments);
    fs.writeFileSync("comments.json", dataJSON);
  } catch(e) {
    console.log("Something went wrong while saving comments");
  }
}

const loadComments = () => {
  try {
    const dataBuffer = fs.readFileSync("comments.json");
    const dataJSON = dataBuffer.toString();
    
    return JSON.parse(dataJSON);
  } catch(e) {
    return [];
  }
}

module.exports = {
  getComments,
  addComment
};