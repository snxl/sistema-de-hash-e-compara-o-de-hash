import register from "../controller/pagesController.js";
import express from "express"
const router = express.Router();

router.post("/rs", register.procurarEspecifico)
router.post("/", register.cadastroPOST)

export default router