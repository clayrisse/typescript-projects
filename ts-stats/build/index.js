"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import {HtmlReport } from './reportTargets/HtmlReport'
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// //create a reader that satisfies the ´DataReader´ interface
// const csvFileReader = new CsvFileReader('football.csv')
// //create an instance of MatchReader and pass in somthing satisfying
// //the DataReader' interface
// const matchReader = new MatchReader(csvFileReader)
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv'); //with static method "fromCsv"
matchReader.load();
// const summary1 = new Summary( new WinsAnalysis('Man United'), new HtmlReport());
// summary1.buildAndPrintReport(matchReader.matches);
//the "new" key word is IN the static method we created 
var summary2 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
