import React , { useContext, useEffect } from 'react';
import { authContext } from '../context/authContext';
import logo from "./images/exolve.png"
import './auth.css';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import {registerValidationSchema } from '../validationSchema';
library.add(fas, faLock, faUser)

const Register = ({handleIndex}) => {
  const { createUser } = useContext(authContext)


  return (
    <Formik 
      initialValues={{ userName: '', password: '', confirmPassword: '', email: '' }}
      validationSchema={registerValidationSchema}
      onSubmit={(values, { resetForm }) => {
          createUser(values);
          resetForm()
      }}
    >
    {formik => (
      <div className="cont">
        <img src={logo} className="logo register" alt="logo" />
        <form onSubmit={formik.handleSubmit}>
          <div className="field-container">
          <FontAwesomeIcon icon={faUser} className="search" />
            <input placeholder="Enter your username" type="text" id="userName" {...formik.getFieldProps('userName')} />
            {formik.touched.userName && formik.errors.userName ? (
                <div className="err-msg">{formik.errors.userName}</div>
              ): null}
          </div>
          
          <div className="field-container">
          <p className="search at">@</p>
            <input placeholder="Enter your email" type="text" id="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
                <div className="err-msg">{formik.errors.email}</div>
              ): null}
          </div>

          <div className="field-container">
          <FontAwesomeIcon icon={faLock} className="search" />
            <input placeholder="Password" type="password" id="password" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
                <div className="err-msg">{formik.errors.password}</div>
              ): null}
          </div>

          <div className="field-container">
          <FontAwesomeIcon icon={faLock} className="search" />
            <input placeholder="Confirm password" type="password" id="confirmPassword" {...formik.getFieldProps('confirmPassword')} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="err-msg">{formik.errors.confirmPassword}</div>
              ): null}
          </div>
          <div className="submit-btn">
            <input className="animated" type="submit" value="Register"/>
          </div>

          <a href='#' className="switcher" onClick={()=>handleIndex(0)}>Already have an account</a>
        </form>
      </div>
    )}

    </Formik>
  );
}

export default Register;
