import React, { useState } from "react";
import { Col, Container, Row, FormControl, Dropdown } from "react-bootstrap";
import { companies } from "./companies";
import "@styles/components/Companies.css";
import CompanyItem from "@components/CompanyItem";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);
const Companies = () => {
  return (
    <>
      <Container className="wrapper-companies" fluid>
        <Row>
          <Col lg={10} md={10} sm={10} xs={10}>
            <a href="" className="section-link me-5 text">
              Section 1
            </a>
            <a href="" className="section-link me-5 text">
              Section 2
            </a>
            <a href="" className="section-link me-5 text">
              Section 3
            </a>
            <a href="" className="section-link me-5 text">
              Section 4
            </a>
            <a href="" className="section-link me-5 text">
              Section 5
            </a>
            <a href="" className="section-link me-5 text">
              More
            </a>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2} className="text-right">
            <Dropdown>
              <Dropdown.Toggle
                as={CustomToggle}
                id="dropdown-custom-components"
                className='filter-btn'
              >
                Filters
              </Dropdown.Toggle>

              <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                  Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <CompanyItem companies={companies} />
        </Row>
      </Container>
      {/* {JSON.stringify(data)} */}
    </>
  );
};

export default Companies;
