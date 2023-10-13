const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    blocking: {
      type: Boolean,
      default: false,
    },
    userRole: {
      type: String,
      roles: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Client", clientSchema);
