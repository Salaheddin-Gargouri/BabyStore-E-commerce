import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Entete from "./component/Entete/Entete";
import CardList from "./component/cardList/CardList";
import Accueil from "./component/Main/Accueil";
import { useState } from "react";
import ChoppingCard from "./component/choppingCard/ChoppingCard";
import SignUp from "./component/signUp/SignUp";
import Signin from "./component/SignIn/Signin";
import AddProduct from "./component/AddProduct/AddProduct";
import Int from "./component/Int";
import ShoppingBtn from "./component/ShpingBtn/ShoppingBtn";
import Admin from "./component/admin/Admin";
import AdminProduct from "./component/admin/AdminProduct";
import BlockPage from "./component/BlockPage";
import { useSelector } from "react-redux";
import CastumLayout from "./component/CastumLayout/CastumLayout";
import Mybest from "./component/MybestProduct/Mybest";
import AceilAdmin from "./component/admin/AceilAdmin";
// <CardList />
// <Entete />
//       <Accueil />

function App() {
  const [search, setSearch] = useState("");
  const { clients, loading } = useSelector((state) => state.reducerRecister);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <BrowserRouter>
        {clients?.blocking ? (
          <Routes>
            <Route path="/BlockPage" element={<BlockPage />} />
            <Route path="*" element={<Navigate to={"/BlockPage"} />} />
          </Routes>
        ) : (
          <CastumLayout>
            <Routes>
              <Route path="/" element={<Accueil search={search} />} />
              <Route path="/shop" element={<ChoppingCard />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/a" element={<Int />} />
              <Route path="/AddProduct" element={<AddProduct />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Mybest" element={<Mybest />} />
              <Route path="/AceilAdmin" element={<AceilAdmin />} />
            </Routes>
          </CastumLayout>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
