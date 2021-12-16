import React from 'react';
import Input from '@components/Form/Input';
import Formik from '@helpers/Formik';
import { Col, Row } from 'react-bootstrap'
import { LoginSchema } from '@helpers/Formik/validation';
import loginImage from '@assets/images/login.png'
import { Button } from '@material-ui/core';
import { loginAPI } from '@services/api/auth';
import '@styles/components/Login.css'
import { Link } from 'react-router-dom'


const LoginPage = ({
  isLoadingAuth,
  loginAction,
  pendingAction,
  addNotificationAction,
}) => {
  const handleSubmit1 = () => {
    return loginAPI();
  };
  return (
    <Row>
      <Col lg={6} md={6} sm={12} xs={12} className='center-vertically login-wrapper'>
    <div>
      <div className='text-center'>
      <h1 className='h1'>Login</h1>
      <h6 className='subtitle letter-space-3'>Sign in to your existing account</h6>
      </div>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            handleSubmit1(values).catch(error => {
              console.log(JSON.stringify(error));
              actions.setErrors({
                email: ' ',
                password: ' ',
              });
        
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <form>
              <Input
                placeholder="email"
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                error={errors.email && touched.email}
                errorText={errors.email && touched.email && errors.email}
                value={values.email}
                onChange={handleChange}
                // shrink="false"
                className='my-5'
              />
              <Input
                placeholder="**********"
                label="Пароль"
                type="password"
                name="password"
                variant="outlined"
                error={errors.password && touched.password}
                errorText={
                  errors.password && touched.password && errors.password
                }
                value={values.password}
                onChange={handleChange}
                className='my-1'
              />
              
              <div>
                {/* <Link to="/forgot">Forgot password ?</Link> */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit1}
                  className="my-4 btn-primary w-100 py-3"
                >
                  Login
                </Button>
              </div>
              <Row className='d-flex align-items-center justify-content-between'>
                <Col lg={6} md={6} sm={6} xs={6} >
                <a href="">Forgot your password?</a>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} style={{textAlign: 'right'}}>
               <Link to='register'><a href="" >I don't have an account</a></Link>
                </Col>
              </Row>
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

export default LoginPage;
