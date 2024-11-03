const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");
const myEmitter = new EventEmitter();
// 1- Write a function that prints the full path of the current file.
function printCurrentFilePath() {
  console.log(__filename);
}

printCurrentFilePath();

// 2- Write a function that takes a file path and returns its file extension.
function getFileExtension(filePath) {
  console.log(path.extname(filePath));
}
getFileExtension(__filename);

// 3- Write a function that checks if a given path is absolute.
function isAbsolutePath(filePath) {
  console.log(path.isAbsolute(filePath));
}
isAbsolutePath(__filename);

// 4- Write a function that joins two paths.
function joinPaths(path1, path2) {
  console.log(path.join(path1, path2));
}
joinPaths("/folder1", "folder2/file.txt");

// 5- Write a function that demonstrates the difference between path.parse and
// path.format. The function should take a file path as input, parse it, log the parsed
// object to the console, then reformat it and log the formatted path to the console.
function demonstratePathParseAndFormat(filePath) {
  const parsedPath = path.parse(filePath);
  console.log(parsedPath);
  const formattedPath = path.format(parsedPath);
  console.log(formattedPath);
}
demonstratePathParseAndFormat(__filename);

// 6- Write a function that deletes a file.
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err.message}`);
      return;
    }
    console.log("The file is deleted");
  });
}
deleteFile("./data.txt");

// 7- Write a function that creates a folder.
function createFolder(folderPath) {
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error creating folder: ${err.message}`);
      return;
    }
    console.log("The folder is created");
  });
}
createFolder("./newFolder");

// 8- Write a function that creates a custom event and listens for. Trigger the event with a message.
function customEvent(event,message) {
  myEmitter.on(event, (message) => {
    console.log(`The event is triggered and the message ${message} is logged.`);
  });
  myEmitter.emit(event, message);
}
customEvent("greet","Hello Event!");
