// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import {HtmlReport } from './reportTargets/HtmlReport'
import { MatchReader } from './MatchReader'; 
import { Summary } from './Summary';

// //create a reader that satisfies the ´DataReader´ interface
// const csvFileReader = new CsvFileReader('football.csv')

// //create an instance of MatchReader and pass in somthing satisfying
// //the DataReader' interface
// const matchReader = new MatchReader(csvFileReader)
const matchReader = MatchReader.fromCsv('football.csv')//with static method "fromCsv"
matchReader.load();

// const summary1 = new Summary( new WinsAnalysis('Man United'), new HtmlReport());
// summary1.buildAndPrintReport(matchReader.matches);

//the "new" key word is IN the static method we created 
const summary2 = Summary.winsAnalysisWithHtmlReport('Man United') 
summary2.buildAndPrintReport(matchReader.matches);

