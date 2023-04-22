import HomeTestimonials from "../model/HomeTestimonials.js"


export const createTestimonials = async(req,res)=>{
    try {
       const createTestimonial = await HomeTestimonials.create(req.body)
       console.log(req.body)
       res.status(200).send({
        succes:true,
        data:createTestimonial,

       })
    } catch (error) {
        res.status(400).send({
            succes:false,
            data:error.message
        })
    }
}
export const getAllTestimonials = async(req,res)=>{
    try {
        const AllTestimonials = await HomeTestimonials.find({})
        console.log(AllTestimonials)
        res.status(200).send({
            succes:true,
            data:AllTestimonials
        })
    } catch (error) {
        res.status(400).send({
            succes:false,
            data:error.message
        })
    }
}
export const getTestimonialsById = async(req,res)=>{
    try {
        const id = req.params
        const getTestimonialsById = await HomeTestimonials.findById({_id:id})
        res.status(200).send({
            succes:true,
            data:getTestimonialsById
        })
    } catch (error) {
        res.status(400).send({
            succes:false,
            data:error.message
        })
        
    }
}

export const deleteTestimonials = async(req, res)=>{
    const id = req.params.id
    try {
        const deleteTestimonials = await HomeTestimonials.deleteOne({_id:id})
        res.status(200).send({
            success:true,
            data:deleteTestimonials
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            data:error.message
        })
    }
}
export const updateTestimonials = async (req, res)=>{
    try {
        const body = req.body
        const updateTestimonials = await HomeTestimonials.updateMany({ 
            
            description: body.description,
            name:body.name,
            profilePicture: body.profilePicture,
            profession: body.profession
         })
        res.status(200).send({
            success:true,
            data:updateTestimonials
        })
    } catch (error) {
        res.status(400).send({
            success:false,
            data:error.message
        })
    }
}