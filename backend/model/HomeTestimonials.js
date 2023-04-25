import mongoose, {Schema} from "mongoose";



const HomeTestimonialsSchema = new mongoose.Schema({
    
    description:{
        type:String,
    },
    profilePicture:{
        type:String
    },
    name:{
        type:String
    },
    profession:{
        type:String
    }
})

const HomeTestimonials = mongoose.model("homeTestimonials",HomeTestimonialsSchema)

export default HomeTestimonials