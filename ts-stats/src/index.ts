import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader'; 
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

//create a reader that satisfies the ´DataReader´ interface
const csvFileReader = new CsvFileReader('football.csv')

//create an instance of MatchReader and pass in somthing satisfying
//the DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);