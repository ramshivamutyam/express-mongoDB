import express from "express";
import { register, login } from "../controllers/user.controller.js";
const router = express.Router();
router.use(express.json());
// router.use(bodyParser.urlencoded({ extended: true }));
router.route("/register").post(register);
router.route("/login").post(login);

export default router;
