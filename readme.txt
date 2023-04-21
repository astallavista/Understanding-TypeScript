1. How to set up index.html?
    - in the blank file type 'html:5' and press Enter
    - add <script> tag in the <head> section with a source i.e. <script src="app.js" defer></script>
2. How to create package.json file?
    - type in terminal 'npm init' and press Enter
    - answer all questions 
3. How to install and use 'Lite-Server'?
    - type in terminal 'npm install --save-dev lite-server' and press Enter
    - package-lock.json and node_modules will be created
    - go to the package.json and add to the scripts "start": "lite-server"
    - type in the terminal 'npm start'
4. How to compile TS file?
    - save app.ts file
    - type in the terminal 'tsc app.ts'
5. How to compile certain file automatically?
    - type in the terminal 'tsc app.ts -w'   // this command will turn on the 'Watch mode' to the certain file and will compile it automatically.
6. How to compile all files in the project automatically?
    - create tsconfig.json - type in the terminal 'tsc --init'
    - type in the terminal 'tsc -w'
7. How to exclude/include some files from automatic compiling?
    - in 'tsconfig.json' add "exclude" before the last "}"
    - in this array add particular file or the banch of files i.e. "*.dev.ts" or "**/*.dev.ts" // in a folder
    - or add "include" and include all the files or folders // it works include minus exclude
    - add "files" - to compile specific files
