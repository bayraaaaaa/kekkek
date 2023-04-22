import express from "express"
import {
    createTestimonials,
    getAllTestimonials,
    getTestimonialsById,
    deleteTestimonials,
    updateTestimonials
} from "../controller/homeTestimonials.js"


const testimonialsRouter = express.Router()


testimonialsRouter.route("/").get(getAllTestimonials)
testimonialsRouter.route("/:id").get(getTestimonialsById).delete(deleteTestimonials).put(updateTestimonials)
testimonialsRouter.route("/createTestimonials").post(createTestimonials)

export default testimonialsRouter