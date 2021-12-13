import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "../reducers/app/app-reducer";
import { authReducer } from "../reducers/auth/auth-reducer";
import { historyReducer } from "../reducers/history/history-reducer";
import { cancelReducer } from "../reducers/cancelPurchase/cancel-reducer";
import { profileReducer } from "../reducers/profile/profile-reducer";
import { reportReducer } from "../reducers/report-claim/report-reducer";
import { quoteReducer } from "../reducers/quote/quote-reducer";
import { adminProfileReducer } from "../reducers/adminProfile/adminProfile-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  app: appReducer,
  report: reportReducer,
  cancel: cancelReducer,
  quote: quoteReducer,
  adminProfile: adminProfileReducer,
  history: historyReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

export default store;

//@ts-ignore
window.store = store;
