import {
  RequestStatusType,
  APP_SET_STATUS,
  APP_SET_ERROR,
  APP_SET_SUCCESS,
  APP_IS_INITIALIZED,
} from "./app-types";

export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: APP_SET_STATUS, status } as const);
export const setAppErrorAC = (error: string | null) => ({ type: APP_SET_ERROR, error } as const);
export const setAppSuccessAC = (success: string | null) =>
  ({ type: APP_SET_SUCCESS, success } as const);
export const isInitializedAC = (value: boolean) =>
  ({
    type: APP_IS_INITIALIZED,
    value,
  } as const);
