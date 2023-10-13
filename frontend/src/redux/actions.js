import {
  ADD_NEW_PRODUCT,
  BLOCK_USER,
  DELETE_CARD_SHOPPING_CARD,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCC,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCC,
  FILTER_BY_CATHEGORY,
  FILTER_BY_CATHEGORY_FAIL,
  FILTER_BY_CATHEGORY_SUCC,
  GET_ALL_USERS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCC,
  GET_CATHEGORY,
  GET_CATHEGORY_FAIL,
  GET_CATHEGORY_SUCC,
  GET_ONEPREF_PRODUCT,
  GET_ONEPREF_PRODUCT_FAIL,
  GET_ONEPREF_PRODUCT_SUCC,
  GET_ONE_PRODUCT,
  GET_ONE_PRODUCT_FAIL,
  GET_ONE_PRODUCT_SUCC,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCC,
  GET_PROFIL,
  GET_PROFIL_FAIL,
  GET_PROFIL_SUCC,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCC,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCC,
} from "./actionsTypes";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_SUCC,
  });
  try {
    const res = await axios.get("/client/GettAllProducts");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.responce.data,
    });
  }
};

export const getCathegory = () => async (dispatch) => {
  dispatch({
    type: GET_CATHEGORY_SUCC,
  });
  try {
    const { data } = await axios.get("/cathegory/GettAllCathegory");

    dispatch({
      type: GET_CATHEGORY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATHEGORY_FAIL,
      payload: error.responce.data,
    });
  }
};
/*filter by cathegory*/
export const getByCathegory = (cat) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/client/GettSpecificProductByCategorie/${cat}`
    );

    dispatch({
      type: FILTER_BY_CATHEGORY,
      payload: data,
    });
  } catch (error) {}
};
/**chopping card */
export const getOneProduct = (el) => async (dispatch) => {
  dispatch({
    type: GET_ONE_PRODUCT_SUCC,
  });
  try {
    const { data } = await axios.get(
      `/client/GettSpecificProductByID/${el._id}`
    );
    dispatch({
      type: GET_ONE_PRODUCT,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_PRODUCT_FAIL,
      payload: error,
    });
  }
};
/* delete article from shopping card*/
export const deleteCardFromShoppingCard = (id) => {
  return {
    type: DELETE_CARD_SHOPPING_CARD,
    payload: id,
  };
};
/* Register user */
export const registerUser = (newClient) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const { data } = await axios.post("/client/register", newClient);
    dispatch({
      type: REGISTER_USER_SUCC,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data,
    });
  }
};
/* Login User */

export const loginUser = (client) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const { data } = await axios.post("client/login", client);
    localStorage.setItem("token", data.token);
    dispatch({
      type: LOGIN_USER_SUCC,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data,
    });
  }
};

/*GET PROFILE*/
export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFIL,
  });
  try {
    const { data } = await axios.get("/client/auth", config);
    dispatch({
      type: GET_PROFIL_SUCC,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_PROFIL_FAIL,
      payload: error.response.data,
    });
  }
};
/**Add a new product  */
export const newProduct = (product) => async (dispatch) => {
  try {
    const { data } = await axios.post("/client/Addproduct", product);
    dispatch({
      type: ADD_NEW_PRODUCT,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
/**get all users */
export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_USERS_SUCC,
  });
  try {
    const res = await axios.get("/client/GettAllClients");

    dispatch({
      type: GET_ALL_USERS,
      payload: res.data,
    });

    console.log(res.data);
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: error.responce.data,
    });
  }
};
/* delete users*/
export const deleteUser = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_USER_SUCC,
  });
  try {
    await axios.delete(`/client/deletClient/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.responce.data,
    });
  }
};
/* block users*/
export const blockUser = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/client/updateClienToBlock/${userId._id}`,
      userId
    );
    dispatch({
      type: BLOCK_USER,
      payload: userId,
    });
    console.log(userId);
  } catch (error) {
    console.log(error);
  }
};
/*delete product*/
export const deleteproduct = (_id) => async (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT_SUCC,
  });
  try {
    await axios.delete(`/client/deleteProduct/${_id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: _id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error,
    });
  }
};

export const getunProduct = (_id) => async (dispatch) => {
  dispatch({
    type: GET_ONEPREF_PRODUCT_SUCC,
  });
  try {
    const { el } = await axios.get(`/client/GettSpecificProductByID/${_id}`);
    dispatch({
      type: GET_ONEPREF_PRODUCT,
      payload: el,
    });
  } catch (error) {
    dispatch({
      type: GET_ONEPREF_PRODUCT_FAIL,
      payload: error,
    });
  }
};
