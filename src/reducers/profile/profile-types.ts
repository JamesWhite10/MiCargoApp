import {
  createUserProfile,
  isRegistrationUser,
  setUserProfile,
  updateUserProfile,
} from "./profile-actions";
import { IGetUserResponse } from "../../api/micargo-api";

export interface InitialStateType {
  profile: IGetUserResponse;
  isRegistration: boolean;
}
export type ProfileActionType =
  | ReturnType<typeof createUserProfile>
  | ReturnType<typeof isRegistrationUser>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof updateUserProfile>;

export const CREATE_PROFILE = "PROFILE/CREATE_PROFILE";
export const SET_PROFILE = "PROFILE/SET_PROFILE_DATA";
export const UPDATE_PROFILE = "PROFILE/UPDATE_PROFILE";
export const IS_REGISTRATION = "IS_REGISTRATION";
export const DELETE_DATA = "DELETE_DATA";
