"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//this will return a string of the whole file
var matches = fs_1.default
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map(function (row) {
    return row.split(',');
});
//instead of using an object we will use an "enum- enumeration"
//the purpose of an "enum" is to signal to other ingeneers that is a collection of 
//very closely related values. --- it also creates a "type" named like the enum
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
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
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[1] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man united wins " + manUnitedWins);
