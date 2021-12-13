import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../app/store";

export const AuthUserInfo = () => {
  const contactName = useSelector<AppStateType, string | undefined>(
    (state) => state.profile.profile?.contact_Name
  );
  const zip = useSelector<AppStateType, string | undefined>((state) => state.profile.profile?.zip);
  const city = useSelector<AppStateType, string | undefined>(
    (state) => state.profile.profile?.city
  );
  const usersState = useSelector<AppStateType, string | undefined>(
    (state) => state.profile.profile?.state
  );
  return (
    <div>
      <h3>{contactName}</h3>
      <div>{`${zip} ${city}, ${usersState}`}</div>
    </div>
  );
};
