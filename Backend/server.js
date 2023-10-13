const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const client = require("./routes/client");
const cathegory = require("./routes/cathegory");

//******************************************* */
app.use(express.json({ limit: "500mb", extended: true }));
app.use(express.json());
connectDB();

//******************************************* */

app.use("/client", client);
app.use("/cathegory", cathegory);
app.listen(8000, (error) =>
  error ? console.log(error) : console.log("port is runnig on 8000")
);
