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
              <h6 className="color-blue-bold font-20">An Up-to-Date Guide to Ecommerce Website Development</h6>
                <Card.Text className="font-12">
                In 2021, more than 2.14 billion people – or one quarter of the human population – shopped online. This surge was caused in part by the closing of physical stores during worldwide lockdowns, but it also followed a larger trend of shoppers choosing online retail experiences over physical shopping...
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <Link to="/articleDetails"><button className="more-btn color-blue-bold">
                Read more
                  </button>
                  </Link>
                </div>{" "}
              </Card.Body>
              <Card.Img variant="top" src="https://flippa.com/blog/wp-content/uploads/2022/02/ecommerce-website-development-guide.png" className='img-card'/>
            </Card>
        </Row>
        <Row className='my-5'>
          <Col lg={4} md={12} sm={12} xs={12} className='p-3'>
            <Card className='border-20'>
              <Card.Img variant="top" src="https://flippa.com/blog/wp-content/uploads/2022/02/sell-app-flippa.png" />
              <Card.Body>
              <h6 className="color-blue-bold font-20">9 Tips to Help You Sell Your App Quickly</h6>
                <Card.Text className="font-12">
                Are you an app developer with a great new app to sell? Are you finding it hard to get traction in today’s competitive market? Is your sale price set to the value of your App?
                There’s no need to worry – you’re not the only one. But don’t give up yet! 
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                   <Link to="/articleDetails"> <button className="more-btn color-blue-bold">
                    Read more
                  </button>
                  </Link>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className='p-3'>
          <Card className='border-20'>
              <Card.Img variant="top" src='https://flippa.com/blog/wp-content/uploads/2022/02/how-to-build-an-online-community-saas-business.png' />
              <Card.Body>
              <h6 className="color-blue-bold font-20">How to Build an Online Community for Your SaaS Business</h6>
                <Card.Text className="font-12">
                Software-as-a-Service or SaaS businesses often have difficulty with customer retention and brand awareness. Since their products are intangible and customers never permanently purchase their software solutions..
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <Link to="/articleDetails"><button className="more-btn color-blue-bold">
                    Read more
                  </button></Link>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} className='p-3'>
          <Card className='border-20'>
              <Card.Img variant="top" src="https://flippa.com/blog/wp-content/uploads/2022/02/profitable-products-flippa.png" />
              <Card.Body>
              <h6 className="color-blue-bold font-20">A Step-by-Step Guide to Finding Profitable Products
</h6>
                <Card.Text className="font-12">
                It’s never been easier to start a business online, and digital products are a great business investment. Ecommerce has grown by 25% year over..
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <Link to="/articleDetails"><button className="more-btn color-blue-bold">
                    Read more
                  </button></Link>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-3">
        <Card className='wrapping back-blue' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Card.Body>
              <h6 className="color-blue-bold font-20">How To Sell Your Website at a Premium</h6>
                <Card.Text className="font-12">
                Building a successful eCommerce website is profitable and highly satisfying. However, you might one day reach the point of deciding to sell your eCommerce website in order to embark on new endeavors.

Before you do, think of the countless hours of work that have gone in..
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="grey-small ">May 20th 2020</small>
                  <button className="more-btn color-blue-bold">
                    Read more
                  </button>
                </div>{" "}
              </Card.Body>
              <Card.Img variant="top" src='https://flippa.com/blog/wp-content/uploads/2021/07/SellWebsite.jpg' className='img-card-big'/>
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
