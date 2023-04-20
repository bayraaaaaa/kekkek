import Autorization from "../model/Authorization.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const Login = async (req,res)=>{
    try {
        const token = jwt.sign(
            {
                email: req.body.email,
                password: req.body.password,
            },
            "secret",
            {
                expiresIn:"69d",
            }
        );
        const { password,email}= req.body
        const user = await Autorization.findOne({email})
        console.log(user)
        const isMatch = await user.comparePassword(password)
        console.log(isMatch)
        if (!isMatch) {
            res.status(400).send({
                data:"Passwordo zuw hii sugaa"
            })
        }
        if (user) {
            res.status(200).send({
                token : token,
                
            })
        }else{
            res.send({
                data:"tiim user baihgu"
            })
        }
    } catch (error) {
        res.status(400).send({
            success:false,
            data:error.message
        })
    }
}