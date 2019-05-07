# Back up your globally installed node_modules
1. list packages to install globally under in package.json:
```
  "main": "index.js",
  "global_packages": [
    "hh",
    "browser-sync",
    "chokidar-cli",
    ...
  ],
```
2. npm install
