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
          <Alert variant="secondary"><h4>Congratulations!</h4><br></br>
          You have just established a page for your company</Alert>
          <h2 className="blue-color">Apple Inc.</h2>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img src={loginImage} alt="" width="100%" />
        </Col>
      </Row>
    </>
  );
};

export default FinishRegister;
