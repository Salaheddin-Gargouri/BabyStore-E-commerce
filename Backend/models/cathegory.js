const mongoose = require("mongoose");
const schema = mongoose.Schema;
const cathegorySchema = new schema({
  titre: String,
  imageURL: String,
});
module.exports = mongoose.model("cathegorySchema", cathegorySchema);
