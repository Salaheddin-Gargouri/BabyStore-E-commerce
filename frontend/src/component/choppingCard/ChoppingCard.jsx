import "./ChoppingCard.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCardFromShoppingCard, getOneProduct } from "../../redux/actions";
import { useEffect } from "react";

const ChoppingCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct());
  }, []);

  const { productss, total, cardQuantity } = useSelector(
    (state) => state.reducerCard
  );
  const handelDelete = (el) => {
    dispatch(deleteCardFromShoppingCard(el));
  };

  return (
    <div className="tous">
      <div
        style={{
          height: "120px",
          display: "flex",
          alignItems: "center",
          marginTop: "1px",
        }}
      >
        <h1 className="PanierShopTitle">Panier</h1>
        <div className="ligne"></div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          {productss.map((el) => (
            <div className="product" key={el._id}>
              <img
                className="imgSHOP"
                src={el.product.productImg1}
                alt="logo"
              />
              <div className="block_Right">
                <h1 className="titreSHOP">{el.product.productName} </h1>
                <h1 className="prixShop">{el.product.productNewPrice} Dt </h1>
              </div>
              <div className="deletebutton">
                <button
                  class="delete-button"
                  onClick={() => handelDelete(el.product._id)}
                >
                  <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="total">
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
                fontStyle: "italic",
                fontSize: "16px",
              }}
            >
              <h3>{cardQuantity} </h3>
              <h3> articles </h3>
            </div>
            <div
              style={{
                width: "300px",
                display: "flex",
                justifyContent: "space-between",
                fontStyle: "italic",
                fontSize: "16px",
              }}
            >
              <h3>Livraison </h3>
              <h3>gratuit</h3>
            </div>
            <div
              style={{
                width: "380px",
                display: "flex",
                justifyContent: "space-between",
                fontStyle: "italic",
                fontSize: "16px",
                color: "rgb(241, 45, 94)",

                marginTop: "50px",
              }}
            >
              <h2>Total TTC </h2>
              <h2>{total} Dt</h2>
            </div>
          </div>
          <div
            className="commander"
            style={{
              marginTop: "370px",
              marginLeft: "280px",
              position: "fixed",
              top: "20",
              left: "150",
            }}
          >
            <button className="buttond">Commander</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoppingCard;
