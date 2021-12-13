import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICreateUserAdminRequest, IGetUserResponse } from "../../api/micargo-api";
import { FormikValues, useFormik } from "formik";
import { createProfile, updateProfile } from "../../reducers/profile/profile-reducer";
import Profile from "./Profile";
import {
  createAdminProfile,
  updateAdminProfile,
} from "../../reducers/adminProfile/adminProfile-reducer";
import { profileValidator } from "./profileValidator";
import { AppStateType } from "../../app/store";

const AdminProfile = ({
  profile,
  operationMode,
  setOperationMode,
  isAdmin,
}: {
  profile: IGetUserResponse;
  operationMode: "create" | "update";
  setOperationMode: (operationMode: "create" | "update") => void;
  isAdmin: boolean;
}) => {
  const dispatch = useDispatch();

  // В режиме админа запросы идут на создание и редактирование профиля админа но не переводят сам профиль в режим user
  const [adminOptions, setAdminOptions] = React.useState<boolean>(false);

  const foundUserProfileData = useSelector<AppStateType, ICreateUserAdminRequest>(
    (state) => state.adminProfile.foundUserProfileData
  );

  const adminSubmitHandler = useCallback(
    (values: FormikValues) => {
      if (adminOptions) {
        if (operationMode === "create") {
          dispatch(createAdminProfile({ ...values, isAdmin: true }));
        }
        if (operationMode === "update") {
          dispatch(updateAdminProfile({ ...values, isAdmin: true }));
        }
      } else {
        if (operationMode === "create") {
          dispatch(createProfile(values as IGetUserResponse));
        }
        if (operationMode === "update") {
          dispatch(updateProfile(values));
        }
      }
    },
    [operationMode, adminOptions, dispatch]
  );

  const [initFormValues, setInitFormValues] = useState<
    IGetUserResponse & { password: string; confirmPassword: string }
  >({ ...profile, password: "", confirmPassword: "" });
  const formik = useFormik({
    initialValues: initFormValues,
    validate: profileValidator,
    onSubmit: (values, onSubmitProps) => {
      adminSubmitHandler(values);
      onSubmitProps.setSubmitting(false);
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    setInitFormValues(
      foundUserProfileData.business_Name === undefined
        ? { ...profile, password: "", confirmPassword: "" }
        : { ...foundUserProfileData, password: "", confirmPassword: "" }
    );
    if (foundUserProfileData.business_Name === undefined) {
      if (formik.values.username === profile.username) {
        setOperationMode("update");
      } else {
        setOperationMode("create");
      }
    } else {
      if (formik.values.username === foundUserProfileData.username) {
        setOperationMode("update");
      } else {
        setOperationMode("create");
      }
    }
  }, [formik.values.username, profile, setOperationMode, foundUserProfileData]);

  return (
    <div>
      <Profile
        profile={profile}
        isAdmin={isAdmin}
        formik={formik}
        adminOptions={adminOptions}
        setAdminOptions={setAdminOptions}
        buttonName={operationMode === "update" ? "Update Profile" : "create Profile"}
      />
    </div>
  );
};
export default React.memo(AdminProfile);
