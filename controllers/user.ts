import {userService,UserService} from '../services/userservice/user'
const us = new userService

interface UserController{
  Register(req: any, res: any):void
  Login(req: any, res:any):void
  GetById(req: any, res:any):void
}

class userController implements UserController {
  Register(req:any, res:any):void {
    res.send(us.Create())
  }

  Login(req:any, res:any) {
    res.json({
      status: 200,
    })
  }
  GetById(req:any, res:any){

  }
}

export default userController
