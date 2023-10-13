import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import AdminCardProduct from "./AdminCardProduct";
import React from "react";
import Pagination from "../pagination/Pagination";

const AdminProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { loading, products } = useSelector((state) => state.reducers);
  console.log(products);

  const lastPostIndex = currentPage * postPerPage;
  const firstttPostIndex = lastPostIndex - postPerPage;
  const currentPosttt = products?.slice(firstttPostIndex, lastPostIndex);

  console.log(currentPosttt);
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "40px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#868686",
          color: "white",
          fontFamily: "italic",
        }}
      >
        <h5 style={{ marginLeft: "30px" }}>Réf</h5>
        <h5 style={{ marginLeft: "120px" }}>Cathégorie</h5>
        <h5>titre</h5>
        <h5>Image</h5>
        <h5>Prix</h5>
        <h5>Stock</h5>
        <h5>Modifier</h5>
        <h5 style={{ marginRight: "30px" }}>Supprimer</h5>
      </div>
      <div>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div>
            {currentPosttt?.map((el) => (
              <AdminCardProduct key={el._id} el={el} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        totalPosts={products?.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AdminProduct;
