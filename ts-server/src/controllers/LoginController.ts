import { Request, Response, NextFunction } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("request made");
  next()
}


@controller('/auth')
export class LoginController {

  @get('/login')
  @use(logger)
  // @use()
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" />
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" />
          </div>
          <button>Submit</button>
      </form>
    `);
  }


  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
  // or postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
  
    if (email && password && email === "qqq" && password === "qqq") {
      
      //mark this person as logged in 
      req.session = { loggedIn: true }
      res.redirect('/')
  
      //redirect them to the root route
    } else {
      res.send('Invalid email or password. You must provide a valid  email')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
  
}