import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import blog from "@assets/images/blog-1.png";
import blog1 from "@assets/images/blog-2.png";
import blog2 from "@assets/images/blog-3.png";
import blog3 from "@assets/images/blog-last.png";
import "@styles/components/Blog.css";
import arrowDown from "@assets/icons/arrow-down.svg";

const Blog = () => {
  return (
    <>
      <Container>
        <Row className="my-3">
        <Card className='border-20 wrapping' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
              <Card.Body>
              <h6 className="color-blue-bold font-20">long established</h6>
                <Card.Text className="font-12">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <Link to="/articleDetails"><button className="more-btn color-blue-bold">
                Read more
                  </button>
                  </Link>
                </div>{" "}
              </Card.Body>
              <Card.Img variant="top" src={blog} className='img-card'/>
            </Card>
        </Row>
        <Row className='my-5'>
          <Col lg={4} md={12} sm={12} xs={12} className='p-3'>
            <Card className='border-20'>
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
              <h6 className="color-blue-bold font-20">long established</h6>
                <Card.Text className="font-12">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <button className="more-btn color-blue-bold">
                    Read more
                  </button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className='p-3'>
          <Card className='border-20'>
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
              <h6 className="color-blue-bold font-20">long established</h6>
                <Card.Text className="font-12">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <button className="more-btn color-blue-bold">
                    Read more
                  </button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className='p-3'>
          <Card className='border-20'>
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
              <h6 className="color-blue-bold font-20">long established</h6>
                <Card.Text className="font-12">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <button className="more-btn color-blue-bold">
                    Read more
                  </button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-3">
        <Card className='wrapping back-blue' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Card.Body>
              <h6 className="color-blue-bold font-20">long established</h6>
                <Card.Text className="font-12">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that....
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <button className="more-btn color-blue-bold">
                    Read more
                  </button>
                </div>{" "}
              </Card.Body>
              <Card.Img variant="top" src={blog3} className='img-card-big'/>
            </Card>
        </Row>
        <Row>
            <Button style={{width: '200px', margin: 'auto'}} className='mt-4 mb-5'>See more <img src={arrowDown} alt="" /></Button>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
