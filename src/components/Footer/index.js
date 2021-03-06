import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import facebook from "@assets/icons/facebook.svg";
import insta from "@assets/icons/insta.svg";
import twitter from "@assets/icons/twitter.svg";
import google from "@assets/icons/google-play.svg";
import playMarket from "@assets/icons/PlayStore.svg";
import "@styles/components/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="py-5">
        <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div>
              <svg
                width="130"
                height="47"
                viewBox="0 0 130 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.384 3.936V7.984H5.052V17.62H16.052V21.492H5.052V35H0.0360003V3.936H18.384ZM22.1484 3.716C22.1484 2.86533 22.4417 2.16133 23.0284 1.604C23.6151 1.04666 24.3924 0.767998 25.3604 0.767998C26.3284 0.767998 27.1057 1.04666 27.6924 1.604C28.3084 2.16133 28.6164 2.86533 28.6164 3.716C28.6164 4.56667 28.3084 5.256 27.6924 5.784C27.1057 6.312 26.3284 6.576 25.3604 6.576C24.3924 6.576 23.6151 6.312 23.0284 5.784C22.4417 5.256 22.1484 4.56667 22.1484 3.716ZM27.8684 10.756V35H22.8524V10.756H27.8684ZM47.4903 10.36C50.3063 10.36 52.565 11.2693 54.2663 13.088C55.9677 14.9067 56.8183 17.5027 56.8183 20.876V35H51.8023V21.404C51.8023 19.2333 51.245 17.5613 50.1303 16.388C49.0157 15.1853 47.4903 14.584 45.5543 14.584C43.5597 14.584 41.961 15.2293 40.7583 16.52C39.5557 17.7813 38.9543 19.644 38.9543 22.108V35H33.9383V10.756H38.9543V16.08C39.5997 14.2613 40.685 12.8533 42.2103 11.856C43.7357 10.8587 45.4957 10.36 47.4903 10.36ZM89.3484 19.424C89.3484 22.5627 88.7031 25.3053 87.4124 27.652C86.1511 29.9693 84.2884 31.7733 81.8244 33.064C79.3898 34.3547 76.4711 35 73.0684 35H62.6844V3.936H73.0684C76.4711 3.936 79.3898 4.58133 81.8244 5.872C84.2884 7.13333 86.1511 8.92267 87.4124 11.24C88.7031 13.5573 89.3484 16.2853 89.3484 19.424ZM72.6724 30.468C76.3978 30.468 79.2578 29.5 81.2524 27.564C83.2471 25.628 84.2444 22.9147 84.2444 19.424C84.2444 15.9333 83.2471 13.22 81.2524 11.284C79.2578 9.348 76.3978 8.38 72.6724 8.38H67.7004V30.468H72.6724ZM93.6914 3.716C93.6914 2.86533 93.9847 2.16133 94.5714 1.604C95.158 1.04666 95.9354 0.767998 96.9034 0.767998C97.8714 0.767998 98.6487 1.04666 99.2354 1.604C99.8514 2.16133 100.159 2.86533 100.159 3.716C100.159 4.56667 99.8514 5.256 99.2354 5.784C98.6487 6.312 97.8714 6.576 96.9034 6.576C95.9354 6.576 95.158 6.312 94.5714 5.784C93.9847 5.256 93.6914 4.56667 93.6914 3.716ZM99.4114 10.756V35H94.3954V10.756H99.4114ZM115.205 10.448C117.405 10.448 119.283 10.9907 120.837 12.076C122.392 13.1613 123.492 14.5987 124.137 16.388V10.756H129.153V35.264C129.153 37.5227 128.684 39.5173 127.745 41.248C126.836 43.008 125.516 44.3867 123.785 45.384C122.055 46.3813 120.001 46.88 117.625 46.88C114.223 46.88 111.465 46.0733 109.353 44.46C107.271 42.8467 105.965 40.6613 105.437 37.904H110.409C110.82 39.3413 111.612 40.456 112.785 41.248C113.959 42.0693 115.455 42.48 117.273 42.48C119.268 42.48 120.911 41.864 122.201 40.632C123.492 39.4 124.137 37.6107 124.137 35.264V29.368C123.492 31.1573 122.392 32.5947 120.837 33.68C119.283 34.7653 117.405 35.308 115.205 35.308C113.093 35.308 111.201 34.8093 109.529 33.812C107.887 32.8147 106.596 31.3773 105.657 29.5C104.719 27.6227 104.249 25.408 104.249 22.856C104.249 20.3333 104.719 18.1333 105.657 16.256C106.596 14.3787 107.887 12.9413 109.529 11.944C111.201 10.9467 113.093 10.448 115.205 10.448ZM116.745 14.848C114.516 14.848 112.727 15.5667 111.377 17.004C110.057 18.412 109.397 20.3627 109.397 22.856C109.397 25.3493 110.057 27.3147 111.377 28.752C112.727 30.16 114.516 30.864 116.745 30.864C118.153 30.864 119.415 30.5413 120.529 29.896C121.644 29.2213 122.524 28.2827 123.169 27.08C123.815 25.8773 124.137 24.4693 124.137 22.856C124.137 21.272 123.815 19.8787 123.169 18.676C122.524 17.444 121.644 16.5053 120.529 15.86C119.415 15.1853 118.153 14.848 116.745 14.848Z"
                  fill="#181E4B"
                />
              </svg>
              <p className='text-footer my-3'>
                Book your trip in minute, get full<br></br> Control for much
                longer.
              </p>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <h6 className="my-4 font-bold">Company</h6>
                <ul className="list-unstyled text-footer ">
                  <li className="my-3">About</li>
                  <li className="my-3">Careers</li>
                  <li className="my-3">Mobile</li>
                </ul>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <h6 className="my-4 font-bold">Contact</h6>
                <ul className="list-unstyled text-footer ">
                  <li className="my-3">Help/FAQ</li>
                  <li className="my-3">Press</li>
                  <li className="my-3">Affilates</li>
                </ul>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <h6 className="my-4 font-bold">More</h6>
                <ul className="list-unstyled text-footer ">
                  <li className="my-3">Airlinefees</li>
                  <li className="my-3">Airline</li>
                  <li className="my-3">Low fare tips</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Row className="d-flex justify-content-center align-items-center">
              <Col lg={4} md={4} sm={4} xs={4} className='text-center'>
                <img src={facebook} alt="" />
              </Col>
              <Col lg={4} md={4} sm={4} xs={4} className='text-center'>
                <img src={insta} alt="" className='insta-back'/>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <img src={twitter} alt="" />
              </Col>
            </Row>
            <Row>
              <p className='text-footer'>Discover our app</p>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <img src={google} alt="" width='100%'/>
              </Col>
              <Col lg={6} md={6} sm={6} xs={6}>
                <img src={playMarket} alt="" width='100%'/>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ paddingTop: "50px" }}>
          <p className="text-center text-footer small-font">All rights reserved@jadoo.co</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
