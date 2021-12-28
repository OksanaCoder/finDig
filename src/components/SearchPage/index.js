import React from "react";
import { Container, Row, Col, InputGroup, FormControl, Pagination } from "react-bootstrap";
import search from "@assets/icons/search-icon.svg";
import question from "@assets/icons/question.svg";
import facebook from "@assets/icons/facebook-mask.svg";
import number from "@assets/icons/87.svg";
import location from "@assets/icons/location-icon.svg";
import doneIcon from "@assets/icons/done-round.svg";
import starLight from "@assets/icons/star-1.svg";
import starDark from "@assets/icons/star-2.svg";
import questionBlue from "@assets/icons/question-blue.svg";
import "@styles/components/Search.css";

const SearchPage = () => {
  return (
    <>
      <Container className="py-5">
        <h2></h2>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" className="bag-blue">
            <img src={search} alt="" />
          </InputGroup.Text>
        </InputGroup>
        <Row>
          <Col className="flex-row-center  pb-5">
            <div className="flex-row-center me-2">
              <input type="radio" value="online" name="status-buttons" />
              <label
                className="unwanted_content_second_step_label me-2 ms-2"
                htmlFor="online"
              >
                Online
              </label>

              <img src={question} alt="" />
            </div>
            <div className="flex-row-center">
              <input type="radio" value="offline" name="status-buttons" />
              <label
                className="unwanted_content_second_step_label me-2 ms-2"
                htmlFor="offline"
              >
                Offline
              </label>

              <img src={question} alt="" />
            </div>
          </Col>
        </Row>
        <Row className="row-with-border pb-4 ">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="flex-column-center p-3"
              >
                <img src={facebook} alt="" />
                <button className="blue-btn-fill my-2">View</button>
                <button className="btn-blue-border">Finding value</button>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12} className="p-3">
                <h6>
                  Company Name <img src={doneIcon} alt="" />
                </h6>
                <div className="flex-row-center my-3">
                  <img src={location} alt="" className="me-2" />
                  <small className="me-2 light-grey">
                    USA, Miami, Florida |
                  </small>{" "}
                  <small className="blue-color">Graphic designer</small>
                </div>
                <div className="my-2">
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starDark} alt="" className="me-2" />
                  <small className="me-2">4.0</small>
                  <small className="blue-color">(40 reviews)</small>
                </div>
                <p>
                  {" "}
                  Nec sem orci, turpis quam. Felis velit urna tellus lorem
                  turpis urna lacinia non faucibus. Fermentum nibh placerat
                  vitae massa arcu duis ut in id. Sed sed non porta tincidunt
                  Felis velit urna tellus lorem turpis urna lacinia non
                  faucibus. Fermentum nibh placerat vitae massa arcu duis ut in
                  id. Sed sed non porta tincidunt..{" "}
                  <small className="blue-color">More</small>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className="p-3">
            <small className="light-grey">
              Start price <small className="text-dark">$200</small>
            </small>
            <div className="mt-2 score-box">
              <div className="flex-row-center p-2">
                <h6 className="me-2">Trust Score</h6>
                <img src={questionBlue} alt="" />
              </div>
              <div className="flex-row-between">
                <img src={number} alt="" />
                <ul className="list-unstyled style-score">
                  <li>
                    Jobs completed: <small className="blue-color">35</small>
                  </li>
                  <li>
                    Service Quality: <small className="blue-color">7/9</small>
                  </li>
                  <li>
                    Total Earning: <small className="blue-color">$6K+</small>
                  </li>
                  <li>
                    Business Shared: <small className="blue-color">40</small>
                  </li>
                  <li>
                    Value Business: <small className="blue-color">500K</small>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-with-border pb-4 ">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="flex-column-center p-3"
              >
                <img src={facebook} alt="" />
                <button className="blue-btn-fill my-2">View</button>
                <button className="btn-blue-border">Finding value</button>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12} className="p-3">
                <h6>
                  Company Name <img src={doneIcon} alt="" />
                </h6>
                <div className="flex-row-center my-3">
                  <img src={location} alt="" className="me-2" />
                  <small className="me-2 light-grey">
                    USA, Miami, Florida |
                  </small>{" "}
                  <small className="blue-color">Graphic designer</small>
                </div>
                <div className="my-2">
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starDark} alt="" className="me-2" />
                  <small className="me-2">4.0</small>
                  <small className="blue-color">(40 reviews)</small>
                </div>
                <p>
                  {" "}
                  Nec sem orci, turpis quam. Felis velit urna tellus lorem
                  turpis urna lacinia non faucibus. Fermentum nibh placerat
                  vitae massa arcu duis ut in id. Sed sed non porta tincidunt
                  Felis velit urna tellus lorem turpis urna lacinia non
                  faucibus. Fermentum nibh placerat vitae massa arcu duis ut in
                  id. Sed sed non porta tincidunt..{" "}
                  <small className="blue-color">More</small>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className="p-3">
            <small className="light-grey">
              Start price <small className="text-dark">$200</small>
            </small>
            <div className="mt-2 score-box">
              <div className="flex-row-center p-2">
                <h6 className="me-2">Trust Score</h6>
                <img src={questionBlue} alt="" />
              </div>
              <div className="flex-row-between">
                <img src={number} alt="" />
                <ul className="list-unstyled style-score">
                  <li>
                    Jobs completed: <small className="blue-color">35</small>
                  </li>
                  <li>
                    Service Quality: <small className="blue-color">7/9</small>
                  </li>
                  <li>
                    Total Earning: <small className="blue-color">$6K+</small>
                  </li>
                  <li>
                    Business Shared: <small className="blue-color">40</small>
                  </li>
                  <li>
                    Value Business: <small className="blue-color">500K</small>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-with-border pb-4 ">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="flex-column-center p-3"
              >
                <img src={facebook} alt="" />
                <button className="blue-btn-fill my-2">View</button>
                <button className="btn-blue-border">Finding value</button>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12} className="p-3">
                <h6>
                  Company Name <img src={doneIcon} alt="" />
                </h6>
                <div className="flex-row-center my-3">
                  <img src={location} alt="" className="me-2" />
                  <small className="me-2 light-grey">
                    USA, Miami, Florida |
                  </small>{" "}
                  <small className="blue-color">Graphic designer</small>
                </div>
                <div className="my-2">
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starDark} alt="" className="me-2" />
                  <small className="me-2">4.0</small>
                  <small className="blue-color">(40 reviews)</small>
                </div>
                <p>
                  {" "}
                  Nec sem orci, turpis quam. Felis velit urna tellus lorem
                  turpis urna lacinia non faucibus. Fermentum nibh placerat
                  vitae massa arcu duis ut in id. Sed sed non porta tincidunt
                  Felis velit urna tellus lorem turpis urna lacinia non
                  faucibus. Fermentum nibh placerat vitae massa arcu duis ut in
                  id. Sed sed non porta tincidunt..{" "}
                  <small className="blue-color">More</small>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className="p-3">
            <small className="light-grey">
              Start price <small className="text-dark">$200</small>
            </small>
            <div className="mt-2 score-box">
              <div className="flex-row-center p-2">
                <h6 className="me-2">Trust Score</h6>
                <img src={questionBlue} alt="" />
              </div>
              <div className="flex-row-between">
                <img src={number} alt="" />
                <ul className="list-unstyled style-score">
                  <li>
                    Jobs completed: <small className="blue-color">35</small>
                  </li>
                  <li>
                    Service Quality: <small className="blue-color">7/9</small>
                  </li>
                  <li>
                    Total Earning: <small className="blue-color">$6K+</small>
                  </li>
                  <li>
                    Business Shared: <small className="blue-color">40</small>
                  </li>
                  <li>
                    Value Business: <small className="blue-color">500K</small>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-with-border pb-4 ">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="flex-column-center p-3"
              >
                <img src={facebook} alt="" />
                <button className="blue-btn-fill my-2">View</button>
                <button className="btn-blue-border">Finding value</button>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12} className="p-3">
                <h6>
                  Company Name <img src={doneIcon} alt="" />
                </h6>
                <div className="flex-row-center my-3">
                  <img src={location} alt="" className="me-2" />
                  <small className="me-2 light-grey">
                    USA, Miami, Florida |
                  </small>{" "}
                  <small className="blue-color">Graphic designer</small>
                </div>
                <div className="my-2">
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starDark} alt="" className="me-2" />
                  <small className="me-2">4.0</small>
                  <small className="blue-color">(40 reviews)</small>
                </div>
                <p>
                  {" "}
                  Nec sem orci, turpis quam. Felis velit urna tellus lorem
                  turpis urna lacinia non faucibus. Fermentum nibh placerat
                  vitae massa arcu duis ut in id. Sed sed non porta tincidunt
                  Felis velit urna tellus lorem turpis urna lacinia non
                  faucibus. Fermentum nibh placerat vitae massa arcu duis ut in
                  id. Sed sed non porta tincidunt..{" "}
                  <small className="blue-color">More</small>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className="p-3">
            <small className="light-grey">
              Start price <small className="text-dark">$200</small>
            </small>
            <div className="mt-2 score-box">
              <div className="flex-row-center p-2">
                <h6 className="me-2">Trust Score</h6>
                <img src={questionBlue} alt="" />
              </div>
              <div className="flex-row-between">
                <img src={number} alt="" />
                <ul className="list-unstyled style-score">
                  <li>
                    Jobs completed: <small className="blue-color">35</small>
                  </li>
                  <li>
                    Service Quality: <small className="blue-color">7/9</small>
                  </li>
                  <li>
                    Total Earning: <small className="blue-color">$6K+</small>
                  </li>
                  <li>
                    Business Shared: <small className="blue-color">40</small>
                  </li>
                  <li>
                    Value Business: <small className="blue-color">500K</small>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-with-border pb-4 ">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="flex-column-center p-3"
              >
                <img src={facebook} alt="" />
                <button className="blue-btn-fill my-2">View</button>
                <button className="btn-blue-border">Finding value</button>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12} className="p-3">
                <h6>
                  Company Name <img src={doneIcon} alt="" />
                </h6>
                <div className="flex-row-center my-3">
                  <img src={location} alt="" className="me-2" />
                  <small className="me-2 light-grey">
                    USA, Miami, Florida |
                  </small>{" "}
                  <small className="blue-color">Graphic designer</small>
                </div>
                <div className="my-2">
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starDark} alt="" className="me-2" />
                  <small className="me-2">4.0</small>
                  <small className="blue-color">(40 reviews)</small>
                </div>
                <p>
                  {" "}
                  Nec sem orci, turpis quam. Felis velit urna tellus lorem
                  turpis urna lacinia non faucibus. Fermentum nibh placerat
                  vitae massa arcu duis ut in id. Sed sed non porta tincidunt
                  Felis velit urna tellus lorem turpis urna lacinia non
                  faucibus. Fermentum nibh placerat vitae massa arcu duis ut in
                  id. Sed sed non porta tincidunt..{" "}
                  <small className="blue-color">More</small>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className="p-3">
            <small className="light-grey">
              Start price <small className="text-dark">$200</small>
            </small>
            <div className="mt-2 score-box">
              <div className="flex-row-center p-2">
                <h6 className="me-2">Trust Score</h6>
                <img src={questionBlue} alt="" />
              </div>
              <div className="flex-row-between">
                <img src={number} alt="" />
                <ul className="list-unstyled style-score">
                  <li>
                    Jobs completed: <small className="blue-color">35</small>
                  </li>
                  <li>
                    Service Quality: <small className="blue-color">7/9</small>
                  </li>
                  <li>
                    Total Earning: <small className="blue-color">$6K+</small>
                  </li>
                  <li>
                    Business Shared: <small className="blue-color">40</small>
                  </li>
                  <li>
                    Value Business: <small className="blue-color">500K</small>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row-with-border pb-4 ">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Row>
              <Col
                lg={4}
                md={12}
                sm={12}
                xs={12}
                className="flex-column-center p-3"
              >
                <img src={facebook} alt="" />
                <button className="blue-btn-fill my-2">View</button>
                <button className="btn-blue-border">Finding value</button>
              </Col>
              <Col lg={8} md={8} sm={12} xs={12} className="p-3">
                <h6>
                  Company Name <img src={doneIcon} alt="" />
                </h6>
                <div className="flex-row-center my-3">
                  <img src={location} alt="" className="me-2" />
                  <small className="me-2 light-grey">
                    USA, Miami, Florida |
                  </small>{" "}
                  <small className="blue-color">Graphic designer</small>
                </div>
                <div className="my-2">
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starLight} alt="" />
                  <img src={starDark} alt="" className="me-2" />
                  <small className="me-2">4.0</small>
                  <small className="blue-color">(40 reviews)</small>
                </div>
                <p>
                  {" "}
                  Nec sem orci, turpis quam. Felis velit urna tellus lorem
                  turpis urna lacinia non faucibus. Fermentum nibh placerat
                  vitae massa arcu duis ut in id. Sed sed non porta tincidunt
                  Felis velit urna tellus lorem turpis urna lacinia non
                  faucibus. Fermentum nibh placerat vitae massa arcu duis ut in
                  id. Sed sed non porta tincidunt..{" "}
                  <small className="blue-color">More</small>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className="p-3">
            <small className="light-grey">
              Start price <small className="text-dark">$200</small>
            </small>
            <div className="mt-2 score-box">
              <div className="flex-row-center p-2">
                <h6 className="me-2">Trust Score</h6>
                <img src={questionBlue} alt="" />
              </div>
              <div className="flex-row-between">
                <img src={number} alt="" />
                <ul className="list-unstyled style-score">
                  <li>
                    Jobs completed: <small className="blue-color">35</small>
                  </li>
                  <li>
                    Service Quality: <small className="blue-color">7/9</small>
                  </li>
                  <li>
                    Total Earning: <small className="blue-color">$6K+</small>
                  </li>
                  <li>
                    Business Shared: <small className="blue-color">40</small>
                  </li>
                  <li>
                    Value Business: <small className="blue-color">500K</small>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
            <Col className='d-flex justify-content-center pt-4'>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
          </Pagination></Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchPage;
