const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Client = require("../models/client");
const client = require("../models/client");
const secret = config.get("secret");
const Productm = require("../models/product");

//*************   Register  ************************* */

exports.register = async (req, res) => {
  const { nom, prenom, email, password, adress, telephone } = req.body;
  const existClient = await Client.findOne({ email });
  if (existClient) {
    res.status(409).json({ mes: "Cette adresse e-mail est déjà utilisée !" });
  }
  try {
    const newClient = new Client({
      nom,
      prenom,
      email,
      password,
      adress,
      telephone,
    });

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    newClient.password = hash;

    await newClient.save();
    const payload = { id: newClient._id };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      client: {
        id: newClient._id,
        nom: newClient.nom,
        prenom: newClient.prenom,
        email: newClient.email,
        password: newClient.password,
        adress: newClient.adress,
        telephone: newClient.telephone,
        timestamps: newClient.timestamps,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//****************** Login ********************************* */

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginClient = await Client.findOne({ email });
    if (!loginClient)
      return res.status(404).json({
        msg: "Les coordonnes que vous avez saisi est incorrect. Veuillez réessayer.",
      });
    const isMatch = await bcrypt.compare(password, loginClient.password);
    if (!isMatch)
      return res.status(404).json({
        msg: "Les coordonnes que vous avez saisi est incorrect. Veuillez réessayer.",
      });
    const payload = { id: loginClient._id };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      loginClient: {
        id: loginClient._id,
        nom: loginClient.nom,
        prenom: loginClient.prenom,
        email: loginClient.email,
        adress: loginClient.adress,
        telephone: loginClient.telephone,
        userRole: loginClient.userRole,
        timestamps: loginClient.timestamps,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//*****************auth ************************ */

exports.auth = (req, res) => {
  res.send(req.client);
};

//*******************Add**Product********************* */

exports.AddProduct = async (req, res) => {
  const {
    productName,
    productCathegory,
    productConstructor,
    productNewPrice,
    productPromo,
    productStock,
    productDescreption,
    productImg1,
    prenom,
    email,
  } = req.body;
  try {
    const newProduct = new Productm({
      productName,
      productCathegory,
      productConstructor,
      productNewPrice,
      productPromo,
      productStock,
      productDescreption,
      productImg1,
      prenom,
      email,
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//*******************get**all **Product********************* */

exports.GettAllProducts = async (req, res) => {
  try {
    const allProducts = await Productm.find();
    res.send(allProducts);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
//*******************filter by catégorie********************* */

exports.ProductByCategorie = async (req, res) => {
  try {
    const productCathegory = req.params.productCathegory;
    const Productsbycategorie = await Productm.find({
      productCathegory: productCathegory,
    });
    res.status(201).send(Productsbycategorie);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
//*******************get**all **Client********************* */

exports.GettAllClients = async (req, res) => {
  try {
    const allClients = await Client.find();
    res.status(201).send(allClients);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};

//*******************Update product ********************* */

exports.updateProduct = async (req, res) => {
  try {
    const updateProduct = await Productm.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(updateProduct);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
//*******************delete product ********************* */
exports.deletProduct = async (req, res) => {
  try {
    await Productm.findByIdAndDelete(req.params._id);
    res.status(201).send("product  is deleted");
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
//*******************delete client ********************* */
exports.deletClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params._id);
    res.status(201).send("Client  is deleted");
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
//**************to block a user ***************** */

exports.updateClient = async (req, res) => {
  try {
    const updateClient = await Client.findByIdAndUpdate(
      req.params._id,
      { ...req.body },
      { new: true }
    );
    res.status(201).send(updateClient);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
/* get product by id*/

exports.ProductById = async (req, res) => {
  try {
    const SpecificProduct = await Productm.findById(req.params.id);
    res.status(201).send(SpecificProduct);
  } catch (error) {
    res.status(501).json({ msg: error.message });
  }
};
