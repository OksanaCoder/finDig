import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@styles/components/Companies.css";
import { useParams } from "react-router-dom";
import profile from "@assets/icons/profile.svg";
import money from "@assets/icons/money.svg";
import time from "@assets/icons/time.svg";

const CompanyDetails = () => {
  const { id } = useParams();
  return (
    <>
      <Container className="py-4">
        <small>Flexible search/Company name</small>
        <Row>
          <Col lg={6} md={6} sm={6} xs={6}>
            <h5> Company name</h5>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className="text-right">
            <FontAwesomeIcon icon={faHeart} className="me-2 blue-color" />
            Save
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                {/* <img alt="" src={} /> */}
                {id}
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                {/* <img alt="" src={props.location.state.products.img} /> */}
              </Col>
            </Row>
            <Row>
              <h5 className="bb-black">Information about the project</h5>
              <p className="text-main">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="text-main">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </Row>
            <Row>
              <h5 className="bb-black">Analytics</h5>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}  className="f-row">
                  <img src={profile} alt="" />
                  <div >
                    <p>How many people visited this month</p>
                    <p>14 564</p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}  className="f-row">
                  <img src={money} alt="" />
                  <div>
                    <p>How many people visited this month</p>
                    <p>14 564</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}  className="f-row">
                  <img src={time} alt="" />
                  <div>
                    <p>How many people visited this month</p>
                    <p>14 564</p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}  className="f-row">
                  <img src={profile} alt="" />
                  <div>
                    <p>How many people visited this month</p>
                    <p>14 564</p>
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>

          <Col lg={4} md={4} sm={12} xs={12}></Col>
        </Row>
      </Container>
    </>
  );
};

export default CompanyDetails;
