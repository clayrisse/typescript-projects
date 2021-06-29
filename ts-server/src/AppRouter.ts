import express from 'express';

export class AppRouter {
  //remember static mans you acces the method without an instance of the object
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router()
    }
    return AppRouter.instance
  }
}