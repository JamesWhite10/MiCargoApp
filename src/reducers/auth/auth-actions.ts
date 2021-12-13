import {
  IsLoggedInType,
  LOGIN_SET_IS_LOGGED_IN,
  LOGIN_SET_IS_LOGIN_MODAL_OPEN,
} from "./auth-types";

export const setIsLoggedIn = (value: IsLoggedInType) =>
  ({ type: LOGIN_SET_IS_LOGGED_IN, value } as const);
export const setIsModalOpen = (isOpen: boolean) =>
  ({ type: LOGIN_SET_IS_LOGIN_MODAL_OPEN, isOpen } as const);
