import mongoose from "mongoose";

const microMergejilSchema = new mongoose.Schema({
  microMergejilName: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: [true],
  },
  user_id: {
    type : String,
    required : [true]
  }
});

const microMergejil = mongoose.model("microMergejil", microMergejilSchema);

export default microMergejil;