const express = require("express");
const { createParcel, getAllParcels, updateParcel, getOneParcel, getUserParcel, deleteParcel } = require("../controllers/parcel");
const { verifyToken, verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
const router = express.Router();

// ADD PARCEL

router.post("/",verifyToken,createParcel)

// GET ALL PARCEL

router.get("/",verifyTokenAndAuthorization, getAllParcels)

// UPDATE PARCEL

router.put("/:id",updateParcel)

// GET ONE PARCEL

router.get("/find/id:",getOneParcel)

// GET USERS PARCEL

router.post("/me",getUserParcel)

// DELETE PARCEL

router.delete("/id:",deleteParcel)

module.exports = router;