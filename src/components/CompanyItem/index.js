import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "@styles/components/Companies.css";
import { useLocation } from 'react-router-dom'


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
                <Col lg={3} md={6} sm={12} xs={12} className='p-2'>
                 
                 <Link to={{
                     pathname: `/companies/${item.id}`,
                 }}
                 ><img src={item.img} alt="" width="100%" className='my-2'/></Link>
                 
                    <div className="flex-between">
                    <h6 className='title'>{item.title}</h6>
                    <h6 className='blue font-middle'>{item.price} $</h6>
                  </div>
                  <span className='text'>{item.text}</span>
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
