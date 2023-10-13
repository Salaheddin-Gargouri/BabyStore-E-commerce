import React, { useEffect } from "react";
import "./Entette.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import ShoppingBtn from "../ShpingBtn/ShoppingBtn";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

import { Link, Navigate } from "react-router-dom";
import AddBtn from "../AddBtn/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions";

const Entete = ({ handleSearch }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const { clients, isAuth } = useSelector((state) => state.reducerRecister);
  console.log(clients);

  return (
    <div>
      <div className="topNav">
        <h6 style={{ fontWeight: "400" }}>
          Bienvenue dans notre Baby Store, le paradis des bébés ! Nous sommes là
          pour vous aider à trouver tout ce dont vous avez besoin pour votre
          bébé
        </h6>
      </div>
      <div className="mainNav">
        <div className="rightBlock">
          <h3
            style={{
              fontSize: "14px",
              cursor: "pointer",
              marginRight: "30px",
              marginTop: "9px",
            }}
          >
            FR
          </h3>
          <form type="search" onChange={handleSearch}>
            <input className="input" placeholder="  Recherche"></input>
            <SearchIcon className="serachIcon" />
          </form>
        </div>
        <div className="centerBlock">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                width: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <h1 style={{ color: "#bae5e5" }}>Baby </h1>
              <h1 style={{ color: "#ff4b61" }}> Store</h1>
            </button>
          </Link>
        </div>

        <div className="leftBlock">
          <div>
            <Link to={"/register"}>
              <button
                type="submit"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src="https://icons.veryicon.com/png/o/miscellaneous/esgcc-basic-icon-library/register-14.png"
                  alt="logo"
                />
                <h6
                  className=" ShoppingCARD"
                  style={{ width: "80px", fontSize: "10px" }}
                >
                  Créer votre compte
                </h6>
              </button>
            </Link>
            {!isAuth ? (
              <Link to={"/login"}>
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/70/70310.png"
                    alt="logo"
                    className="addLogo"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <h6
                    style={{ width: "80px", fontSize: "10px" }}
                    className=" ShoppingCARD"
                  >
                    Ajouter un produit
                  </h6>
                </button>
              </Link>
            ) : (
              <Link to={"/AddProduct"}>
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/70/70310.png"
                    alt="logo"
                    className="addLogo"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginTop: "5px",
                    }}
                  />
                  <h6
                    className=" ShoppingCARD"
                    style={{ width: "80px", fontSize: "10px" }}
                  >
                    Ajouter un produit
                  </h6>
                </button>
              </Link>
            )}
          </div>
          <div>
            {!isAuth ? (
              <Link to={"/login"}>
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5807/5807672.png"
                    alt="logo"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      width: "30px",
                      height: "30px",
                    }}
                    className="addLogo"
                  />
                  <h6
                    className=" ShoppingCARD"
                    style={{ width: "80px", fontSize: "10px" }}
                  >
                    Se connecter
                  </h6>
                </button>
              </Link>
            ) : (
              <Link to={"/a"}>
                {" "}
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5807/5807672.png"
                    alt="logo"
                    className="addLogo"
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  />
                  <h6
                    className=" ShoppingCARD"
                    style={{ width: "80px", fontSize: "10px" }}
                  >
                    Se connecter
                  </h6>
                </button>
              </Link>
            )}
          </div>
          <></>
          <div>
            {!isAuth ? (
              <Link to={"/login"}>
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <img
                    src=" https://cdn.icon-icons.com/icons2/1744/PNG/512/3643770-favorite-heart-like-likes-love-loved_113432.png "
                    alt="logo"
                    className="panierLogo"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <h6
                    className=" ShoppingCARD"
                    style={{ width: "80px", fontSize: "10px" }}
                  >
                    Mon préféré
                  </h6>
                </button>
              </Link>
            ) : (
              <Link to={"/Mybest"}>
                {" "}
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <img
                    src=" https://cdn.icon-icons.com/icons2/1744/PNG/512/3643770-favorite-heart-like-likes-love-loved_113432.png "
                    alt="logo"
                    className="panierLogo"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h6 style={{ width: "80px", fontSize: "10px" }}>
                    Mon préféré
                  </h6>
                </button>
              </Link>
            )}
          </div>
          <></>
          <div>
            {!isAuth ? (
              <Link to={"/login"}>
                <button
                  type="submit"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/118/118089.png"
                    alt="logo"
                    className="panierLogo"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <h6
                    className=" ShoppingCARD"
                    style={{ width: "80px", fontSize: "10px" }}
                  >
                    Shopping Cart
                  </h6>
                </button>
              </Link>
            ) : (
              <Link to={"/shop"}>
                {" "}
                <button
                  type="submit"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/118/118089.png"
                    alt="logo"
                    className="panierLogo"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <h6 style={{ width: "80px", fontSize: "10px" }}>
                    Shopping Cart
                  </h6>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entete;
