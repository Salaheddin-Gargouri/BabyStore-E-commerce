const express = require("express");
const { check, validationResult } = require("express-validator");

//*************************register******validator************** */
exports.registerRoules = () => [
  check("nom", " Veuillez remplir votre nom ").notEmpty(),
  check("prenom", "Veuillez remplir votre prénom").notEmpty(),
  check("email", "Veuillez vérifier votre E-mail").isEmail(),
  check(
    "password",
    "veuillez remplir ce champ correctement au moin 6 caractéres"
  ).isLength({ min: 6 }),
  check("adress", "Veuillez remplir votre adress").notEmpty(),
  check(
    "telephone",
    "Veuillez remplir votre numéro de téléphone correctement"
  ).isLength({ min: 8 }),
];

//*************************end************** */

//*************************AddProduct*Validator************** */
exports.AddProductRoules = () => [
  check("productName", "Veuillez remplir ce champ correctement").notEmpty(),
  check(
    "productCathegory",
    "Veuillez remplir ce champ correctement  "
  ).notEmpty(),
  check(
    "productConstructor",
    "Veuillez remplir ce champ correctement  "
  ).notEmpty(),
  check(
    "productNewPrice",
    "Veuillez remplir ce champ correctement  "
  ).notEmpty(),
  check("productPromo", "Veuillez remplir ce champ correctement  ").notEmpty(),
  check("productStock", "Veuillez remplir ce champ correctement  ").notEmpty(),
  check(
    "productDescreption",
    "Veuillez remplir ce champ correctement  "
  ).notEmpty(),
  check("productImg1", "Veuillez remplir ce champ correctement  ").notEmpty(),
  check("productImg2", "Veuillez remplir ce champ correctement  ").notEmpty(),
  check("productImg3", "Veuillez remplir ce champ correctement  ").notEmpty(),
];
//*************************end************** */

exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
