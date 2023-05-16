import mongoose from "mongoose";

const microMergejilSchema = new mongoose.Schema({
  microMergejilName: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
  },
  hicheel: {
    type: String,
    required: [true],
  },
  user_id: {
    type : String,
    required : [true]
  },
  tsalin: {
    type : String,
    required : [true]
  },
  nohtsol: {
    type : String,
    required : [true]
  }
});

const microMergejil = mongoose.model("microMergejil", microMergejilSchema);

export default microMergejil;