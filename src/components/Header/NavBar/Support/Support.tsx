import React from "react";
import style from "./Support.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";
import { PATH } from "../../../../app/App";
import Faq from "./FAQ";

const Support: React.FC = () => {
  return (
    <div className={`${style.supportBlock} pb-4 pb-lg-4 pt-4 pt-lg-4`}>
      <Container>
        <Row>
          <Col>
            <h2 className={"text-color-name-profile"}>Support/FAQ</h2>
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            <ul>
              <li>
                <NavLink to={PATH.APPROVED_COMMODITY}>Approved Commodities</NavLink>
              </li>
              <li>
                <NavLink to={PATH.EXCLUDED_COMMODITY}>Excluded Commodities</NavLink>
              </li>
              <li>
                <a href={"#broker_benefits"}>Broker/Shipper Benefits</a>
              </li>
              <li>
                <a href={"#carrier_benefits"}>Carrier Benefits</a>
              </li>
              <li>
                <a href={"#faq"}>FAQ</a>
              </li>
              <li>
                <a href={"#statement"}>Warranty Statement</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              <a id={"broker_benefits"} />
              Broker and Shipper Benefits
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            Remove the confusion from inferior coverage. MiKargo is full load coverage using an
            All-Risks policy providing far greater insurance coverage than the typical motor carrier
            cargo policy. Acts of God, Losses in/out of the driver’s control, Unattended Theft and
            many other exposures are covered!
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                Expand carrier capacity and increase profitability rather than searching for a motor
                carrier who has the acceptable limit
              </li>
              <li>Remove the wait time from carrier’s scrambling to get a cargo quote</li>
              <li>
                Remove the question “Do you have the right limit and coverage?” coverage?” with
                carriers knowing that you have All-Risk coverage rather than running the risk of an
                unknown cargo policy
              </li>
              <li>Better protection for you and your customers from an uncovered loss</li>
              <li>Coverage is continuous until delivered in the US and Canada</li>
              <li>Simple claim service process</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            <h3>
              <a id={"carrier_benefits"} />
              Carrier Benefits
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            Remove the confusion from inferior coverage. MiKargo is full load coverage using an
            All-Risks policy providing far greater insurance coverage than the typical cargo policy.
            Acts of God, Losses in/out of the driver’s control, Unattended Theft and many other
            exposures are covered!
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            <ul>
              <li>Now you have access to higher paying loads that need a higher cargo coverage</li>
              <li>No more waiting for your agent and underwriter to approve the load and limit</li>
              <li>Access to commodities typically excluded by standard cargo policies</li>
              <li>Coverage is continuous until delivered in the US and Canada</li>
              <li>Simple claim service process</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              <a id={"statement"} />
              Warranty Statement:
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className={"pb-4 pb-lg-4 pt-4 pt-lg-4"}>
            <ul>
              <li>
                It is warranted that this coverage is non-transferrable and coverage is void if not
                hauled by the same carrier listed on the declaration;
              </li>
              <li>
                Warranted that coverage can only be purchased prior to taking physical control of
                the goods;
              </li>
              <li>
                Warranted that the motor carrier listed in the Declaration maintains FMCSA authority
                for 12 continuous months or greater;
              </li>
              <li>
                Warranted that this coverage is primary and will not apply on an an excess basis
                over any other insurance;
              </li>
              <li>
                Warranted that coverage can only be cancelled prior to the pick-up date on the
                declaration and not the same day. Notice of any cancellation will be forwarded to
                all parties who received the original purchase declaration;
              </li>
              <li>Warranted that improper commodity selection may void coverage;</li>
              <li>
                Warranted that this coverage maintains the applicable deductible deductible as
                displayed in the Declaration;
              </li>
              <li>
                Warranted that loss or damage as a failure to comply with federal and/or state DOT
                guidelines for oversize or over-dimension goods may void coverage
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            Added content to comply with ISO application standards will be added as well via three
            additional paragraphs below the above.
          </Col>
        </Row>
        <Faq />
      </Container>
    </div>
  );
};

export default Support;
