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
import { Col, Row } from 'react-bootstrap'
import loginImage from '@assets/images/login.png'
import '@styles/components/Login.css'
import { Link } from 'react-router-dom'
import { signUpAPI } from "@services/api/auth";
// import PrivacyPopup from "@containers/PrivacyPopup/PrivacyPopup";

const RegisterPage = ({
  isLoadingAuth,
  registerAction,
  pendingAction,
  addNotificationAction,
}) => {
  const registerUser = (values) => {
    return signUpAPI(values);
  };

  return (
    <Row>
    <Col lg={6} md={6} sm={12} xs={12} className='center-vertically login-wrapper'>
  <div>
    <div className='text-center'>
    <h1 className='h1'>Register</h1>
    <h6 className='subtitle letter-space-3'>Personal data</h6>
    </div>
        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              phone: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              registerUser(values).catch((error) => {
                console.log(JSON.stringify(error));
                actions.setErrors({
                  email: " ",
                  password: " ",
                  name: " ",
                  phone: " ",
                });
                // if (error?.notification) {
                //     addNotificationAction({type: "error", text: error.message});
                //     return
                // }
                // console.log(error)
              });
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
                <div>
                
                  <Input
                    placeholder="User"
                    label="Name"
                    variant="outlined"
                    type="name"
                    name="name"
                    error={errors.name && touched.name}
                    errorText={touched.name && errors.name}
                    onBlur={() => setFieldTouched("name", true, false)}
                    value={values.name}
                    onChange={handleChange}
                    className='mt-5'
                  />
                </div>
                <div>
                  <Input
                    placeholder="example.mail@gmail.com"
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    error={errors.email && touched.email}
                    errorText={touched.email && errors.email}
                    onBlur={() => setFieldTouched("email", true, false)}
                    value={values.email}
                    onChange={handleChange}
                    className='my-5'
                  />
                  <Input
                    placeholder="+380934343444"
                    label="Phone number"
                    variant="outlined"
                    type="phone"
                    name="phone"
                    error={errors.phone && touched.phone}
                    errorText={touched.phone && errors.phone}
                    onBlur={() => setFieldTouched("phone", true, false)}
                    value={values.phone}
                    onChange={handleChange}
                    
                  />
                </div>
                <div>
                  <Input
                    placeholder="123456789"
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    error={errors.password && touched.password}
                    errorText={touched.password && errors.password}
                    onBlur={() => setFieldTouched("password", true, false)}
                    value={values.password}
                    onChange={handleChange}
                    className='mt-5'
                  />
                 
                </div>
                <div
                  className="form-group form-check"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                </div>
                {/* {!checkboxValue ? (<span style={{ display: 'flex', color: 'red', justifyContent: 'center', fontSize: '14px'}}>Accept terms of use</span>) : null} */}
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className="my-2 btn-primary w-100 py-3"
                  // disabled={isSubmitting || isLoadingAuth}
                >
                  REGISTER
                </Button>
              </form>
            )}
          </Formik>
        </div>
        </div>
    </Col>
    <Col lg={6} md={6} sm={12} xs={12}>
      <img src={loginImage} alt="" width="100%"/>
    </Col>

    </Row>
  );
};

export default RegisterPage;