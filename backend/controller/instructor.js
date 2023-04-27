import Instructor from "../model/instructor.js";
import jwt from "jsonwebtoken";


export const createInstructor = async(req,res) =>{
    try {
        const instructor =  await Instructor.create(req.body)
        console.log(req.body)
        res.status(200).send({
            success:true,
            data:instructor
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            data:error.message
        })
    }
    }
    
    export const getAllInstructor = async (req,res)=>{
        try {
            const skip =req.query.skip
            const limit = req.query.limit
          const getAllInstructor = await Instructor.find({}).limit(limit).skip(skip)
        console.log(getAllInstructor)
            res.status(200).send({
                success:true,
                data:getAllInstructor
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    export const getInstructorById = async (req,res)=>{
        const id = req.params
        try {
            const getInstructorById = await Instructor.findById({_id:id})
            res.status(200).send({
                success:true,
                data:getInstructorById
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    
    export const deleteInstructor = async(req, res)=>{
        const id = req.params.id
        try {
            const deleteInstructor = await Instructor.deleteOne({_id:id})
            res.status(200).send({
                success:true,
                data:deleteInstructor
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }
    export const updateInstructor = async (req, res)=>{
        try {
            const body = req.body
            const updateInstructor = await Instructor.updateMany({ 
                image:body.image,
                name : body.name,
               profession: body.profession,
               description: body.description

             })
            res.status(200).send({
                success:true,
                data:updateInstructor
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                data:error.message
            })
        }
    }