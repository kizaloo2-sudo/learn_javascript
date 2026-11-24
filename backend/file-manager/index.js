const fs = require("fs");
if (!fs.existsSync("TEST_FOLDER")) {
	fs.mkdirSync("TEST_FOLDER");
}
fs.writeFileSync("hello.txt", "TEST_WRITE");
let readFile = fs.readFileSync("hello.txt", "utf8");
console.log(readFile);
fs.appendFileSync("hello.txt", "_APPEND");
readFile = fs.readFileSync("hello.txt", "utf8");
console.log(readFile);
fs.renameSync("hello.txt", "renamed.txt")
console.log("TEST_WRITE_APPEND_RENAMED")
fs.unlinkSync("renamed.txt");
console.log("TEST_WRITE_APPEND_RENAMED_DELETED");
if (fs.existsSync("renamed.txt")) {
	console.log("TEST_WRITE_APPEND_RENAMED_DELETED_EXISTS");
} else {
	console.log("TEST_WRITE_APPEND_RENAMED_DELETED_NOT_EXISTS");
}

fs.renameSync("TEST_FILE.txt", "TEST_FOLDER/TEST_FILE.txt");
if (fs.existsSync("TEST_FOLDER")) {
	const files = fs.readdirSync("TEST_FOLDER")
	console.log(files);
}
