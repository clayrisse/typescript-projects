notes for c=you

//////////////////////////////////////TERMINAL 1
tsc --init 
--> to buildthe tsconfig.json
1. Go there and uncomment and add
    "outDir": "./build",                             
    "rootDir": "./src", 

tsc -w  
-->tsc watch for changes





//////////////////////////////////////TERMINAL 2
node build/index.js
npm install nodemon concurrently
