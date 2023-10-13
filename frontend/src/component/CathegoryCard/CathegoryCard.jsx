import React from "react";
import "react-multi-carousel/lib/styles.css";
import "./CathegoryCard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByCathegory, getCathegory } from "../../redux/actions";

const CathegoryCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCathegory());
  }, []);

  const filterCathegory = (titre) => {
    dispatch(getByCathegory(titre));
  };
  const { loading, cathegory } = useSelector((state) => state.reducers);

  return (
    <div>
      {loading ? (
        <h1>loading...........</h1>
      ) : (
        <div className="cathego">
          {cathegory?.map((el) => (
            <div className="blockcat" key={el._id}>
              <>
                <div class="card">
                  <div style={{ width: "160px", height: "120px" }}>
                    <svg
                      class="check"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                    </svg>
                    <strong> {el.titre}</strong>

                    <button>
                      filtre
                      <svg
                        className="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                        onClick={() => filterCathegory(el.titre)}
                      >
                        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CathegoryCard;
