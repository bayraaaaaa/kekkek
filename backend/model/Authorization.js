import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const AuthorizationSchema = new mongoose.Schema({

    email:{type:String},
    password:{type:String},
    

})
    
AuthorizationSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}
AuthorizationSchema.methods.jwtGenerate = async function () {
    return jwt.sign({ id: this._id, username: this.username }, process.env.JWT, {
      expiresIn: "1d",
    });
  };
const Authorization = mongoose.model("Authorization", AuthorizationSchema);

export default Authorization;