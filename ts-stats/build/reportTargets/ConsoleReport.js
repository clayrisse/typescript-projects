"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = exports.ConsoleReport = void 0;
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        // console.log(report)
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
