import { deleteUser, getAllUsers } from "../controllers/user";

const express = require("express");
const router = express.Router()


// DELETING USER

router.delete("/:id",deleteUser)

// GET ALL USSER

router.get("/",getAllUsers)


module.exports = routers;