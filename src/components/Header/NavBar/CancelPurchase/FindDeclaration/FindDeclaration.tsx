import { Button, Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { getcurrentDeclaration } from "../../../../../reducers/cancelPurchase/cancel-reducer";
import { PATH } from "../../../../../app/App";
import { StringInput } from "../../../../shared/Inputs/StringInput";
import { SubmitButton } from "../../../../shared/SubmitButton";

export const CancelPurchaseFindDeclaration = () => {
  const dispatch = useDispatch();
  type FormikErrorType = {
    number?: string;
  };

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.number) {
        errors.number = "The Declaration Number field is required";
      }
      return errors;
    },
    onSubmit: (values, onSubmitProps) => {
      dispatch(getcurrentDeclaration(values.number));
      onSubmitProps.setSubmitting(false);
      formik.resetForm();
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <h2 className={"text-color-name-profile"}>Cancel a purchase</h2>
        <div className={"pb-4 pb-lg-4 pt-4 pt-lg-2"}>
          Coverage may be cancelled at any time from purchase through the day before your estimated
          or actual Pick-up Date, whichever is earliest. The first cancelation step is to locate
          your insurance declaration number to input below.
        </div>
        <div className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
          Please <a href={PATH.CONTACT_US}>Contact Us</a> if you do not have, or cannot find your
          declaration number.
        </div>
        <Row className="mt-4 text-align-center">
          <Col>
            <StringInput
              formik={formik}
              for="number"
              name="Declaration number"
              noHint={true}
              labelClass="mx-3 text-black"
            />
            <SubmitButton name="Find My Declaration" formik={formik} class="mt-5 w-75" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
