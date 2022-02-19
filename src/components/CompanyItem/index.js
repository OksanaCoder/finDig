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
      <Container className="wrapper-companies" fluid>
        <Row>
          {companies.length > 0 &&
            companies.map((item) => {
              return (
                <Col lg={2} md={3} sm={12} xs={12} className='p-2'>
                 
                 <Link to={{
                     pathname: `/companies/${item.id}`,
                     state: {companyItem: item}
                 }}
                 ><img src={item.img} alt="" width="100%" className='my-3 card-item'/></Link>
                 
                    <div>
                    <h6 className='title'>{item.title}</h6>
                    
                  
                  <span className='text'>{item.text.slice(0, 70)}..</span>
                  <p className='blue font-middle text-right mt-2'>{item.price} $</p>
                  </div>
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
