// import reducer from "./reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const persistConfig = {
//   key: "Presist-key",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devtools)
);
// const persistor = persistStore(store);
export default store;
// export { persistor };
