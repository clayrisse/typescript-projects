import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootControler';


const app = express();

//MIDDLEWARE 
//bodyparcer attaches the body to the request, cause by default express does no creates one
app.use(bodyParser.urlencoded({extended: true}));
//cookieSession attaches the property session
app.use(cookieSession({keys: ['qweqwe']}))

app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("listenin clau 3000")
})