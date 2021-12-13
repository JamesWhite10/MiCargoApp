import { Dispatch } from "redux";
import instance, { API_URL } from "../../api/app-api";
import { setAppErrorAC, setAppStatusAC, setAppSuccessAC } from "../app/app-actions";
import { isRegistrationUser, setUserProfile } from "./profile-actions";
import {
  CreateUserRequest,
  ICreateUserRequest,
  IUpdateCurrentUserRequest,
  ProfileClient,
  UpdateCurrentUserRequest,
} from "../../api/micargo-api";
import {
  CREATE_PROFILE,
  InitialStateType,
  IS_REGISTRATION,
  ProfileActionType,
  SET_PROFILE,
  UPDATE_PROFILE,
} from "./profile-types";

const initialState: InitialStateType = {
  profile: {},
  isRegistration: false,
};

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileActionType
): InitialStateType => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.user,
        isRegistration: action.isRegistration,
      };
    case IS_REGISTRATION:
      return {
        ...state,
        isRegistration: action.isRegistration,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.user,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload.user,
      };
    default:
      return state;
  }
};

// thunks

export const createProfile = (data: ICreateUserRequest) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new ProfileClient(API_URL);
  client
    .createUser(new CreateUserRequest(data))
    .then(() => {
      dispatch(isRegistrationUser(true));
      dispatch(
        setAppSuccessAC("Successful registration! Please log in with your username and password.")
      );
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      if (error.response) {
        const errorObj = JSON.parse(error.response.errors);
        dispatch(setAppErrorAC(errorObj.Password || errorObj.Username || errorObj.Business_Name));
      }
      if (!error.response) {
        dispatch(setAppErrorAC(error.message + " more details in the console"));
      }
      dispatch(setAppStatusAC("failed"));
    });
};

export const getProfile = () => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new ProfileClient(API_URL, instance);
  client
    .getCurrentUser()
    .then((response) => {
      dispatch(isRegistrationUser(true));
      dispatch(setUserProfile(response));
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      dispatch(setAppErrorAC(error.message));
      dispatch(setAppStatusAC("failed"));
    });
};

export const updateProfile = (data: IUpdateCurrentUserRequest) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC("loading"));
  const client = new ProfileClient(API_URL, instance);
  client
    .updateCurrentUser(new UpdateCurrentUserRequest(data))
    .then(() => {
      dispatch(isRegistrationUser(true));
      getProfile()(dispatch);
      dispatch(setAppSuccessAC("Profile successfully changed"));
      dispatch(setAppStatusAC("succeeded"));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(setAppErrorAC(error.response.errors));
      }
      if (!error.response) {
        dispatch(setAppErrorAC(error.message + " more details in the console"));
      }
      dispatch(setAppStatusAC("failed"));
    });
};
