// import React, { useEffect } from "react";
// import "./Profile.css";
// import CathegoryCard from "../CathegoryCard/CathegoryCard";
// import CardList from "../cardList/CardList";
// import { useDispatch, useSelector } from "react-redux";
// import { getProfile } from "../../redux/actions";
// import { Navigate } from "react-router-dom";

// const Profile = ({ search }) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProfile());
//   }, []);
//   const { clients, isAuth } = useSelector((state) => state.reducerRecister);
//   console.log(clients);
//   return (
//     <div>
//       {!isAuth ? (
//         <Navigate to={"/login"} />
//       ) : (
//         <div>
//           <div className="imgacc">
//             <h1>jj</h1>
//           </div>
//           <div>
//             <h1 className="tittree">
//               L’expertise des maternités pour votre bébé.
//             </h1>
//             <h3 className="para">
//               Des produits cautionnés et utilisés par les professionnels de vos
//               maternités pour prendre soin de votre bébé.
//             </h3>
//           </div>
//           <div className="pub">
//             <img
//               style={{ width: "100px", height: "80", margin: "10px" }}
//               src="https://ne-a-la-maternite.fr/cdn/shop/files/cosmos_ecocert-sans-fond_36a643d4-92c0-482a-8854-49e20a51471e_200x.png?v=1662449616"
//               alt="logo"
//             ></img>
//             <img
//               style={{ width: "100px", height: "80", margin: "10px" }}
//               src="https://ne-a-la-maternite.fr/cdn/shop/files/Logo_Cosmebio_Q_6ea18174-3c8b-4f48-9574-98fc513779bc_200x.png?v=1655370989"
//               alt="logo"
//             ></img>
//             <img
//               style={{ width: "100px", height: "80", margin: "10px" }}
//               src="https://ne-a-la-maternite.fr/cdn/shop/files/logo_Fabrique_en_France_d77e6a84-ae0b-4280-aee0-a839e9371299_200x.png?v=1655371017"
//               alt="logo"
//             ></img>
//           </div>
//           <div>
//             <div className="bac">
//               <h1
//                 className="aff"
//                 style={{
//                   textAlign: "center",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: "100px",
//                   fontFamily: "italic",
//                 }}
//               >
//                 Choisissez la catégorie qui vous intéresse
//               </h1>

//               <h1
//                 className="aff2"
//                 style={{
//                   textAlign: "center",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   height: "100px",
//                   fontFamily: "italic",
//                 }}
//               >
//                 Le résultat de votre recherche
//               </h1>
//             </div>
//             <CathegoryCard />
//             <CardList search={search} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
