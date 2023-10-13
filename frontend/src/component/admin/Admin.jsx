import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions";
import CardAdmin from "./CardAdmin";
import Pagination from "../pagination/Pagination";

const Admin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  const { loading, clientsA } = useSelector((state) => state.reducerAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  console.log(clientsA);
  const lastPostIndex = currentPage * postPerPage;
  const firsttPostIndex = lastPostIndex - postPerPage;
  const currentPostt = clientsA?.slice(firsttPostIndex, lastPostIndex);

  console.log(currentPostt);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#868686",
          color: "white",
          fontFamily: "italic",
        }}
      >
        <h5 style={{ marginLeft: "30px" }}>ID</h5>
        <h5 style={{ marginLeft: "120px" }}>Prénom</h5>
        <h5>Nom</h5>
        <h5>Email</h5>
        <h5>Bloquer/Débloquer</h5>
        <h5 style={{ marginRight: "30px" }}>Supprimer</h5>
      </div>
      {loading ? (
        <h1>loading ... </h1>
      ) : (
        <div>
          {currentPostt?.map((el) => (
            <CardAdmin key={el._id} el={el} />
          ))}
        </div>
      )}
      <Pagination
        totalPosts={clientsA?.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Admin;
