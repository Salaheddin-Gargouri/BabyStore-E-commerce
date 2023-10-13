import React from "react";
import AdminProduct from "./AdminProduct";
import Admin from "./Admin";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const AceilAdmin = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Liste de produits">
          <AdminProduct />
        </Tab>
        <Tab eventKey="profile" title="Liste de clients">
          <Admin />
        </Tab>
      </Tabs>
    </div>
  );
};

export default AceilAdmin;
