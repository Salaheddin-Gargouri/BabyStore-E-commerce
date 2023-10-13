const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productCathegory: {
      type: String,
      required: true,
    },

    productConstructor: {
      type: String,
    },

    productNewPrice: {
      type: Number,
      required: true,
    },
    productPromo: {
      type: Number,
      required: true,
    },
    productStock: {
      type: Number,
      required: true,
    },
    productDescreption: {
      type: String,
      required: true,
    },
    productImg1: {
      type: String,
    },
    prenom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Productm", productSchema);
