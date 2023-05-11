import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("mypassword123", salt);
// console.log(hash, "this is hash");
const MergejilSchema = new mongoose.Schema(
  {
    erelt: {
      type: String,
      required: [true],
    },
    mergejilToo: {
      type: String,
      required: [true],
    },
    mergejilNer: {
      type: String,
      required: [false],
    },
    type: {
      type: String,
      required : [false]
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
MergejilSchema.virtual("microMergejil", {
  ref: "microMergejil",
  localField: "_id",
  foreignField: "user_id",
});

// UserSchema.pre("save", async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(5);
//     const hashPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// UserSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// UserSchema.methods.jwtGenerate = async function () {
//   return jwt.sign({ id: this._id, username: this.username }, process.env.JWT, {
//     expiresIn: 3600,
//   });
// };

const Mergejil = mongoose.model("Mergejil", MergejilSchema);

export default Mergejil;