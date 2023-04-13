import mongoose, {Schema} from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{type:String },
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    phoneNumber:{type:String},
    gender:{type:String}

})



const User = mongoose.model("User", UserSchema);

export default User;