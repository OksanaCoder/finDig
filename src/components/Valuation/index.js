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
import { Link } from "react-router-dom";
import { signUpAPI } from "@services/api/auth";
import backImg from '@assets/icons/back-arrow-blue.svg'

const Valuation = ({
  isLoadingAuth,
  registerAction,
  pendingAction,
  addNotificationAction,
  next
}) => {
  const registerUser = (values) => {
    //   return signUpAPI(values);
  };
  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12} className="login-wrapper">
          <div>
              <img src={backImg} alt="" />
            <h3>Valuation tool</h3>
            <h6>Valuate your business worth</h6>
            <Formik
              initialValues={{
                name: "",
                link: "",
                traffic: "",
                age: "",
                genre: "",
                inventory: "",
                revenues: "",
                description: "",
                profit: "",
                overallProfit: ""
              }}
            //   validationSchema={SignupSchema}
              onSubmit={(values, actions) => {
                // registerUser(values).catch((error) => {
                //   console.log(JSON.stringify(error));
                //   actions.setErrors({
                //     email: " ",
                //     password: " ",
                //     name: " ",
                //     phone: " ",
                //   });
                //   // if (error?.notification) {
                //   //     addNotificationAction({type: "error", text: error.message});
                //   //     return
                //   // }
                //   // console.log(error)
                // });
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
                    <Row>
                        <Col lg={6} md={12} sm={12} xs={12} className='p-2'>
                  <div>
                    <Input
                      placeholder="Business name"
                      label="Name of the asset"
                      variant="outlined"
                      type="name"
                      name="name"
                      error={errors.name && touched.name}
                      errorText={touched.name && errors.name}
                      onBlur={() => setFieldTouched("name", true, false)}
                      value={values.name}
                      onChange={handleChange}
                      className="mt-5"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Link to site"
                      label="Link"
                      variant="outlined"
                      type="link"
                      name="link"
                      error={errors.link && touched.link}
                      errorText={touched.link && errors.link}
                      onBlur={() => setFieldTouched("link", true, false)}
                      value={values.link}
                      onChange={handleChange}
                      className="my-5"
                    />
                    <Input
                      placeholder="Saas"
                      label="Genre"
                      variant="outlined"
                      type="phone"
                      name="phone"
                      error={errors.genre && touched.genre}
                      errorText={touched.genre && errors.genre}
                      onBlur={() => setFieldTouched("phone", true, false)}
                      value={values.genre}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="120K"
                      label="New profit(p/mo)"
                      variant="outlined"
                      type="profit"
                      name="profit"
                      error={errors.profit && touched.profit}
                      errorText={touched.profit && errors.profit}
                      onBlur={() => setFieldTouched("profit", true, false)}
                      value={values.profit}
                      onChange={handleChange}
                      className="mt-5"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="120K"
                      label="12 months avarage profit"
                      variant="outlined"
                      type="overallProfit"
                      name="overallProfit"
                      error={errors.overallProfit && touched.overallProfit}
                      errorText={touched.overallProfit && errors.overallProfit}
                      onBlur={() => setFieldTouched("overallProfit", true, false)}
                      value={values.overallProfit}
                      onChange={handleChange}
                      className="mt-5"
                    />
                  </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} sm={12} className='p-2'>
                  <div>
                    <Input
                      placeholder="Amount of traffic"
                      label="Traffic"
                      variant="outlined"
                      type="traffic"
                      name="traffic"
                      error={errors.traffic && touched.traffic}
                      errorText={touched.traffic && errors.traffic}
                      onBlur={() => setFieldTouched("traffic", true, false)}
                      value={values.traffic}
                      onChange={handleChange}
                      className="mt-5"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="1-2 yesrs"
                      label="Age of business"
                      variant="outlined"
                      type="age"
                      name="age"
                      error={errors.age && touched.age}
                      errorText={touched.age && errors.age}
                      onBlur={() => setFieldTouched("age", true, false)}
                      value={values.age}
                      onChange={handleChange}
                      className="mt-5"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="We include the following..."
                      label="Inventory"
                      variant="outlined"
                      type="inventory"
                      name="inventory"
                      error={errors.inventory && touched.inventory}
                      errorText={touched.inventory && errors.inventory}
                      onBlur={() => setFieldTouched("inventory", true, false)}
                      value={values.inventory}
                      onChange={handleChange}
                      className="mt-5"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Tell us about your business"
                      label="Description"
                      variant="outlined"
                      type="profit"
                      name="profit"
                      error={errors.description && touched.description}
                      errorText={touched.description && errors.description}
                      onBlur={() => setFieldTouched("description", true, false)}
                      value={values.description}
                      onChange={handleChange}
                      className="mt-5"
                    />
                  </div>
                  </Col>
                  </Row>
                   {/* {!checkboxValue ? (<span style={{ display: 'flex', color: 'red', justifyContent: 'center', fontSize: '14px'}}>Accept terms of use</span>) : null} */}
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className="my-2 btn-primary w-100 py-3"
                    onClick={next}
                    // disabled={isSubmitting || isLoadingAuth}
                  >
                    next step
                  </Button>
                </form>
              )}
            </Formik>
          </div>
      
       </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img src={loginImage} alt="" width="100%" />
        </Col>
      </Row>
    </>
  );
};

export default Valuation;
