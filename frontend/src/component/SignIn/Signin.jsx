import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions";
import { Navigate } from "react-router-dom";
import "./SignIn.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { clients, loading } = useSelector((state) => state.reducerRecister);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      email,
      password,
    };
    dispatch(loginUser(newClient));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signInPage">
      <img
        className="imageback"
        src="https://cdn.discordapp.com/attachments/1105069069113245807/1154419661924990986/slider-ne-a-la-maternite_1200x.png"
        alt="logo"
      />
      {loading ? (
        <h1> loading...</h1>
      ) : clients?.userRole === "admin" ? (
        <Navigate to={"/AceilAdmin"} />
      ) : clients?.userRole === "user" ? (
        <Navigate to={"/"} />
      ) : (
        <form className="block">
          <div>
            <img
              src="https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg"
              alt="userlogo"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "150px",
                marginLeft: "150px",
                marginTop: "10px",
              }}
            />
            <label style={{ margin: "50px" }}>
              <input
                style={{
                  width: "300px",

                  height: "40px",
                }}
                required="true"
                placeholder="Email"
                type="email"
                class="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                style={{ width: "300px", height: "40px" }}
                required="true"
                placeholder="Password"
                type="tel"
                class="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button
            style={{ margin: "50px", width: "150px", height: "40px" }}
            class="submit"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Signin;
