import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@styles/components/Companies.css";
import profile from "@assets/icons/profile.svg";
import money from "@assets/icons/money.svg";
import time from "@assets/icons/time.svg";
import { useHistory, useLocation, useParams } from "react-router-dom";
import stars from "@assets/icons/star.svg";
import dot from "@assets/icons/dot.svg";
import done from "@assets/icons/done-icon.svg";
import profile1 from "@assets/images/p1.png";
import profile2 from "@assets/images/p2.png";
import profile3 from "@assets/images/p3.png";
import profile4 from "@assets/images/p4.png";

const CompanyDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const companyItem = location.state?.companyItem;

  console.log("companyItem", companyItem);

  if (!companyItem) {
    history.push("/companies");
  }
  return (
    <>
      <Container className="py-4">
        <small>Flexible search/{companyItem.title}</small>
        <Row className="my-3">
          <Col lg={6} md={6} sm={6} xs={6}>
            <h5>{companyItem.title}</h5>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className="text-right">
            <FontAwesomeIcon icon={faHeart} className="me-2 blue-color" />
            Save
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <img alt="" src={companyItem.img} width="300" />
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <img alt="" src={companyItem.img2} width="300" />
              </Col>
            </Row>
            <Row className="my-3">
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
              <Row className="my-4">
                <Col lg={6} md={6} sm={12} xs={12} className="f-row">
                  <img src={profile} alt="" className="me-2" />
                  <div>
                    <p className="text-secondary m-0">
                      How many people visited this month
                    </p>
                    <p>14 564</p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className="f-row">
                  <img src={money} alt="" className="me-2" />
                  <div>
                    <p className="text-secondary m-0">
                      How many people visited this month
                    </p>
                    <p>14 564</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6} className="f-row">
                  <img src={time} alt="" className="me-2" />
                  <div>
                    <p className="text-secondary m-0">
                      How many people visited this month
                    </p>
                    <p>14 564</p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="f-row">
                  <img src={profile} alt="" className="me-2" />
                  <div>
                    <p className="text-secondary m-0">
                      How many people visited this month
                    </p>
                    <p>14 564</p>
                  </div>
                </Col>
              </Row>
            </Row>
            <Row className="my-4">
              <h5 className="bb-black">Reviews</h5>
              <Row className="my-4">
                <Col className="f-row">
                  <div className="me-2">
                    <img alt="" src={stars} style={{ width: "20px" }} />
                    <img alt="" src={stars} style={{ width: "20px" }} />
                    <img alt="" src={stars} style={{ width: "20px" }} />
                    <img alt="" src={stars} style={{ width: "20px" }} />
                    <img alt="" src={stars} style={{ width: "20px" }} />
                  </div>
                  <h5 className="me-2">4.95</h5>
                  <img
                    alt=""
                    src={dot}
                    style={{ width: "10px" }}
                    className="me-2"
                  />
                  <h5>14 reviews</h5>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={6} sm={12} xs={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="f-row justify-content-start">
                        <img src={profile2} alt="" className="me-2" />
                        <div>
                          <p className="m-0">Kate</p>
                          <p className="text-secondary m-0">October 2021</p>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever sin...
                      </Card.Text>
                      <button className="btn-border">Show more ></button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={12} xs={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="f-row justify-content-start">
                        <img src={profile3} alt="" className="me-2" />
                        <div>
                          <p className="m-0">Kate</p>
                          <p className="text-secondary m-0">October 2021</p>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever sin...
                      </Card.Text>
                      <button className="btn-border">Show more ></button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={12} xs={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="f-row justify-content-start">
                        <img src={profile4} alt="" className="me-2" />
                        <div>
                          <p className="m-0">Kate</p>
                          <p className="text-secondary m-0">October 2021</p>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever sin...
                      </Card.Text>
                      <button className="btn-border">Show more ></button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={6} sm={12} xs={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="f-row justify-content-start">
                        <img src={profile2} alt="" className="me-2" />
                        <div>
                          <p className="m-0">Kate</p>
                          <p className="text-secondary m-0">October 2021</p>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever sin...
                      </Card.Text>
                      <button className="btn-border">Show more ></button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={12} xs={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="f-row justify-content-start">
                        <img src={profile2} alt="" className="me-2" />
                        <div>
                          <p className="m-0">Kate</p>
                          <p className="text-secondary m-0">October 2021</p>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever sin...
                      </Card.Text>
                      <button className="btn-border">Show more ></button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4} md={6} sm={12} xs={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="f-row justify-content-start">
                        <img src={profile2} alt="" className="me-2" />
                        <div>
                          <p className="m-0">Kate</p>
                          <p className="text-secondary m-0">October 2021</p>
                        </div>
                      </Card.Title>
                      <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever sin...
                      </Card.Text>
                      <button className="btn-border">Show more ></button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg={6} ms={6} sm={12} xs={12} className="mt-5">
                  <button className="btn-border-large">
                    Show all reviews (14)
                  </button>
                </Col>
              </Row>
            </Row>
          </Col>

          <Col lg={4} md={4} sm={12} xs={12}>
            <div className='border-thin'>
              <h3 className="bb-black">${companyItem.price}</h3>
              <Row>
                <Col>
                  <div className="f-row justify-content-start">
                    <img src={done} alt="" className="me-2" />
                    <div>
                      <p className="m-0 text-secondary">Industries</p>
                      <p className="m-0">Fashion</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="f-row justify-content-start">
                    <img src={done} alt="" className="me-2" />
                    <div>
                      <p className="m-0 text-secondary">Year of funding</p>
                      <p className="m-0">2012</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="f-row justify-content-start">
                    <img src={done} alt="" className="me-2" />
                    <div>
                      <p className="m-0 text-secondary">Country</p>
                      <p className="m-0">Ukraine</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="f-row justify-content-start">
                    <img src={done} alt="" className="me-2" />
                    <div>
                      <p className="m-0 text-secondary">Town</p>
                      <p className="m-0">Kyiv</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="bb-black">
                <Col>
                  <div className="f-row justify-content-start">
                    <img src={done} alt="" className="me-2" />
                    <div>
                      <p className="m-0 text-secondary">Pricing</p>
                      <p className="m-0">120 000$</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="f-row justify-content-start">
                    <img src={done} alt="" className="me-2" />
                    <div>
                      <p className="m-0 text-secondary">Number of employees</p>
                      <p className="m-0">14</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className='my-3'>
                <div className="f-row justify-content-start">
                  <img src={profile1} alt="" className="me-2" />
                  <div>
                    <p className="m-0">ALEX BOBRIKOV</p>
                    <div className="me-2">
                      <img alt="" src={stars} style={{ width: "20px" }} />
                      <img alt="" src={stars} style={{ width: "20px" }} />
                      <img alt="" src={stars} style={{ width: "20px" }} />
                      <img alt="" src={stars} style={{ width: "20px" }} />
                      <img alt="" src={stars} style={{ width: "20px" }} />
                    </div>
                    <a className="m-0 btn-blue">View</a>
                    
                  </div>
                  
                </div>
              </Row>
              <Button className='contact-btn'>Contact</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CompanyDetails;
