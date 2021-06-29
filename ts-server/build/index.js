"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootControler");
var app = express_1.default();
//MIDDLEWARE 
//bodyparcer attaches the body to the request, cause by default express does no creates one
app.use(body_parser_1.default.urlencoded({ extended: true }));
//cookieSession attaches the property session
app.use(cookie_session_1.default({ keys: ['qweqwe'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log("listenin clau 3000");
});
