import { Col, Form, FormControl } from "react-bootstrap";

export function BlockedInput(props: {
  name: string;
  val: string | number | undefined;
  xs?: number;
}) {
  return (
    <Col xs={props.xs}>
      <Form.Label className={"mx-3"}>{props.name}</Form.Label>
      <FormControl
        value={props.val}
        disabled
        style={{ backgroundColor: "#cccccc", borderColor: "#a8acb4" }}
      />
    </Col>
  );
}
