import { IGetUserResponse } from "../../api/micargo-api";
import {
  CREATE_PROFILE,
  SET_PROFILE,
  UPDATE_PROFILE,
  IS_REGISTRATION,
  // DELETE_DATA,
} from "./profile-types";

export const createUserProfile = (user: IGetUserResponse, isRegistration: boolean) =>
  ({ type: CREATE_PROFILE, user, isRegistration } as const);

export const setUserProfile = (user: IGetUserResponse) =>
  ({
    type: SET_PROFILE,
    user,
  } as const);

export const updateUserProfile = (payload: { user: IGetUserResponse }) =>
  ({
    type: UPDATE_PROFILE,
    payload,
  } as const);

export const isRegistrationUser = (isRegistration: boolean) =>
  ({ type: IS_REGISTRATION, isRegistration } as const);

// export const deleteData = () => ({ type: DELETE_DATA } as const);
