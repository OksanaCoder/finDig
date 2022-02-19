import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import blog from "@assets/images/blog-1.png";
import arrowLeft from "@assets/icons/arrow-left.svg";
import arrowUp from "@assets/icons/arrow-up.svg";
import "@styles/components/Blog.css";

const BlogDetails = () => {
    const history = useHistory();
    const handleBack = () => {
        history.goBack('/')
    }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
  return (
    <>
      <Container>
        <Row style={{position: 'relative'}} className='mt-4'>
          <img src={arrowLeft} alt="" className='arrow-left'  onClick={handleBack} />
          <img src='https://flippa.com/blog/wp-content/uploads/2022/02/ecommerce-website-development-guide.png' alt="" className="border-15 img-card-details" />
        </Row>
        <Row>
          <h5 className='color-blue-bold py-4'>Finibus Bonorum et Malorum</h5>
        </Row>
        <Row className='py-3'>
          <p  className='color-blue-bold font-12 pb-4 bb-black-secondary'>
            Written by Joanne Burman
            <small className="text-secondary font-thin font-12 ms-5">Monday May 20</small>
          </p>
        </Row>
        <Row style={{position: 'relative'}}>
          <p className="font-12 py-4">
          In 2021, more than 2.14 billion people – or one quarter of the human population – shopped online. This surge was caused in part by the closing of physical stores during worldwide lockdowns, but it also followed a larger trend of shoppers choosing online retail experiences over physical shopping. And Ecommerce website development plays a big role in how successful your online retail store can be.

          If you haven’t already set up your Ecommerce store, there’s no time like the present. While getting started may be daunting, falling behind in a constantly evolving market is even more so.

          With a well-honed eCommerce site in your pocket, you can watch your brand go global overnight and reach new markets.

          There’s a lot of work that goes into selling online, from cataloging products to designing your landing page to updating product pages and marketing your brand. However, with a range of cutting-edge tools such as ecommerce personalisation and AR at your disposal, you can soon gain a competitive edge.

          While an online store may seem worlds apart from your bricks-and-mortar shop, the principles are the same – you want to create a positive shopping experience for your customers, ensuring they can find what they need and check out easily, inspiring them to come back and buy again.

          Read on to discover the latest tips on building and launching your own eCommerce website, from starting off on the right foot through to technical and aesthetic decisions. 
          </p>
          <img src={arrowUp} alt="" className='arrow-up' onClick={scrollToTop} />
        </Row>
      </Container>
    </>
  );
};

export default BlogDetails;
