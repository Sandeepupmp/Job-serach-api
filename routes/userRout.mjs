import { Router } from "express";
import { register , login } from "../controlers/authControler.mjs"; 

const router = Router()

router.post("/api/v1/login",login )
router.post("/api/vi/register", register)

export default router;