import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@styles/components/Companies.css";

const CompanyItem = (props) => {
  const [companies, setCompanies] = useState(props.companies);

  console.log(companies, "companies");

  return (
    <>
      <Container className="wrapper-companies">
        <Row>
          {companies.length > 0 &&
            companies.map((item) => {
              return (
                <Col lg={3} md={6} sm={12} xs={12}>
                  <div className="flex-between">
                    <img src={item.img} alt="YO" />
                    <h6>{item.title}</h6>
                  </div>
                  <span>{item.text}</span>
                </Col>
              );
            })}
        </Row>
      </Container>
      {/* {JSON.stringify(data)} */}
    </>
  );
};

export default CompanyItem;
