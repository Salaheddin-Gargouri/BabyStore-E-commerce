import React from "react";

const poubelle = () => {
  return (
    <div className="card">
      <div className="donnerpersonnel" style={{ marginTop: "120px" }}>
        <div class="card-client">
          <div class="user-picture">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
            </svg>
          </div>
          <p class="name-client">
            {" "}
            prenom
            <span> nom</span>
          </p>
          <div class="social-media">
            <a href="#">
              <AddLocationAltIcon />
              <span class="tooltip-social">adresse</span>
            </a>
            <a href="#">
              <MailIcon />
              <span class="tooltip-social">Email</span>
            </a>
            <a href="#">
              <AddIcCallIcon />
              <span class="tooltip-social">telephone</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default poubelle;
