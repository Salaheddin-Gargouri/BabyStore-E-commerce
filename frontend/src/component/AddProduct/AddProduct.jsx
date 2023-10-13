import React, { useState } from "react";
import "./AddProduct.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { newProduct } from "../../redux/actions";

const AddProduct = () => {
  const { clients } = useSelector((state) => state.reducerRecister);
  console.log(clients);
  const [productCathegory, setProductCathegory] = React.useState("");
  const handleChange = (event) => {
    setProductCathegory(event.target.value);
  };
  const [productName, setProductName] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productPromo, setProductPromo] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productDescreption, setProductDescreption] = useState("");
  const [productImg1, setProductImg1] = useState("");
  const [email, setEmail] = useState(clients?.email);
  const [prenom, setPrenom] = useState(clients?.prenom);

  const handlImage = (e) => {
    let files = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataURL = e.target.result;
      files = dataURL;
      setProductImg1(files);
    };
    reader.readAsDataURL(files);
  };

  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();

    const newproduct = {
      productName,
      productCathegory,
      productNewPrice,
      productPromo,
      productStock,
      productDescreption,
      productImg1,
      prenom,
      email,
    };
    dispatch(newProduct(newproduct));
    setProductName("");
    setProductNewPrice("");
    setProductPromo("");
    setProductStock("");
    setProductDescreption("");
  };

  return (
    <div>
      <img
        className="imagebackk"
        src="https://cdn.discordapp.com/attachments/1105069069113245807/1154419661924990986/slider-ne-a-la-maternite_1200x.png"
        alt="logo"
      />
      <form
        className="formm"
        style={{ display: "flex", justifyContent: "space-evenly" }}
        onSubmit={handlesubmit}
        action=""
      >
        <div
          className="imgbtnn"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "italic",
              marginTop: "40px",
              marginBottom: "30px",
            }}
          >
            {" "}
            Ajouter une image de votre produit
          </h3>
          <img
            style={{
              width: "300px",
              height: "300px",
              border: "none",
              fontWeight: "700",
            }}
            src={productImg1}
            alt="logo"
          />
          <input type="file" id="file" onChange={(e) => handlImage(e)} />
        </div>
        <div
          className="cathegori"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            marginTop: "-180px",
            marginLeft: "50px",
          }}
        >
          <h3
            style={{
              fontFamily: "italic",
              width: "400px",
            }}
          >
            {" "}
            Sélectionner une catégorie
          </h3>
          <Box sx={{ minWidth: 400, marginLeft: "-200px", marginTop: "40px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Cathégories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productCathegory}
                label="Cathegories"
                onChange={handleChange}
              >
                <MenuItem value={"Valise de maternité"}>
                  Valise de maternité
                </MenuItem>
                <MenuItem value={"Vêtements"}>Vêtements</MenuItem>
                <MenuItem value={"Chambres"}>Chambres</MenuItem>
                <MenuItem value={"Hygiéne"}>Hygiéne</MenuItem>
                <MenuItem value={"Siège Auto"}>Siège Auto</MenuItem>
                <MenuItem value={"Jouets bébé"}>Jouets bébé</MenuItem>
                <MenuItem value={"Beauté & Soin"}>Beauté & Soin</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginTop: "40px" }}>
            <div>
              <label
                htmlFor=""
                style={{
                  fontFamily: "italic",
                  fontSize: "26px",
                  height: "40px",
                  width: "300px",
                }}
              >
                Nom de produit
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                style={{
                  fontFamily: "italic",
                  fontSize: "20px",
                  marginLeft: "10px",
                  width: "180px",
                  height: "40px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                }}
              />
            </div>

            <div>
              <label
                htmlFor=""
                style={{
                  fontFamily: "italic",
                  fontSize: "26px",
                  height: "40px",
                  width: "300px",
                }}
              >
                Propriétaire de produit
              </label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                style={{
                  fontFamily: "italic",
                  fontSize: "20px",
                  marginLeft: "10px",
                  width: "180px",
                  height: "40px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                }}
              />
              <label
                htmlFor=""
                style={{
                  fontFamily: "italic",
                  fontSize: "26px",
                  height: "40px",
                  width: "300px",
                }}
              >
                Email du Propriétaire
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  fontFamily: "italic",
                  fontSize: "20px",
                  marginLeft: "10px",
                  width: "180px",
                  height: "40px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <div>
              <label
                htmlFor=""
                style={{
                  fontFamily: "italic",
                  fontSize: "26px",
                  height: "40px",
                  width: "300px",
                }}
              >
                {" "}
                Prix de produit
              </label>
              <input
                value={productNewPrice}
                onChange={(e) => setProductNewPrice(e.target.value)}
                type="text"
                style={{
                  fontFamily: "italic",
                  fontSize: "20px",
                  marginLeft: "10px",
                  width: "180px",
                  height: "40px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <div>
              <label
                htmlFor=""
                style={{
                  fontFamily: "italic",
                  fontSize: "26px",
                  height: "40px",
                  width: "300px",
                }}
              >
                {" "}
                Prix avant Remise
              </label>
              <input
                value={productPromo}
                onChange={(e) => setProductPromo(e.target.value)}
                type="text"
                style={{
                  fontFamily: "italic",
                  fontSize: "20px",
                  marginLeft: "10px",
                  width: "180px",
                  height: "40px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                }}
              />
            </div>

            <div>
              <label
                htmlFor=""
                style={{
                  fontFamily: "italic",
                  fontSize: "26px",
                  height: "40px",
                  width: "300px",
                }}
              >
                {" "}
                Nombre de stock{" "}
              </label>
              <input
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                type="text"
                style={{
                  fontFamily: "italic",
                  fontSize: "20px",
                  marginLeft: "10px",
                  width: "180px",
                  height: "40px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <div>
              <label
                htmlFor=""
                style={{
                  fontFamily: "italic",
                  fontSize: "26px",
                  height: "40px",
                  width: "300px",
                }}
              >
                {" "}
                Description{" "}
              </label>
              <input
                value={productDescreption}
                onChange={(e) => setProductDescreption(e.target.value)}
                type="text"
                style={{
                  fontFamily: "italic",
                  fontSize: "20px",
                  marginLeft: "10px",
                  width: "180px",
                  height: "40px",
                  borderColor: "gray",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>
          <button
            className="buttond"
            type="submit"
            style={{ marginTop: "50px" }}
          >
            Ajouter{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
