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

const init = {
  loading: true,
  products: null,
  cathegory: null,
  filterByCathegory: null,
  error: null,
};
export const reducers = (state = init, { type, payload }) => {
  switch (type) {
    /************ get product *************** */
    case GET_PRODUCTS_SUCC:
    case GET_ONEPREF_PRODUCT_SUCC:
      return { ...state, loading: true };
    case GET_PRODUCTS:
      return { ...state, products: payload, loading: false };
    // case GET_ONEPREF_PRODUCT:
    //   return {
    //     ...state,
    //     products: payload,
    //     loading: false,
    //   };
    case GET_PRODUCTS_FAIL:
    case GET_ONEPREF_PRODUCT_FAIL:
      return { ...state, loading: false, error: payload };
    /*************************** */

    /************ get gathegorie *************** */
    case GET_CATHEGORY_SUCC:
      return { ...state, loading: true };
    case GET_CATHEGORY:
      return { ...state, loading: false, cathegory: payload };
    case GET_CATHEGORY_FAIL:
      return { ...state, loading: false, error: payload };
    /****************delete a product *********** */
    case DELETE_PRODUCT_SUCC:
      return { ...state, loading: true };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((el) => el._id !== payload),
        loading: false,
      };
    case DELETE_PRODUCT_FAIL:
      return { ...state, loading: false, error: payload };

    /************ Fitre by gathegorie *************** */
    case FILTER_BY_CATHEGORY:
      return {
        ...state,
        loading: false,
        filterByCathegory: payload,
      };
    /*************add a new product ************** */
    case ADD_NEW_PRODUCT:
      return { ...state, products: [...state.products, payload] };

    default:
      return state;
  }
};
/*chopping card reducer */
const initCard = { productss: [], cardQuantity: 0, total: 0 };
export const reducerCard = (state = initCard, { type, payload }) => {
  switch (type) {
    case GET_ONE_PRODUCT_SUCC:
      return { ...state, loading: true };

    case GET_ONE_PRODUCT:
      return {
        ...state,
        cardQuantity: state.cardQuantity + 1,
        productss: [
          ...state.productss,
          { product: payload, price: payload.productNewPrice },
        ],
        total: state.total + payload.productNewPrice,
      };

    case GET_ONE_PRODUCT_FAIL:
      return { ...state, loading: false, error: payload };

    /**delete an article from shopping card */
    case DELETE_CARD_SHOPPING_CARD:
      const deletedProduct = state.productss.find(
        (el) => el.product._id === payload
      );

      console.log(deletedProduct);

      if (!deletedProduct) {
        return state;
      }
      return {
        ...state,
        cardQuantity: state.cardQuantity - 1,
        productss: state.productss.filter((el) => el.product._id !== payload),
        total: state.total - deletedProduct.price,
      };

    default:
      return state;
  }
};

/*register reducer */
const initRegister = {
  loading: false,
  errors: null,
  clients: null,
  token: null,
  isAuth: false,
};
export const reducerRecister = (state = initRegister, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case GET_PROFIL:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCC:
      return { ...state, loading: false, clients: payload, error: null };
    case LOGIN_USER_SUCC:
      return {
        ...state,
        loading: false,
        clients: payload.loginClient,
        error: null,
        token: payload.token,
      };
    case GET_PROFIL_SUCC:
      return { ...state, loading: false, clients: payload, isAuth: true };
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
    case GET_PROFIL_FAIL:
      return { ...state, loading: false, errors: true, clients: null };
    /***********block user ******** */
    case BLOCK_USER:
      return {
        ...state,
        clients: state.clients.map((el) =>
          el._id === payload._id ? { ...el, ...payload } : el
        ),
      };

    default:
      return state;
  }
};

const initadmin = {
  loading: false,
  errors: null,
  clientsA: null,
  token: null,
  isAuth: false,
};
export const reducerAdmin = (state = initadmin, { type, payload }) => {
  switch (type) {
    //***********************get  all users  */
    case GET_ALL_USERS_SUCC:
      return { ...state, loading: true };
    case GET_ALL_USERS:
      return { ...state, clientsA: payload, loading: false };
    case GET_ALL_USERS_FAIL:
      return { ...state, loading: false, error: payload };
    /*************************** */
    //***********************DELETE USER *************  */
    case DELETE_USER_SUCC:
      return { ...state, loading: true };
    case DELETE_USER:
      return {
        ...state,
        clientsA: state.clientsA.filter((el) => el._id !== payload),
        loading: false,
      };

    case DELETE_USER_FAIL:
      return { ...state, loading: false, error: payload };
    /***********block user ******** */
    case BLOCK_USER:
      return {
        ...state,
        clientsA: state.clientsA.map((el) =>
          el._id === payload._id ? { ...el, ...payload } : el
        ),
      };

    default:
      return state;
  }
};
