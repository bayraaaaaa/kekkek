import User from "../model/User.js";
import jwt from "jsonwebtoken";


export const createUser = async(req,res) =>{
    try {
        const user =  await User.create(req.body)
        console.log(req.body)
        res.status(200).send({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            data:error.message
        })
    }
    }
    
    export const getAllUser = async (req,res)=>{
        try {
          const allUser = await User.find({})
        console.log(allUser)
            res.status(200).send({
                success:true,
                data:allUser
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    export const getUserById = async (req,res)=>{
        const id = req.params
        try {
            const userById = await User.findById({_id:id})
            res.status(200).send({
                success:true,
                data:userById
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    
    export const deleteUser = async(req, res)=>{
        const id = req.params.id
        try {
            const deleteUser = await User.deleteOne({_id:id})
            res.status(200).send({
                success:true,
                data:deleteUser
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    export const updateUser = async (req, res)=>{
        try {
            const body = req.body
            const updateUser = await User.updateMany({ 
                username : body.username,
                email:body.email,
                password:body.password,
                age:body.age,
                phoneNumber:body.phoneNumber,
                gender:body.gender
             })
            res.status(200).send({
                success:true,
                data:updateUser
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }