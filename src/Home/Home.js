import React, {useState, useEffect} from 'react'
import AuthContextProvider from '../context/authContext';
import Login from '../components/login'
import { TweenMax, Expo } from 'gsap'
import Register from '../components/register'
import Staff from '../components/staff'
import './scss/Home.css'



const Home = () => {
    const date = new Date().getFullYear()
    const [state, setState] = useState(0)

    useEffect(()=> {

        TweenMax.from(".left-view",2, {
            delay:.5,
            x:-20,
            opacity:0,
            ease:Expo.easeInOut
          })

        TweenMax.from(".right-view",2, {
            delay:1,
            x:-20,
            opacity:0,
            ease:Expo.easeInOut
          })
    },[])

    const changeIndex = index => {
        setState(index)
    }


    return (
        <React.Fragment>
            {/* start homecontainer */}
            <div className="home">

            {/* start left view */}
            <div className="left-view">

                <div className="left-view-content">
                <h1 className="left-view-title"> Imagine. Think. Learn.</h1>
                <p>Welcome to Exolve Learning portal</p>
                </div>

                <div className="left-view-footer">
                    <ul>
                        <li>TERMS OF USE</li>
                        <li>Privacy Policy</li>
                        <li>&copy; {date} E-TRANSACT ALL RIGHTS RESERVED</li>
                    </ul>
                </div>

            </div>
            
            {/* end left view */}



            {/* start right view */}
            <div className="right-view">

            {state === 0 ?

            <div className="right-view-login">
            <AuthContextProvider>
            <Login handleIndex={changeIndex} />
            </AuthContextProvider>
            </div>
            : 
            <>{ state === 1 ?
            <div className="right-view-login">
            <AuthContextProvider>
            <Register handleIndex={changeIndex} />
            </AuthContextProvider>
            </div>
            :
            <div className="right-view-login">
            <AuthContextProvider>
            <Staff handleIndex={changeIndex} />
            </AuthContextProvider>
            </div>

            }
            </>

            }

            </div>

            {/* end right view */}

            <div className="cartoon-background"></div>

            </div>

            {/* end home container */}
        </React.Fragment>

    );
}


export default Home;