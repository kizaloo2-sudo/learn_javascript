# File Manager Progress

## Status
In progress

## Completed Features

- [x] Create file
- [x] Read file
- [x] Append file
- [x] Delete file
- [x] Check if file exists
- [x] Rename file
- [x] Create folder
- [x] List files in folder
- [x] Move file

## Git & GitHub Practice

During this project I practiced:

- `git init`
- `git status`
- `git add`
- `git commit`
- `git push`
- feature branches
- GitHub Pull Requests
- squash merge
- deleting merged branches
- syncing `main`

## Current Git History

Completed pull requests:

1. `feat: create file`
2. `feat: read file`
3. `feat: append file`
4. `feat: delete file`
5. `feat: check file exists`
6. `feat: rename file`
7. `feat: create folder`
8. `feat: list files`
9. `feat: move file`

## Next Step

Refactor the project structure.

Planned structure:

```text
file-manager/
├── index.js
├── fileManager.js
├── README.md
└── PROGRESS.md
```

Next branch:

```bash
git switch -c refactor/project-structure
```

The goal is to move file-system functions from `index.js` into `fileManager.js`.

## What I Learned

Node.js File System methods used so far:

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

Next session: continue with project structure and refactoring.
