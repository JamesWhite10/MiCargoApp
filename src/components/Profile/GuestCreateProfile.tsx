import React, { useCallback, useState } from "react";
import Profile from "./Profile";
import { FormikValues, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createProfile } from "../../reducers/profile/profile-reducer";
import { IGetUserResponse } from "../../api/micargo-api";
import { profileValidator } from "./profileValidator";

const GuestCreateProfile = ({
  profile,
  isAdmin,
}: {
  profile: IGetUserResponse;
  isAdmin: boolean;
}) => {
  const dispatch = useDispatch();

  const guestCreateProfileHandler = useCallback(
    (values: FormikValues) => {
      dispatch(createProfile(values));
    },
    [dispatch]
  );

  const formik = useFormik<IGetUserResponse & { password: string; confirmPassword: string }>({
    initialValues: { ...profile, password: "", confirmPassword: "" },
    validate: profileValidator,
    onSubmit: (values, onSubmitProps) => {
      guestCreateProfileHandler(values);
      onSubmitProps.setSubmitting(false);
    },
  });

  return (
    <Profile formik={formik} profile={profile} buttonName={"Create Profile"} isAdmin={isAdmin} />
  );
};

export default GuestCreateProfile;
