import express from "express"
import { createHotel, deleteHotel, updatedHotel,getHotel,getAllHotel, countByCity, countByType, getHotelRooms } 
from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router= express.Router()

//CREATE
router.post("/",verifyAdmin, createHotel);
//UPDATE
router.put("/:id",verifyAdmin, updatedHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET
router.get("/find/:id",getHotel);
//GETALL
router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router