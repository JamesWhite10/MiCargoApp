import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IGetDeclarationHistoryResponse } from "../../../api/micargo-api";
import { AppStateType } from "../../../app/store";

function convertDate(date: Date | undefined): string {
  //TODO get shared date parser
  if (!date) return "";
  const dat = new Date(date);
  return dat.getUTCMonth() + "-" + dat.getUTCDate() + "-" + dat.getUTCFullYear();
}

const DeclarationsList: React.FC = () => {
  const history = useSelector<AppStateType, IGetDeclarationHistoryResponse[]>(
    (state) => state.history.loadedHistory
  );
  if (!history) {
    return <div>Declaration history is empty</div>;
  }

  return (
    <div>
      {history.map((v) => (
        <Row key={v.id}>
          <Col>{convertDate(v.purchaseDate)}</Col>
          <Col>{v.number}</Col>
          <Col>{v.amount}</Col>
        </Row>
      ))}
    </div>
  );
};

export default DeclarationsList;
