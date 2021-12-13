import { Dispatch } from "redux";
import instance, { API_URL } from "../../api/app-api";
import { AuthClient, LoginRequest, TokenRequest } from "../../api/micargo-api";
import { setIsLoggedIn, setIsModalOpen } from "./auth-actions";
import {
  AuthActionType,
  InitialStateType,
  LOGIN_SET_IS_LOGGED_IN,
  LOGIN_SET_IS_LOGIN_MODAL_OPEN,
} from "./auth-types";
import { setAppErrorAC, setAppStatusAC, setAppSuccessAC } from "../app/app-actions";
import { isRegistrationUser, setUserProfile } from "../profile/profile-actions";
import { jwtAccessTokenDecoder } from "../../utils/helper";
import { ThunkAction } from "redux-thunk";
import { AppActionsType } from "../app/app-types";
import { AppStateType } from "../../app/store";
import { HistoryActionType } from "../history/history-types";
import { getProfile } from "../profile/profile-reducer";

const initialState: InitialStateType = {
  isLoggedIn: "guest",
  isOpen: false,
};

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthActionType
): InitialStateType => {
  switch (action.type) {
    case LOGIN_SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.value };
    case LOGIN_SET_IS_LOGIN_MODAL_OPEN:
      return { ...state, isOpen: action.isOpen };
    default:
      return state;
  }
};

// thunks

export const loginTC =
  (
    data: LoginRequest
  ): ThunkAction<
    void,
    AppStateType,
    unknown,
    HistoryActionType | AuthActionType | AppActionsType
  > =>
  (dispatch) => {
    dispatch(setAppStatusAC("loading"));
    const client = new AuthClient(API_URL, instance);
    client
      .login(data)
      .then((response) => {
        if (response.accessToken) {
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("refreshToken", response.refreshToken!);
          dispatch(getProfile());
          dispatch(setIsLoggedIn(jwtAccessTokenDecoder(response.accessToken).role));
          dispatch(setAppSuccessAC("Welcome to MiKargo"));
          dispatch(setAppStatusAC("succeeded"));
        }
        return response.accessToken;
      })
      .catch((error) => {
        if (error.response) {
          const errorObj = JSON.parse(error.response.errors);
          dispatch(setAppErrorAC(errorObj.Username || errorObj.Password));
        }
        if (!error.response) {
          dispatch(setAppErrorAC(error.message + ", more details in the console"));
        }
        dispatch(setAppStatusAC("failed"));
      });
  };

export const logoutTC = (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new AuthClient(API_URL, instance);
  client
    .revokeRefreshToken(
      new TokenRequest({
        refreshToken: localStorage.getItem("refreshToken") as string | undefined,
      })
    )
    .then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(setUserProfile({}));
      dispatch(setIsLoggedIn("guest"));
      dispatch(isRegistrationUser(false));
      dispatch(setAppSuccessAC("See you later"));
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      dispatch(setAppErrorAC(error.message));
      dispatch(setAppStatusAC("failed"));
      dispatch(setUserProfile({}));
    });
};
