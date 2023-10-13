import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./CardProduct.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { getOneProduct, getunProduct } from "../../redux/actions";

const CardProduct = ({ el }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleShopCardAdd = (el) => {
    dispatch(getOneProduct(el));
  };

  const handlepreferCardAdd = (el) => {
    dispatch(getunProduct(el));
  };

  return (
    <div className="cardProduct">
      <img className="imgCart" src={el.productImg1} alt="logoproduct" />
      <h3 className="titre">{el.productName}</h3>
      <div className="iconCart">
        <div className="Icon">
          <div>
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={handleShow}
            >
              <QuestionMarkIcon />
            </button>

            <Modal
              style={{ marginLeft: "-200px" }}
              show={show}
              onHide={handleClose}
            >
              <div className="moreInfo">
                <Modal.Body>
                  <div
                    className="topModal"
                    style={{ marginTop: "40px", marginLeft: "-10px" }}
                  >
                    <div className="modalImage">
                      <img
                        style={{
                          width: "400px",
                          height: "400px",
                          marginRight: "30px",
                          borderRadius: "5px",
                        }}
                        src={el.productImg1}
                        alt="modaleImage"
                      />
                    </div>
                    <div
                      style={{
                        width: "430px",
                        height: "400px",
                      }}
                      className="modaleBlockLeft"
                    >
                      <h5
                        style={{
                          color: "#A4A4A4",
                          fontSize: "12px",
                          lineHeight: "20px",
                          wordSpacing: "0px",
                        }}
                      >
                        Référance :{el._id}
                      </h5>
                      <h1
                        style={{
                          color: "red",
                          fontSize: "22px",
                          lineHeight: "24px",
                          wordSpacing: "0px",
                          fontWeight: "700",
                        }}
                      >
                        {el.productCathegory}
                      </h1>
                      <h1
                        style={{
                          color: "black",
                          fontSize: "22px",
                          lineHeight: "24px",
                          wordSpacing: "0px",
                          fontWeight: "700",
                        }}
                      >
                        {el.productName}
                      </h1>
                      <h3
                        style={{
                          color: "black",
                          fontSize: "22px",
                          lineHeight: "24px",
                          wordSpacing: "0px",
                        }}
                      >
                        {el.prenom}
                      </h3>
                      <h3
                        style={{
                          color: "black",
                          fontSize: "22px",
                          lineHeight: "24px",
                          wordSpacing: "0px",
                        }}
                      >
                        {el.email}
                      </h3>

                      <h3
                        style={{
                          color: "#FF4B61",
                          fontSize: "22px",
                          lineHeight: "24px",
                          wordSpacing: "0px",
                          fontWeight: "400",
                        }}
                      >
                        {el.productNewPrice} DT
                      </h3>
                      <h3
                        style={{
                          color: "#A4A4A4",
                          fontSize: "22px",
                          lineHeight: "24px",
                          wordSpacing: "0px",
                          fontWeight: "400",
                          textDecoration: "line-through",
                        }}
                      >
                        {el.productPromo} DT
                      </h3>
                      <h3
                        style={{
                          color: "black",
                          fontSize: "22px",
                          lineHeight: "24px",
                          wordSpacing: "0px",
                        }}
                      >
                        La quantité disponible : {el.productStock}
                      </h3>
                      <div className="button_Modale">
                        <button
                          className="ajouter_au_pannier "
                          onClick={() => handleShopCardAdd(el)}
                        >
                          <LocalGroceryStoreIcon
                            style={{
                              color: "white",
                              marginLeft: "10px",
                              marginRight: "10px",
                            }}
                          />

                          <h3
                            style={{
                              color: "black",
                              fontSize: "16px",
                              lineHeight: "24px",
                              wordSpacing: "0px",
                              marginBottom: "2px",
                            }}
                          >
                            Ajouter au pannier
                          </h3>
                        </button>

                        <button
                          className="ajouter_a_ma_liste "
                          onClick={() => handlepreferCardAdd(el)}
                        >
                          <FavoriteBorderIcon
                            style={{
                              color: "white",
                              marginLeft: "10px",
                              marginRight: "10px",
                            }}
                          />
                          <h3
                            style={{
                              color: "black",
                              fontSize: "16px",
                              lineHeight: "24px",
                              wordSpacing: "0px",
                              marginBottom: "2px",
                            }}
                          >
                            Ajouter a ma liste
                          </h3>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="buttomModal"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h6
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "gray",
                        width: "700px",
                        wordSpacing: "3px",
                        marginTop: "20px",
                        textAlign: "center",
                      }}
                    >
                      En achetant ce produit, vous pouvez gagner jusqu'à 6
                      points de fidélité. Votre panier sera total 6 points qui
                      peut être converti en un bon de 6.00DT
                    </h6>
                  </div>
                </Modal.Body>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
