import { TokenType } from "../reducers/auth/auth-types";

export const dateGetter = (date: Date) => {
  const addZero = (num: number) => (num < 10 ? `0${num}` : num);
  return `${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}-${date.getFullYear()}`;
};

export const timeGetter = (date: Date) => {
  const addZero = (num: number) => (num < 10 ? `0${num}` : num);
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
};

export const jwtAccessTokenDecoder = (token: string): TokenType => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};
