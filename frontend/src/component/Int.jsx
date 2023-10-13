import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailIcon from "@mui/icons-material/Mail";
import "./Int.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions";
import AdminCardProduct from "./admin/AdminCardProduct";

const Int = () => {
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.reducerRecister);
  const { products } = useSelector((state) => state.reducers);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Données personnelles">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={"/"}>
                <button
                  className="buttond"
                  type="submit"
                  style={{ marginRight: "50px" }}
                >
                  acceuil{" "}
                </button>
              </Link>
              <Link to={"/a"}>
                <button class="Btns">
                  <div class="sign" onClick={handleLogout}>
                    <svg viewBox="0 0 512 512">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>

                  <div class="text">Logout</div>
                </button>
              </Link>
            </div>
            <div
              className="espace"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ecf1f0",
                  width: "250px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  boxShadow: "-3px 3px 17px -3px rgba(0, 0, 0, 0.75)",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5807/5807672.png"
                  alt="logo"
                  className="addLogo"
                  style={{ width: "30px", height: "30px" }}
                />
                <h3>
                  {clients?.nom}
                  <br></br>
                  {clients?.prenom}
                </h3>
              </div>
              <div
                style={{
                  width: "350px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  boxShadow: "-3px 3px 17px -3px rgba(0, 0, 0, 0.75)",
                  backgroundColor: "#ecf1f0",
                }}
              >
                <MailIcon
                  className="addLogo"
                  style={{ width: "30px", height: "30px" }}
                />
                <h3>{clients?.email}</h3>
              </div>
              <div
                style={{
                  width: "350px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  boxShadow: "-3px 3px 17px -3px rgba(0, 0, 0, 0.75)",
                  backgroundColor: "#ecf1f0",
                }}
              >
                <AddLocationAltIcon
                  className="addLogo"
                  style={{ width: "30px", height: "30px" }}
                />
                <h3> {clients?.adress}</h3>
              </div>
              <div
                style={{
                  width: "250px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  boxShadow: "-3px 3px 17px -3px rgba(0, 0, 0, 0.75)",
                  backgroundColor: "#ecf1f0",
                }}
              >
                <AddIcCallIcon
                  className="addLogo"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
                <h3> {clients?.telephone}</h3>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Liste des produits">
            {products
              ?.filter((el) => el.email === clients?.email)
              ?.map((el) => (
                <div>
                  <AdminCardProduct key={el._id} el={el} />
                </div>
              ))}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Int;
