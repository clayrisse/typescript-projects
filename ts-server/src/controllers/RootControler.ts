import { Response, Request, NextFunction } from 'express';
import { get, controller, use } from './decorators';


function requireAuth(req: Request, res: Response, next:  NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return; //to make clear you are not returning anithing
  }

  res.status(403);
  res.send('NOT permitted')
}


@controller('') // we dont put the "/"
export class RootControler {

  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `)
    } else {
      res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `)
    }
  }
  
  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response)  {
    res.send('Welcome to protected route, logged in user')
  }
}