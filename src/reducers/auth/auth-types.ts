import { setIsLoggedIn, setIsModalOpen } from "./auth-actions";

export type IsLoggedInType = "guest" | "user" | "admin";

export type TokenType = {
  username: string;
  role: IsLoggedInType;
  user: string;
  userId: string;
  nfb: string;
  exp: string;
  iss: string;
  aud: string;
};

export type InitialStateType = {
  isLoggedIn: IsLoggedInType;
  isOpen: boolean;
};
export type AuthActionType = ReturnType<typeof setIsLoggedIn> | ReturnType<typeof setIsModalOpen>;

export const LOGIN_SET_IS_LOGGED_IN = "login/SET-IS-LOGGED-IN";
export const LOGIN_SET_IS_LOGIN_MODAL_OPEN = "login/SET-IS-LOGIN_MODAL_OPEN";
