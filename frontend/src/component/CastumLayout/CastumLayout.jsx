import React, { useState } from "react";
import Entete from "../Entete/Entete";
import Footer from "../Footer/Footer";

const CastumLayout = ({ children }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Entete handleSearch={handleSearch} />

      {children}
      <Footer />
    </div>
  );
};

export default CastumLayout;
