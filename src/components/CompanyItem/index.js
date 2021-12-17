import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@styles/components/Companies.css";


const CompanyItem = (data) => {

    const [dataItems, setData] = useState(data.data)
    console.log(dataItems.data, 'items')
   
  return (
    <>
      <Container className="wrapper-companies">
        <Row>
            {data.length > 0 && (dataItems.map(item => {
                return (
                    <Col lg={3} md={6} sm={12} xs={12}>
                        <div className='flex-between'>
                          <img src={item.src} alt="" />
                          <h6>{item.title}</h6>
                        </div>
                        <span>{item.text}</span>
                    </Col>
                )
            }))}
        
        </Row>
      </Container>
      {/* {JSON.stringify(data)} */}
    </>
  );
};

export default CompanyItem;