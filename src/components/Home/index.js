import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import bag from "@assets/images/home-bag.png";
import support from "@assets/icons/Support.svg";
import paper1 from "@assets/images/paper-1.png";
import paper2 from "@assets/images/paper-2.png";
import paper3 from "@assets/images/paper-3.png";
import frame from "@assets/images/frame.png";
import decor from "@assets/images/Decore.svg";
import partner1 from "@assets/images/partner-1.png";
import partner2 from "@assets/images/partner-2.png";
import partner3 from "@assets/images/partner-3.png";
import partner4 from "@assets/images/partner-4.png";
import partner5 from "@assets/images/partner-5.png";
import search from "@assets/icons/search.svg";
import filter from "@assets/icons/filt.svg";
import avatar from "@assets/images/avatar.png";
import location from "@assets/icons/location.svg";
import "@styles/components/Home.css";



const Home = () => {
  return (
    <>
      <Container fluid className='p-0'>
        <Row className="home-head position-relative">
          <Col lg={6} md={6} sm={12} sx={12} className='p-sm-0'>
            <h2>Get Instant Valuation for any <b>Digital Asset</b></h2>
            <p className='font-thin'>
              FinDig has facilitated hundreds of thousands of successful
              business sales and is visited <b>over 3 Million.</b>
            </p>
            <InputGroup className="mb-3">
                <img src={search} alt="" className='search-icon'/>
              <FormControl
                placeholder='     Booking.com'
                aria-label="web"
                aria-describedby="basic-addon2"
                className='position-relative input-border'
              />
          
              <InputGroup.Text id="basic-addon2" className='search-btn'>SEARCH</InputGroup.Text>
            </InputGroup>
          </Col>
          <img src={support} alt="" className='icon-chat'/>
        </Row>
        <Container>
        <Row className='text-center'>
            <small className='text-center pt-5 text-home'>Top Selling</small>
            <h3 className='text-center pb-5 font-bold'>Hot deals</h3>
            <Row className='d-flex justify-content-center align-items-center pb-5'> 
                    <Col lg={3} md={6} sm={12} xs={12} className='mb-4 width-200 me-3'>
                    <img src={paper1} alt="" className='paper'/>
                    <div className='text-home d-flex justify-content-between align-items-center py-2'>
                        <small>Kikioo Systems</small>
                        <small>$210k</small>
                    </div>
                    <small className='text-home'><img alt="" src={location} className="me-2 "/>10 Days Trip</small>
                    </Col>
                    <Col lg={3} md={6} sm={12} xs={12} className='mb-4 width-200'>
                    <img src={paper2} alt="" className='paper'/>
                    <div className='text-home text-left d-flex justify-content-between align-items-center py-2'>
                        <small>Kikioo Systems</small>
                        <small>$210k</small>
                    </div>
                    <small className='text-home'><img alt="" src={location} className="me-2"/>10 Days Trip</small>
                    </Col>
                 
                    <Col lg={3} md={6} sm={12} xs={12} className='mb-4 width-200 ms-3'>
                    <img src={paper3} alt="" className='paper'/>
                    <div className='text-home d-flex justify-content-between align-items-center py-2'>
                        <small>Kikioo Systems</small>
                        <small>$210k</small>
                    </div>
                    <small className='text-home'><img alt="" src={location} className="me-2"/>10 Days Trip</small>
                    </Col>
            </Row>
        </Row>
        <Row className='d-flex justify-content-center align-items-center my-5 py-5 text-center'>
            <Col lg={2} md={6} sm={12} xs={12}> 
            <img src={partner1} alt="" className='w-200'/>
            </Col>
            <Col lg={2} md={6} sm={12} xs={12}> 
            <img src={partner2} alt="" className='w-200'/>
            </Col>
            <Col lg={2} md={6} sm={12} xs={12}> 
            <img src={partner3} alt="" className='w-200'/>
            </Col>
            <Col lg={2} md={6} sm={12} xs={12}> 
            <img src={partner4} alt="" className='w-200'/>
            </Col>
            <Col lg={2} md={6} sm={12} xs={12}> 
            <img src={partner5} alt="" className='w-200 mt-3-sm'/>
            </Col>
        </Row>
        <Row className='flex-center py-5 mb-50'>
            <Col lg={6} md={12} sm={12} xs={12}>
              <h5 className="subTitle">Testimonials</h5>
              <h4 className='text-capitalize font-bold'>What people say about Us.</h4>
              <div className='d-flex justify-content-around align-items-center my-5 text-center' style={{width: '90px'}}>
              <div className='dot-round'>
              </div>
              <div className='dot-round-light'>
              </div>
              <div className='dot-round-light'>
              </div>
              </div>

            </Col>
            <Col lg={6} md={12} sm={12} xs={12} className='relative-position'>
                
                <div className='text-home card-home absolute-back'>
                    <img src={avatar} alt="" className='avatar' />
                    <small>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</small>
                    <h6 className='m-0 pt-4'>Mike taylor</h6>
                    <small>Lahore, Pakistan</small>
                </div>
                <div className='text-home card-home-back absolute-back-1'>
                    <small>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</small>
                    <h6 className='m-0 pt-4'>Chris Thomas</h6>
                    <small>CEO of Red Button</small>
                    {/* <img src={arrow} alt="" /> */}
                </div>
            </Col>
        </Row>
        </Container>
        <div className='bg-blue'>
            <Container>
        <Row className='flex-center py-5 mb-50'>
          <Col lg={6} md={6} sm={12} xs={12} >
              <h5 className='text-white w-300'>Join 100 Compannies who boost their business with Product</h5>
              <button className='btn-white'>Find out more</button>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} >
              <img src={frame} alt="" className='frame'/>
          </Col>
        </Row>
        </Container>
        </div>
      </Container>
    </>
  );
};

export default Home;
