import express from "express";
import {
  getAllMicroMergejil,
  createMicroMergejil,
  deleteMicroMergejil,
  findMicroMergejil,
} from "../controller/microMergejil.js";
const router2 = express.Router();

router2.route("/").get(getAllMicroMergejil).post(createMicroMergejil);
router2.route("/:id").delete(deleteMicroMergejil);
router2.route("/:id").get(findMicroMergejil);

export default router2;