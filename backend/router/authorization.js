import  express  from "express";
import {
    Login
}
from "../controller/authorization.js"

const authorizationRouter = express.Router()


authorizationRouter.route("/login").post(Login)

export default authorizationRouter