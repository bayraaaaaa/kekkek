import express  from "express";

import {
createUser,
getAllUser,
deleteUser,
getUserById,
updateUser
} from "../controller/user.js"


const userRouter = express.Router()

userRouter.route("/").get(getAllUser)
userRouter.route("/:id").get(getUserById).delete(deleteUser).put(updateUser)
userRouter.route("/createUser").post(createUser)


export default userRouter;