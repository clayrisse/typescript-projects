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



add scripts:
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"

change in tsconfig

    "outDir": "./build",                          
    "rootDir": "./src", 


//for the fs  function. cause this is a build in function of node 
npm install @types/node  





-----------------

//instead of using an object we will use an "enum- enumeration"
  //the purpose of an "enum" is to signal to other ingeneers that is a collection of 
  //very closely related values. --- it also creates a "type" named like the enum
  enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
  } 

  //in here we are saying that the value returned will be a "MatchResul propertie"
  // const printMatchResult = (): MatchResult => {
  //   if (match[5] === 'H') {
  //     return MatchResult.HomeWin
  //   }
  // }

  /////////  ENUM
  // they are like obj and can be declared empty at first
  // when is converted from Ts to Js it will end up an Object
  // the goal is to diferentiate to others that this are a few close related values
  // use whenever we have a small fixed set of values that are known at compile time
-------------------

remember:

-tuples: specific types asociations  e.g [string, number, Date]

-abstract classes: classes that are never going to be use to create instances, but instead by inherit to other child classes

-generics:
    1.like function arguments, but for types in class/function defintions
    2.allows us t define the type of a property/argument/return value at a future point
    3.used heavely whe writing reusable code
    4.e.g class Something<typeOfDataYouWantToPut> {} (commonly they use the letter <T>)