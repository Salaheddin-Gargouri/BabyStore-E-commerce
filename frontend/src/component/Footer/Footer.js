import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h4>À propos</h4>
              <p>
                BabyStore est une boutique en ligne spécialisée dans la vente de
                produits pour bébés et enfants. Nous proposons une large gamme
                de produits, des vêtements aux jouets, en passant par les
                articles de puériculture.
              </p>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Qui sommes-nous ?</a>
                </li>
                <li>
                  <a href="#">Notre histoire</a>
                </li>
                <li>
                  <a href="#">Nos valeurs</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h4>Contact</h4>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Contactez-nous</a>
                </li>
                <li>
                  <a href="#">Livraison et retours</a>
                </li>
                <li>
                  <a href="#">Mentions légales</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h4>Suivez-nous</h4>
              <ul class="list-inline">
                <li>
                  <a href="#" class="fab fa-facebook-f">
                    facebook
                  </a>
                </li>

                <li>
                  <a href="#" class="fab fa-twitter">
                    twitter
                  </a>
                </li>

                <li>
                  <a href="#" class="fab fa-instagram">
                    instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="copyright">
            &copy; 2023 BabyStore. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
