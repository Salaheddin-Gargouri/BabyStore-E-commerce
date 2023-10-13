import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { getProfile } from "../../redux/actions";

const AddBtn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const { clients, isAuth } = useSelector((state) => state.reducerRecister);
  console.log(clients);

  return (
    <div>
      {!isAuth ? (
        <div>
          <Link to={"/login"}>
            <button type="submit">
              <AddCircleOutlineIcon
                className="addLogo"
                style={{ width: "30px", height: "30px" }}
              />
            </button>
          </Link>
        </div>
      ) : (
        <Link to={"/AddProduct"}>
          <button type="submit">
            <AddCircleOutlineIcon
              className="addLogo"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </Link>
      )}
    </div>
  );
};

export default AddBtn;
