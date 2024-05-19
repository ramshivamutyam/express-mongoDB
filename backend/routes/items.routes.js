import express from "express";
import getItems from "../controllers/items.controller.js";
import authenticate from "../middlewares/authenticate.js";

const router = express.Router();

router.use(express.json());

router.route("/getitems").get(authenticate, getItems);

export default router;