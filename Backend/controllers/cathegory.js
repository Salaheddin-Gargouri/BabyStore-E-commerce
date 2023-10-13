const express = require("express");
const cathegorySchema = require("../models/cathegory");

exports.AddCategory = async (req, res) => {
  const { titre, imageURL } = req.body;
  try {
    const newCathegory = new cathegorySchema({
      titre,
      imageURL,
    });
    await newCathegory.save();
    res.status(201).send(newCathegory);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//*******************get**all **Product********************* */

exports.GettAllCathegory = async (req, res) => {
  try {
    const GettAllCathegory = await cathegorySchema.find();
    res.send(GettAllCathegory);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
