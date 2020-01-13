import React , { useContext, useEffect } from 'react';
import logo from "./images/exolve.png"
import { TweenMax, Expo } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faLock } from '@fortawesome/free-solid-svg-icons'
import { authContext } from '../context/authContext';
import './auth.css'
import { Formik } from 'formik'
import { loginValidationSchema } from '../validationSchema';
library.add(fas, faLock)
// import { Link } from 'react-router-dom';

const Staff = ({handleIndex}) => {
  const { loginUser } = useContext(authContext)

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
      initialValues={{ email: '', loginPassword: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { resetForm }) => {
        loginUser(values)
        resetForm()
      }}
    >
    {formik => (
      <div className="cont">
    <img src={logo} className="logo" alt="logo" />
    <div className="button">
            <button className="button-left" onClick={()=>handleIndex(0)}>Admin Login</button>   
            {/* <button className="button-right">Staff Login</button>  */}
    </div>
        <form onSubmit={formik.handleSubmit}>
        <div className="field-container">
        <p className="search at">@</p>
            <input placeholder="Enter your email" type="text" id="email" {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email ? (
                <div className="err-msg">{formik.errors.email}</div>
              ): null}
          </div>

          <div className="field-container">
          <FontAwesomeIcon icon={faLock} className="search" />
            <input placeholder="Password" type="password" id="loginPassword" {...formik.getFieldProps('loginPassword')}/>
            {formik.touched.loginPassword && formik.errors.loginPassword ? (
                <div className="err-msg">{formik.errors.loginPassword}</div>
              ): null}
          </div>

          <div className="submit-btn">
            <input className="animated" type="submit" value="Login"/>
          </div>

          <a href='register' className="switcher" onClick={()=>handleIndex(1)}>Forgot password?</a>
        </form>
      </div>
    )}

    </Formik>
  );
}

export default Staff;
