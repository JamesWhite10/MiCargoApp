import React, { useEffect } from "react";
import st from "./AutoFillString.module.css";
import { Dropdown, Form } from "react-bootstrap";
import { IGetUserByBusinessNameResponse } from "../../../api/micargo-api";
import { AppStateType } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserById,
  getUsersIdByBusinessName,
} from "../../../reducers/adminProfile/adminProfile-reducer";
import { findUserIdByBusinessName } from "../../../reducers/adminProfile/adminProfile-actions";

export const AutoFillString = ({ formik }: { formik: any }) => {
  const dispatch = useDispatch();

  const bNames = useSelector<AppStateType, IGetUserByBusinessNameResponse[]>(
    (state) => state.adminProfile.foundUserNames
  );

  useEffect(() => {
    if (!!formik.values.business_Name) {
      dispatch(getUsersIdByBusinessName(formik.values.business_Name as string));
    } else {
      dispatch(findUserIdByBusinessName([]));
    }
  }, [dispatch, formik.values.business_Name, formik.touched]);

  return (
    <div className={st.customDropdown}>
      <Form.Control
        required
        id="business_Name"
        name="business_Name"
        type="input"
        placeholder="Business Name"
        autoComplete={"off"}
        size="lg"
        className={
          formik.touched.business_Name && formik.errors.business_Name
            ? "errorActive"
            : "background-color-input"
        }
        onChange={formik.handleChange}
        value={formik.values.business_Name}
        onBlur={formik.handleBlur}
      />
      {bNames.length > 1 && (
        <div className={st.dropdownPosition}>
          {bNames.map((el) => {
            const chosenOptionHandler = () => {
              dispatch(getAllUserById(el.id as number));
              formik.setFieldValue("business_Name", el.businessName as string);
              dispatch(findUserIdByBusinessName([]));
            };
            return (
              <Dropdown.Item
                eventKey={el.id}
                onClick={chosenOptionHandler}
                className={st.chosenOptionStyles}
              >
                {el.businessName}
              </Dropdown.Item>
            );
          })}
        </div>
      )}
    </div>
  );
};
