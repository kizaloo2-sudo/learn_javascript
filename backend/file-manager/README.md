# File Manager

A simple Node.js project for learning how to work with files and folders using the built-in `fs` module.

## Features

- Create a file
- Read a file
- Append text to a file
- Delete a file
- Check if a file exists
- Rename a file
- Create a folder
- List files inside a folder
- Move a file

## What I Am Learning

- Node.js `fs`
- File and folder operations
- JavaScript functions
- Project structure
- Git
- GitHub
- Feature branches
- Pull Requests
- Squash merging

## Project Structure

Current structure:

```text
file-manager/
├── index.js
├── README.md
└── PROGRESS.md
```

Planned structure:

```text
file-manager/
├── index.js
├── fileManager.js
├── README.md
└── PROGRESS.md
```

## File System Methods Used

```js
fs.writeFileSync()
fs.readFileSync()
fs.appendFileSync()
fs.unlinkSync()
fs.existsSync()
fs.renameSync()
fs.mkdirSync()
fs.readdirSync()
```

## Status

In progress.

Next step: refactor file operations into `fileManager.js`.
