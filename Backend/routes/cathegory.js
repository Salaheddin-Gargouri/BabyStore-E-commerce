const express = require("express");
const router = express.Router();

const { AddCategory, GettAllCathegory } = require("../controllers/cathegory");

router.post("/AddCategory", AddCategory);
router.get("/GettAllCathegory", GettAllCathegory);
module.exports = router;
