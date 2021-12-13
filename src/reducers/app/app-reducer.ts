import {
  AppActionsType,
  APP_IS_INITIALIZED,
  APP_SET_ERROR,
  APP_SET_STATUS,
  APP_SET_SUCCESS,
  InitialStateType,
} from "./app-types";
import { Dispatch } from "redux";
import { ProfileClient } from "../../api/micargo-api";
import instance, { API_URL } from "../../api/app-api";
import { isInitializedAC } from "./app-actions";

const initialState: InitialStateType = {
  status: "idle",
  error: null,
  success: null,
  isInitialized: false,
};

export const appReducer = (
  state: InitialStateType = initialState,
  action: AppActionsType
): InitialStateType => {
  switch (action.type) {
    case APP_SET_STATUS:
      return { ...state, status: action.status };
    case APP_SET_ERROR:
      return { ...state, error: action.error };
    case APP_SET_SUCCESS:
      return { ...state, success: action.success };
    case APP_IS_INITIALIZED:
      return { ...state, isInitialized: action.value };
    default:
      return state;
  }
};

//thunks

export const initializeAppTC = () => (dispatch: Dispatch) => {
  const client = new ProfileClient(API_URL, instance);
  client
    .getCurrentUser()
    .then(() => {
      dispatch(isInitializedAC(true));
    })
    .catch((err) => {
      dispatch(isInitializedAC(true));
    });
};
