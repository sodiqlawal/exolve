import React , { useContext, useEffect } from 'react';
import { authContext } from '../context/authContext';
import { TweenMax, Expo } from 'gsap'
import './auth.css';
import { Formik } from 'formik';
import {registerValidationSchema } from '../validationSchema';
import { BrowserRouter as Link } from 'react-router-dom'

const Register = ({handleIndex}) => {
  const { createUser } = useContext(authContext)

  useEffect(()=> {

    TweenMax.from(".cont",2, {
        delay:.5,
        x:-20,
        opacity:0,
        ease:Expo.easeInOut
      })

},[])

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
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="field-container">
            <input placeholder="Username" type="text" id="userName" {...formik.getFieldProps('userName')} />
            {formik.touched.userName && formik.errors.userName ? (
                <div className="err-msg">{formik.errors.userName}</div>
              ): null}
          </div>
          
          <div className="field-container">
            <input placeholder="Email" type="text" id="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
                <div className="err-msg">{formik.errors.email}</div>
              ): null}
          </div>

          <div className="field-container">
            <input placeholder="Password" type="password" id="password" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password ? (
                <div className="err-msg">{formik.errors.password}</div>
              ): null}
          </div>

          <div className="field-container">
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
