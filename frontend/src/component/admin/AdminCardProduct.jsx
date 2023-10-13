import React from "react";
import "./AdminCardProduct.css";
import { useDispatch } from "react-redux";
import {
  deleteCardFromShoppingCard,
  deleteproduct,
  getOneProduct,
} from "../../redux/actions";
const AdminCardProduct = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="cardProdAdm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "1480px",
        height: "40px",

        margin: "5px",
        borderRadius: "10px",
      }}
    >
      <h6 style={{ width: "200px" }}>{el._id}</h6>
      <h6 style={{ marginLeft: "-80px", width: "200px" }}>
        {el.productCathegory}
      </h6>
      <h6 style={{ marginLeft: "-150px", width: "200px" }}>{el.productName}</h6>
      <img
        style={{ marginLeft: "-50px", width: "40px", height: "40px" }}
        src={el.productImg1}
        alt="logo"
      />

      <h6 style={{ marginLeft: "20px", width: "60px" }}>
        {el.productNewPrice}
      </h6>
      <h6>{el.productStock}</h6>

      <div class="box">
        <div class="arrow right"></div>
        <div class="textt">Modifier</div>
      </div>
      <button
        onClick={() => dispatch(deleteproduct(el._id))}
        class="delete-button"
        style={{
          marginRight: "50px",
        }}
      >
        <svg class="delete-svgIcon" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
      </button>
    </div>
  );
};

export default AdminCardProduct;
