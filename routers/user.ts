import express from 'express'
import userController from '../controllers/user'
import {userService} from '../services/userservice/user'


const router = express.Router()
/*controller*/
const usercontroller = new userController

router.get('/login', usercontroller.Login)
router.get('/register', usercontroller.Register)

export default router
