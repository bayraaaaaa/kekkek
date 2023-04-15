import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
const UserSchema = new mongoose.Schema({
    username:{type:String },
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    phoneNumber:{type:String},
    gender:{type:String}

})

UserSchema.pre("save",async function(nest){
    try {
        const salt = await bcrypt.genSalt(10) 
        const hashPassword = await bcrypt.hash(this.password,salt)
        this.password = hashPassword
        nest()
    } catch (error) {
        nest(error)
    }
})

const User = mongoose.model("User", UserSchema);

export default User;