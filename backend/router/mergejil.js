import express from "express";
import {
  getAllMergejil,
  createMergejil,
  getMergejil,
  updateMergejil,
  removeMergejil,
} from "../controller/mergejil.js";
// import { checkTokenMiddleWare } from "../middleware/middleware.js";
// import { checkAdminMidlleWare } from "../middleware/middleware.js";
const router = express.Router();

router.route("/").get(getAllMergejil);
router.route("/:id").get(getMergejil).put(updateMergejil);
router.route("/postMergejil").post(createMergejil);
router.route("/:id").delete(removeMergejil);

export default router;