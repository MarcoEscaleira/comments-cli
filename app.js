const chalk = require('chalk');
const yargs = require("yargs");
const { addComment } = require("./comments");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new comment",
  builder: {
    category: {
      describe: "Comment category",
      demandOption: true,
      type: "string"
    },
    comment: {
      describe: "Comment text",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    addComment(argv.category, argv.comment);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a comment",
  handler: function () {
    console.log("Remove a comment");
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all comments",
  handler: function () {
    console.log("List all comments");
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a comment",
  handler: function () {
    console.log("Read a comment");
  }
});

yargs.parse();