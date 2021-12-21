import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '@styles/components/Companies.css'
import { useParams } from 'react-router-dom'

const CompanyDetails = () => {
    const { id } = useParams();
    return (
        <>
          <Container className='py-4'>
              <small>Flexible search/Company name</small>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                 Company name
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className='text-right'>
                <FontAwesomeIcon icon={faHeart} className='me-2 blue-color'/>Save</Col>
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

                
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
        
                </Col>
              </Row>
          </Container>
        </>
    )
}


export default CompanyDetails