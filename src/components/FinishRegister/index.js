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

const FinishRegister = () => {
  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="login-wrapper">
          <Alert variant="secondary">
            <h4>Congratulations!</h4>
            <br></br>
            You have just established a page for your company
          </Alert>
          <h2 className="blue-color">Apple Inc.</h2>
          <div className="left-border-blue">
            <p>General Information</p>
            <Row>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p>Link</p>
                <small>wwww.apple.com</small>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p>Age of business</p>
                <small>1-2 years</small>
              </Col>{" "}
              <Col lg={4} md={4} sm={4} xs={4}>
                <p>Genre</p>
                <small>Saas</small>
              </Col>
            </Row>
            <p>Description</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
             <p>Inventory (how many assets are included in the deal)</p>   
             <p>Iphone and Imacs</p>
            </p>
          </div>
          <div className='left-border-blue-dark'>
              <p>Financials</p>
              <Row>
              <Col lg={3} md={3} sm={12} xs={12}>
                <p>Revenues (p/mo)</p>
                <small>$120K</small>
              </Col>{" "}
              <Col lg={3} md={3} sm={12} xs={12}>
                <p>Net profit (p/mo)</p>
                <small>$120K</small>
              </Col>{" "}
              <Col lg={3} md={3} sm={12} xs={12}>
                <p>12 months average profit</p>
                <small>$120K</small>
              </Col>{" "}
              <Col lg={3} md={3} sm={12} xs={12}>
                <p>Traffic</p>
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
              <form onSubmit={handleSubmit}>
          <FormControlLabel
                    name="acceptTerms"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        acceptTerms: e.target.checked,
                      });
                    }}
                    className="text-left"
                    control={<Checkbox className="me-2" />}
                    label="I agree with terms of use"
                  />
                  <br></br>
                    <FormControlLabel
                    name="acceptTerms"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        acceptTerms: e.target.checked,
                      });
                    }}
                    className="text-left"
                    control={<Checkbox className="me-2" />}
                    label="I agree with Privacy policy of the site"
                  />
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
