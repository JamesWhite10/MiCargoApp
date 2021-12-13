import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FaqItem from "./FaqItem";
import style from "./Support.module.css";

const Faq: React.FC = () => {
  return (
    <div className={style.supportBlock}>
      <Row className={"pt-4 pt-lg-4"}>
        <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
          <h3>
            <a id={"faq"} />
            FAQ:
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <FaqItem
              question={"Is this Spike or Excess cargo coverage?"}
              response={
                "Spike and Excess is not full coverage.  MiKargo provides full coverage so you will need to input the entire load amount for complete limit coverage."
              }
            />
            <FaqItem
              question={"What is “All Risks”?"}
              response={
                "All-Risks coverage offers much broader protection than any standard cargo coverage which only covers incidents the policy specifically includes."
              }
            />
            <FaqItem
              question={"What is a Declaration?"}
              response={
                "We use a Declaration since it is an actual form of the insurance policy itself rather than a Certificate which only provides basic and limited information."
              }
            />
            <FaqItem
              question={"Is there a Deductible?"}
              response={
                "tYes, the appropriate Deductible will display when you enter the commodity and limit for the quote as well as stated on the Declaration after purchase. "
              }
            />
            <FaqItem
              question={"When does coverage start and end?"}
              response={
                "From the moment you take receipt of the load until the time it is delivered and the BOL is signed by the consignee."
              }
            />
            <FaqItem
              question={"What is the coverage area?"}
              response={"Continental United States, Canada and Alaska"}
            />
            <FaqItem
              question={"Why is the DOT number important?"}
              response={
                "We pull the motor carrier information servicing the freight and validate the authority has been active the past 12 months as part of the Terms & Conditions of the program."
              }
            />
            <FaqItem
              question={"What if I don’t need the coverage and want to cancel?"}
              response={
                "Follow the simple steps after you click Cancel a Purchase from them menu bar on the home screen.  However, it is important to note that a copy of the cancel notice will also be forwarded to all recipients who received the original Declaration."
              }
            />
            <FaqItem
              question={"Is the Declaration transferable?"}
              response={
                "Unfortunately, no as coverage is specific to the shipment and carrier servicing it.  Should there be a change in the motor carrier, you will need to cancel the purchase and re-order so we can validate the new motor carrier."
              }
            />
            <FaqItem question={"How do I pay?"} response={"Using a valid credit card"} />
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Faq;
