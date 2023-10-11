import express from "express"
import { register,login } from "../controllers/Auth.js";

const router= express.Router();

// router.get("/",(req,res)=>{
//      res.send("Hello, This is the authentication endpoint!!")
// })

router.post("/register",register);
router.post("/login",login);

export default router;  