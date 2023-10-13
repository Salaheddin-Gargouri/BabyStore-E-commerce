import { combineReducers } from "redux";
import {
  reducerCard,
  reducers,
  reducerRecister,
  reducerAdmin,
} from "./reducers";

export const rootReducer = combineReducers({
  reducers: reducers,
  reducerCard: reducerCard,
  reducerRecister: reducerRecister,
  reducerAdmin: reducerAdmin,
});
