import { Button, Container, Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { getDeclarationByNum } from "../../../../../../reducers/report-claim/report-reducer";
import { StringInput } from "../../../../../shared/Inputs/StringInput";

export const AddReportNumber = () => {
  const dispatch = useDispatch();
  type FormikErrorType = {
    declarationNum?: string;
  };

  const formik = useFormik({
    initialValues: {
      declarationNum: "",
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (values.declarationNum === "") {
        errors.declarationNum = "Declaration number is required";
      }
      return errors;
    },
    onSubmit: (values, onSubmitProps) => {
      dispatch(getDeclarationByNum(values.declarationNum));
      formik.resetForm();
    },
  });
  return (
    <Container>
      <Row>
        <Form onSubmit={formik.handleSubmit}>
          <Col>
            <StringInput
              formik={formik}
              for={"declarationNum"}
              name="declarationNum"
              noHint={true}
              labelClass="mx-3 text-black"
            />
          </Col>
          <Col>
            <Button
              type={"submit"}
              className={"mt-5 w-75"}
              disabled={formik.values.declarationNum === ""}
            >
              Begin Claim
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};
