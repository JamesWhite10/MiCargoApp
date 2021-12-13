import { isInitializedAC, setAppErrorAC, setAppStatusAC, setAppSuccessAC } from "./app-actions";

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
export type InitialStateType = {
  // происходит ли сейчас взаимодействие с сервером
  status: RequestStatusType;
  // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
  error: string | null;
  success: string | null;
  isInitialized: boolean;
};

export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>;
export type SetAppSuccessActionType = ReturnType<typeof setAppSuccessAC>;
export type IsInitializedActionType = ReturnType<typeof isInitializedAC>;
export type AppActionsType =
  | SetAppStatusActionType
  | SetAppErrorActionType
  | SetAppSuccessActionType
  | IsInitializedActionType;

export const APP_SET_STATUS = "APP/SET-STATUS";
export const APP_SET_ERROR = "APP/SET-ERROR";
export const APP_SET_SUCCESS = "APP/SET-SUCCESS";
export const APP_IS_INITIALIZED = "APP/IS_INITIALIZED";
