import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const InstructorSchema = new mongoose.Schema({

    image:{
        type:String,
    },
    name:{
        type:String
    },
    profession:{
        type:String
    },
    description:{
        type:String
    }


})
    

const Instructor = mongoose.model("Instructor", InstructorSchema);

export default Instructor;