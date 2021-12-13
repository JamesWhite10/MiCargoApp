import {
  CREATE_ADMIN_PROFILE,
  FIND_USERS_BUSINESS_NAME,
  InitialStateTypes,
  ProfileAdminActionTypes,
  SET_FOUND_USER_DATA,
} from "./adminProfile-types";
import {
  CreateUserAdminRequest,
  ICreateUserAdminRequest,
  IUpdateAdminRequest,
  ProfileClient,
  UpdateAdminRequest,
} from "../../api/micargo-api";
import { Dispatch } from "redux";
import instance, { API_URL } from "../../api/app-api";
import { setAppErrorAC, setAppStatusAC, setAppSuccessAC } from "../app/app-actions";
import { AppStateType } from "../../app/store";
import { findUserIdByBusinessName, setFoundUser } from "./adminProfile-actions";

const initialState: InitialStateTypes = {
  data: {},
  foundUserProfileData: {},
  foundUserNames: [],
};

export const adminProfileReducer = (
  state: InitialStateTypes = initialState,
  action: ProfileAdminActionTypes
): InitialStateTypes => {
  switch (action.type) {
    case CREATE_ADMIN_PROFILE: {
      return { ...state, data: action.data };
    }
    case SET_FOUND_USER_DATA: {
      return { ...state, foundUserProfileData: action.foundUserProfileData };
    }
    case FIND_USERS_BUSINESS_NAME: {
      return { ...state, foundUserNames: action.businessName };
    }
    default:
      return state;
  }
};

// thunk

export const createAdminProfile = (data: ICreateUserAdminRequest) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new ProfileClient(API_URL, instance);
  console.log(data);
  client
    .createUserOrAdmin(new CreateUserAdminRequest(data))
    .then(() => {
      dispatch(setAppSuccessAC("Success! You have super user Rights..."));
      dispatch(setAppStatusAC("idle"));
    })
    .catch((err) => {
      dispatch(setAppErrorAC(err.message));
      dispatch(setAppStatusAC("failed"));
    });
};

export const updateAdminProfile =
  (data: IUpdateAdminRequest) => (dispatch: Dispatch, getState: () => AppStateType) => {
    dispatch(setAppStatusAC("loading"));
    const client = new ProfileClient(API_URL, instance);
    client
      .updateUserOrAdmin(new UpdateAdminRequest(data))
      .then((res) => {
        dispatch(setAppSuccessAC("Profile successfully changed"));
        dispatch(setAppStatusAC("succeeded"));
      })
      .catch((err) => {
        dispatch(setAppErrorAC(err.message));
        dispatch(setAppStatusAC("failed"));
      });
  };

export const getUsersIdByBusinessName = (businessName: string) => (dispatch: Dispatch) => {
  const client = new ProfileClient(API_URL, instance);
  client
    .getUserByBusinessName(businessName)
    .then((res) => {
      dispatch(findUserIdByBusinessName(res));
    })
    .catch((err) => {
      dispatch(findUserIdByBusinessName([]));
    });
};

export const getAllUserById = (id: number) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new ProfileClient(API_URL, instance);
  client
    .getUserOrAdmin(id)
    .then((res) => {
      dispatch(setFoundUser(res));
      dispatch(setAppStatusAC("idle"));
    })
    .catch((err) => {
      console.log(err.response);
    });
};
