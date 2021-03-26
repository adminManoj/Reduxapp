import { combineReducers } from "redux";
//import storage from "redux-persist/lib/storage";
//import { persistReducer } from "redux-persist";
import postsReducer from "./postsReducer";
// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducer = combineReducers({
  postState: postsReducer,
  userState: postsReducer,
  orderState: postsReducer,
});

//export default persistReducer(persistConfig, rootReducer);

export default rootReducer;
