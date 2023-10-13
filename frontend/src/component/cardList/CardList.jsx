import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct, getProducts, getunProduct } from "../../redux/actions";
import CardProduct from "../cardProduct/CardProduct";
import Pagination from "../pagination/Pagination";

const CardList = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getunProduct());
    dispatch(deleteproduct());
  }, []);

  const { loading, products, filterByCathegory } = useSelector(
    (state) => state.reducers
  );
  console.log(filterByCathegory);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = products?.slice(firstPostIndex, lastPostIndex);

  console.log(currentPost);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              width: "1450px",
              backgroundColor: "#ebebeb",
              marginTop: "-60px",
            }}
          >
            {filterByCathegory
              ? filterByCathegory?.map((el, index) => (
                  <CardProduct key={el._id} el={el} />
                ))
              : currentPost &&
                currentPost
                  ?.filter((el, index) => {
                    return el.productName
                      .trim()
                      .toUpperCase()
                      .includes(search.trim().toUpperCase());
                  })
                  .map((el, index) => <CardProduct key={el._id} el={el} />)}
          </div>
        )}
      </div>
      <Pagination
        totalPosts={products?.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      ;
    </div>
  );
};

export default CardList;
