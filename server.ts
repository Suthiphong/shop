import express from "express";
import userRoute from './routers/user'
import Cors  from "cors";
import bodyParser  from "body-parser";

const server = express()

server.use(Cors())
server.use(bodyParser.urlencoded({extended: true}))

server.use('/user', userRoute)

server.listen(3000, () => console.log(`server is running port 3000`))
