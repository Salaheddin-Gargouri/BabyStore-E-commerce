const express = require("express");
const {
  registerRoules,
  AddProductRoules,
  validator,
} = require("../middleware/validator");
const {
  register,
  login,
  auth,
  AddProduct,
  GettAllProducts,
  updateProduct,
  deletProduct,
  deletClient,
  GettAllClients,
  updateClient,
  ProductByCategorie,
  ProductById,
} = require("../controllers/client.controllers");
const router = express.Router();
const verifyAuth = require("../middleware/verifyAuth");

//**************************************************** */
router.post("/register", registerRoules(), validator, register);
router.post("/login", login);
router.get("/auth", verifyAuth, auth);
router.post("/Addproduct", AddProduct);
router.get("/GettAllProducts", GettAllProducts);
router.get(
  "/GettSpecificProductByCategorie/:productCathegory",
  ProductByCategorie
);
router.get("/GettSpecificProductByID/:id", ProductById);
router.get("/GettAllClients", GettAllClients);
router.put("/updateProduct/:_id", updateProduct);

router.put("/updateClienToBlock/:_id", updateClient);

router.delete("/deleteProduct/:_id", deletProduct);

router.delete("/deletClient/:_id", deletClient);

module.exports = router;
