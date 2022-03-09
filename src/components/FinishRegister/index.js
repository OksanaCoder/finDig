/* eslint-disable react/jsx-no-target-blank */
// import React, {useState} from "react";
import React from "react";
// import {Link, useHistory} from "react-router-dom";
import { Button } from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Input from "@components/Form/Input";
import SignupSchema from "@helpers/Formik/validation";
import Formik from "@helpers/Formik";
import { Col, Row } from "react-bootstrap";
import loginImage from "@assets/images/login.png";
import "@styles/components/Login.css";
import { Alert } from "react-bootstrap";
import done from '@assets/icons/done-icon.svg'
import {companies} from '../Companies/companies'

const FinishRegister = () => {
  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="login-wrapper">
          <Alert variant="secondary" className="d-flex align-items-center justify-content-between">
              <div>
            <h4 >Congratulations!</h4>
            {/* <br></br> */}
            You have just established a page for your company
            </div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1531 0.49422C30.9226 0.49422 39.6531 9.22467 39.6531 19.9942C39.6531 30.7636 30.9226 39.4941 20.1531 39.4941C9.38361 39.4941 0.653157 30.7636 0.653157 19.9942C0.622513 9.2552 9.30323 0.524864 20.0421 0.49422C20.0791 0.494114 20.1161 0.494114 20.1531 0.49422Z" fill="#3BB54A"/>
<path d="M30.9559 14.6198L17.1065 28.4692L9.35083 20.769L12.5085 17.6667L17.1065 22.2094L27.7983 11.5176L30.9559 14.6198Z" fill="white"/>
</svg>

          </Alert>
          <h2 className="blue-color p-4">{companies[0].title}</h2>
                <div className="left-border-blue">
            <p>General Information</p>
            <Row className='mb-3'>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className='grey-light-thin m-0'>Link</p>
                <small>wwww.zayrax.com</small>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className='grey-light-thin m-0'>Age of business</p>
                <small>1-2 years</small>
              </Col>{" "}
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className='grey-light-thin m-0'>Genre</p>
                <small>Saas</small>
              </Col>
            </Row>
            <Row >
            <p className='grey-light-thin m-0 mb-2'>Description</p>
            <p>
                {companies[0].text}
              </p>
              </Row>
              <p className='grey-light-thin m-0 mb-2'>Inventory (how many assets are included in the deal)</p>
              <p>Iphone and Imacs</p>
 
          </div>
          <div className="left-border-blue-dark">
            <p>Financials</p>
            <Row>
              <Col lg={3} md={3} sm={12} xs={12}>
                <p className='grey-light-thin'>Revenues (p/mo)</p>
                <small>$120K</small>
              </Col>{" "}
              <Col lg={3} md={3} sm={12} xs={12}>
                <p className='grey-light-thin'>Net profit (p/mo)</p>
                <small>$120K</small>
              </Col>{" "}
              <Col lg={3} md={3} sm={12} xs={12}>
                <p className='grey-light-thin'>12 months average profit</p>
                <small>$120K</small>
              </Col>{" "}
              <Col lg={3} md={3} sm={12} xs={12}>
                <p className='grey-light-thin'>Traffic</p>
                <small>500K+ visitors a month</small>
              </Col>{" "}
            </Row>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              //   registerUser(values).catch((error) => {
              //     console.log(JSON.stringify(error));
              //     actions.setErrors({
              //       email: " ",
              //       password: " ",
              //       name: " ",
              //       phone: " ",
              //     });
              //     // if (error?.notification) {
              //     //     addNotificationAction({type: "error", text: error.message});
              //     //     return
              //     // }
              //     // console.log(error)
              //   });
            }}
          >
            {({
              setFieldTouched,
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
              setValues,
            }) => (
              <form onSubmit={handleSubmit} className='m-3'>
                <FormControlLabel
                  name="acceptTerms"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      acceptTerms: e.target.checked,
                    });
                  }}
                  className="text-left grey-light-thin"
                  control={<Checkbox className="me-2 blue-checkbox" />}
                  label="I agree with "
                />
               <small className='blue-light-thin'>terms of use</small>
                <br></br>
                <FormControlLabel
                  name="acceptTerms"
                  onChange={(e) => {
                    setValues({
                      ...values,
                      acceptTerms: e.target.checked,
                    });
                  }}
                  className="grey-light-thin"
                  control={<Checkbox className="me-2 blue-checkbox" />}
                  label="I agree with"
                />
                   <small className='blue-light-thin'>Privacy policy of the site</small>
              </form>
            )}
          </Formik>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img src={loginImage} alt="" width="100%" />
        </Col>
      </Row>
    </>
  );
};

export default FinishRegister;
