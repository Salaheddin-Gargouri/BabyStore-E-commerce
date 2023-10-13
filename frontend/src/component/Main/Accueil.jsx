import "./Accueil.css";
import CathegoryCard from "../CathegoryCard/CathegoryCard";
import CardList from "../cardList/CardList";

const Accueil = ({ search }) => {
  return (
    <div>
      <div>
        <div className="imgacc">
          <h1> </h1>
        </div>
        <div>
          <h1 className="tittree">
            L’expertise des maternités pour votre bébé.
          </h1>
          <h3 className="para">
            Des produits cautionnés et utilisés par les professionnels de vos
            maternités pour prendre soin de votre bébé.
          </h3>
        </div>
        <div className="pub">
          <img
            style={{ width: "100px", height: "80", margin: "10px" }}
            src="https://ne-a-la-maternite.fr/cdn/shop/files/cosmos_ecocert-sans-fond_36a643d4-92c0-482a-8854-49e20a51471e_200x.png?v=1662449616"
            alt="logo"
          ></img>
          <img
            style={{ width: "100px", height: "80", margin: "10px" }}
            src="https://ne-a-la-maternite.fr/cdn/shop/files/Logo_Cosmebio_Q_6ea18174-3c8b-4f48-9574-98fc513779bc_200x.png?v=1655370989"
            alt="logo"
          ></img>
          <img
            style={{ width: "100px", height: "80", margin: "10px" }}
            src="https://ne-a-la-maternite.fr/cdn/shop/files/logo_Fabrique_en_France_d77e6a84-ae0b-4280-aee0-a839e9371299_200x.png?v=1655371017"
            alt="logo"
          ></img>
        </div>
        <div>
          <div className="bac">
            <h1 className="aff">Choisissez la catégorie qui vous intéresse</h1>
          </div>
          <div style={{ marginTop: "830px" }}></div>
          <CathegoryCard />
          <CardList search={search} />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
