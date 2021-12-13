import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../app/store";
import { IGetUserResponse } from "../../api/micargo-api";
import { IsLoggedInType } from "../../reducers/auth/auth-types";
import GuestCreateProfile from "./GuestCreateProfile";
import UserProfile from "./UserProfile";
import AdminProfile from "./AdminProfile";

const ProfileContainer = () => {
  const profile = useSelector<AppStateType, IGetUserResponse>((state) => state.profile.profile);
  const isLoggedIn = useSelector<AppStateType, IsLoggedInType>((state) => state.auth.isLoggedIn);
  const [operationMode, setOperationMode] = React.useState<"create" | "update">("update");

  const [isAdmin, setIsAdmin] = React.useState<boolean>(isLoggedIn === "admin");

  useEffect(() => {
    setIsAdmin(isLoggedIn === "admin");
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn === "guest" && <GuestCreateProfile profile={profile} isAdmin={isAdmin} />}
      {isLoggedIn === "user" && (
        <UserProfile
          profile={profile}
          operationMode={operationMode}
          setOperationMode={setOperationMode}
          isAdmin={isAdmin}
        />
      )}
      {isLoggedIn === "admin" && (
        <AdminProfile
          profile={profile}
          operationMode={operationMode}
          setOperationMode={setOperationMode}
          isAdmin={isAdmin}
        />
      )}
    </div>
  );
};

export default ProfileContainer;
