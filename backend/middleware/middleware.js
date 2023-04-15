import  jwt  from "jsonwebtoken";


export const checkToken = (req,res,next)=>{
const token = req.body.token
jwt.verify(token, "secret",(error,result)=>{
    if (error) {
        res.status(400).send({
            error
        })
    }else{
        console.log(req.body)
        next()
    }
})
}