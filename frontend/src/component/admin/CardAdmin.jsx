import React from "react";
import { blockUser, deleteUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./CardAdmin.css";

const CardAdmin = ({ el }) => {
  const dispatch = useDispatch();
  const handleBlock = (id, blocking) => {
    const userBlock = {
      _id: id,
      blocking: blocking,
    };

    dispatch(blockUser(userBlock));
    window.location.reload();
  };

  return (
    <div
      className="CardAdm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "1480px",
        height: "40px",

        margin: "5px",
        borderRadius: "10px",
      }}
    >
      <h6 style={{ width: "200px", marginLeft: "10px" }}>{el._id}</h6>

      <h6 style={{ width: "100px" }}>{el.prenom}</h6>
      <h6 style={{ width: "50px" }}>{el.nom}</h6>
      <h6 style={{ width: "150px" }}>{el.email}</h6>

      <button
        style={{ height: "38px" }}
        class="buttoon"
        onClick={() => handleBlock(el._id, true)}
      >
        <span>Bloquer !</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-miterlimit="2"
            stroke-linejoin="round"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
            ></path>
          </svg>
        </span>
      </button>
      <button
        style={{ height: "38px" }}
        class="buttoon"
        onClick={() => handleBlock(el._id, false)}
      >
        <span>Debloquer !</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-miterlimit="2"
            stroke-linejoin="round"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              fill-rule="nonzero"
              d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
            ></path>
          </svg>
        </span>
      </button>
      <button
        class="delete-button"
        onClick={() => dispatch(deleteUser(el._id))}
        style={{
          marginRight: "50px",
        }}
      >
        <svg class="delete-svgIcon" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
      </button>
    </div>
  );
};

export default CardAdmin;
