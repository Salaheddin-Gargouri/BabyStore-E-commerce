import { React, useState } from "react";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions";
import { Link, Navigate } from "react-router-dom";
const SignUp = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [telephone, setTelephone] = useState("");
  const { loading, clients } = useSelector((state) => state.reducerRecister);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      prenom,
      nom,
      email,
      password,
      adress,
      telephone,
    };

    dispatch(registerUser(newClient));
    setPrenom("");
    setNom("");
    setEmail("");
    setPassword("");
    setAdress("");
    setTelephone("");
  };
  console.log(clients);

  return (
    <div>
      <img
        className="imageback"
        src="https://cdn.discordapp.com/attachments/1105069069113245807/1154419661924990986/slider-ne-a-la-maternite_1200x.png"
        alt="logo"
      />
      <div className="register">
        {loading ? (
          <h1>loading .... </h1>
        ) : clients ? (
          <Navigate to={"/login"} />
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <p class="title">Register </p>
            <p class="message">
              Inscrivez-vous maintenant et obtenez un accès complet à notre
              application.{" "}
            </p>
            <div class="flex">
              <label>
                <input
                  required="true"
                  placeholder=""
                  type="text"
                  class="input"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
                <span>Prénom</span>
              </label>

              <label>
                <input
                  required="true"
                  placeholder=""
                  type="text"
                  class="input"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
                <span>Nom</span>
              </label>
            </div>

            <label>
              <input
                required="true"
                placeholder=""
                type="email"
                class="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
            </label>

            <label>
              <input
                required="true"
                placeholder=""
                type=""
                class="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span> Mot de passe</span>
            </label>
            <label>
              <input
                required="true"
                placeholder=""
                type="text"
                class="input"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
              <span>Adresse</span>
            </label>
            <label>
              <input
                required="true"
                placeholder=""
                type="tel"
                class="input"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <span>Numéro de téléphone</span>
            </label>
            <button class="submit" type="submit">
              Submit
            </button>
            <Link to={"/login"}>
              <button
                style={{
                  width: "477px",
                  height: "50px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <p class="signin">Vous avez déjà un compte ? </p>{" "}
              </button>
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
