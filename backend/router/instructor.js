import  express  from "express";
import {
    createInstructor,
    getAllInstructor,
    getInstructorById,
    updateInstructor,
    deleteInstructor
}
from "../controller/instructor.js"

const instructorRouter = express.Router()


instructorRouter.route("/createInstructor").post(createInstructor)
instructorRouter.route("/").get(getAllInstructor).get(getInstructorById).put(updateInstructor).delete(deleteInstructor)

export default instructorRouter