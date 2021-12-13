import {
  ICreateUserAdminRequest,
  IGetUserByBusinessNameResponse,
  IGetUserResponse,
} from "../../api/micargo-api";
import { createAdminAC, findUserIdByBusinessName, setFoundUser } from "./adminProfile-actions";

export const CREATE_ADMIN_PROFILE = "adminProfile/CREATE_ADMIN_PROFILE";
export const SET_FOUND_USER_DATA = "adminProfile/SET_FOUND_USER_DATA";
export const FIND_USERS_BUSINESS_NAME = "adminProfile/FIND_USER_ID";

export type InitialStateTypes = {
  data: ICreateUserAdminRequest;
  foundUserProfileData: IGetUserResponse;
  foundUserNames: IGetUserByBusinessNameResponse[];
};

type CreateAdminActionType = ReturnType<
  typeof createAdminAC | typeof setFoundUser | typeof findUserIdByBusinessName
>;

export type ProfileAdminActionTypes = CreateAdminActionType;
