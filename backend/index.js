import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import userRouter from "./router/user.js";
import instructorRouter from "./router/instructor.js";
import authorizationRouter from "./router/authorization.js";
import testimonialsRouter from "./router/homeTestimonials.js";
import router from "./router/mergejil.js"
import router2 from "./router/microMergejil.js"
const app = express()
dotenv.config();


const uri = process.env.MONGODB || "";
 const port = process.env.PORT || 6969;

 app.use(cors()); 
 app.use(express.json());
 app.use("/user", userRouter)
 app.use("/authorization",authorizationRouter)
 app.use("/instructor",instructorRouter)
app.use("/testimonials",testimonialsRouter)
app.use("/mergejil",router);
app.use("/microMergejil",router2);
const connect = () => {
    // console.log(uri,);
  try {
mongoose.set("strictQuery", true);
mongoose.connect(uri, {}).then(() => {
  console.log("Connected MongoDB");
});
} catch (error) {
console.error("Couldn't connect");
process.exit(1);
}
};





app.listen(port, async () => {
connect();
console.log(`Server running at localhost:${port}`);
});