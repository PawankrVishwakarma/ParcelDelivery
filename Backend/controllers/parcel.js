const Parcel = require("../models/Parcel");

// CREATE A PARCEL

const createParcel = async (req, res) => {
  try {
    const newParcel = Parcel(req.body);
    const parcel = await newParcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL PARCELS

const getAllParcels = async (req, res) => {
  try {
    const parcel = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE THE PARCEL

const updateParcel = async () => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(201).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ONE PARCEL

const getOneParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET USER'S PARCEL

const getUserParcel = async (req, res) => {
  try {
    const parcel = await Parcel.find({ senderemail: req.body.email }).sort({
      created: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE A PARCEL

const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(201).json("Parcel has been deleted successsfully");
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {deleteParcel, getUserParcel, getOneParcel, updateParcel, getAllParcels, createParcel}