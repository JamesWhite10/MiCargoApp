import {
  CREATE_ADMIN_PROFILE,
  FIND_USERS_BUSINESS_NAME,
  SET_FOUND_USER_DATA,
} from "./adminProfile-types";
import {
  ICreateUserAdminRequest,
  IGetUserByBusinessNameResponse,
  IGetUserResponse,
} from "../../api/micargo-api";

export const createAdminAC = (data: ICreateUserAdminRequest) => {
  return { type: CREATE_ADMIN_PROFILE, data } as const;
};

export const setFoundUser = (foundUserProfileData: IGetUserResponse) => {
  return { type: SET_FOUND_USER_DATA, foundUserProfileData } as const;
};

export const findUserIdByBusinessName = (businessName: IGetUserByBusinessNameResponse[]) => {
  return { type: FIND_USERS_BUSINESS_NAME, businessName } as const;
};
