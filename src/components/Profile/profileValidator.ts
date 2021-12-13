import { FormikValues } from "formik";

export const profileValidator = (values: FormikValues) => {
  type FormikErrorType = {
    business_Name?: string;
    mailing_Address_1?: string;
    country?: string;
    city?: string;
    state?: string;
    zip?: string;
    contact_Name?: string;
    contact_Email?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
  };
  const errors: FormikErrorType = {};
  if (!values.business_Name) {
    errors.business_Name = "Business Name is required";
  } else if (values.business_Name.length < 3) {
    errors.business_Name = "Invalid Business Name";
  }
  if (!values.mailing_Address_1) {
    errors.mailing_Address_1 = "Mailing Address is required";
  } else if (values.mailing_Address_1.length < 3) {
    errors.mailing_Address_1 = "Invalid Mailing Address";
  }
  if (!values.country) {
    errors.country = "USA or Canada only";
  } else if (values.country.length < 3) {
    errors.country = "Invalid Country";
  }
  if (!values.city) {
    errors.city = "City / State / Zip is required";
  } else if (values.city.length < 3) {
    errors.city = "Invalid City / State / Zip";
  }
  if (!values.state) {
    errors.state = "State is required";
  } else if (values.state.length < 2) {
    errors.state = "Invalid State";
  }
  if (!values.zip) {
    errors.zip = "Zip is required";
  } else if (values.zip.length < 3) {
    errors.zip = "Invalid Zip";
  }
  if (!values.contact_Name) {
    errors.contact_Name = "Contact Name is required";
  } else if (values.contact_Name.length < 3) {
    errors.contact_Name = "Invalid Contact Name";
  }
  if (!values.contact_Email) {
    errors.contact_Email = "Contact Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.contact_Email)) {
    errors.contact_Email = "Invalid Contact Email";
  }
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 3) {
    errors.username = "Invalid Username";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Invalid Password";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Verify Password is required";
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = "Invalid Verify Password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords don't match";
  }
  return errors;
};
