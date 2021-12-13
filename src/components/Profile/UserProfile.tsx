import React, { useCallback, useEffect, useState } from "react";
import Profile from "./Profile";
import { IGetUserResponse } from "../../api/micargo-api";
import { FormikValues, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createProfile, updateProfile } from "../../reducers/profile/profile-reducer";
import { profileValidator } from "./profileValidator";
const UserProfile = ({
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

  // const [userOperationMode, setUserOperationMode] = React.useState<"create" | "update">("update");
  const userSubmitHandler = useCallback(
    (values: FormikValues) => {
      if (operationMode === "create") {
        dispatch(createProfile(values as IGetUserResponse));
      }
      if (operationMode === "update") {
        dispatch(updateProfile(values));
      }
    },
    [dispatch, operationMode]
  );

  const [initFormValues, setInitFormValues] = useState<
    IGetUserResponse & { password: string; confirmPassword: string }
  >({ ...profile, password: "", confirmPassword: "" });
  const formik = useFormik({
    initialValues: initFormValues,
    validate: profileValidator,
    onSubmit: (values, onSubmitProps) => {
      userSubmitHandler(values);
      onSubmitProps.setSubmitting(false);
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (formik.values.business_Name === profile.business_Name) {
      setOperationMode("update");
    } else {
      setOperationMode("create");
    }
    setInitFormValues({ ...profile, password: "", confirmPassword: "" });
  }, [formik.values.business_Name, profile, setOperationMode]);

  return (
    <div>
      <Profile
        isAdmin={isAdmin}
        profile={profile}
        formik={formik}
        buttonName={operationMode === "update" ? "Update Profile" : "create Profile"}
      />
    </div>
  );
};

export default UserProfile;
