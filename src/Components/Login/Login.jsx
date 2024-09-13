import React, {  useEffect, useRef, useState } from 'react';
import './Login.css'
import findInputValue from '../LoginHook/LoginHook';
import { useOutletContext } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef(null);
    const FullName = useRef(null);
    const [erroe,setError] = useState('') ;
    const handelSubmitFrom = useOutletContext() ;
    useEffect(()=>{
         emailRef.current.focus() ;
         FullName.current.focus();
    },[])

 const Login = findInputValue('ss@gmail.com') ;
 const passWord = findInputValue('')
const handelSub = e =>{
  e.preventDefault() ;
  console.log('login',Login.value) ;
  console.log('login', passWord.value) ;
  if(passWord.value.length <5){
    setError('Strong Password')
  }
  else{
     setError('')
  }
}

    const [isLoginActive, setIsLoginActive] = useState(true);

    const handleLoginClick = () => {
      setIsLoginActive(true);
      document.querySelector('.body').style.background = '#ff4931';
    };
  
    const handleRegisterClick = () => {
      setIsLoginActive(false);
      document.querySelector('.body').style.background = '#e0b722';
    };  
    return (
        <div className="body" style={{ backgroundColor: isLoginActive ? '#ff4931' : '#e0b722' }}>
        <div className="veen">
          <div className="login-btn splits">
            <p>Already a user?</p>
            <button
              className={isLoginActive ? 'active' : ''}
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
          <div className="rgstr-btn splits">
            <p>Dont have an account?</p>
            <button
              className={!isLoginActive ? 'active' : ''}
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
          <div className={`wrapper ${isLoginActive ? '' : 'move'}`}>
            <form  id="login" tabIndex="500" style={{ visibility: isLoginActive ? 'visible' : 'hidden' }}>
              <h3>Login</h3>
              <div className="mail">
                <input type="email" {...Login} name="email" ref={emailRef}/>
                <label>Mail or Username</label>
              </div>
              <div className="passwd">
                <input {... passWord} type="password" name="password" />
                {
                  erroe && <p>{erroe}</p>
                }
                <label>Password</label>
              </div>
              <div className="submit">
                <button type="submit" className="dark">Login</button>
              </div>
            </form>
                
            <form id="register" onSubmit={handelSubmitFrom}  tabIndex="502" style={{ visibility: !isLoginActive ? 'visible' : 'hidden' }}>
              <h3>Register</h3>
              <div className="name">
                <input type="text" name="fullName" ref={FullName} />
                <label>Full Name</label>
              </div>
              <div className="mail">
                <input type="email" name="email" />
                <label>Mail</label>
              </div>
              <div className="uid">
                <input type="text" name="username" />
                <label>Username</label>
              </div>
              <div className="passwd">
                <input type="password" name="password" />
                <label>Password</label>
              </div>
              <div className="submit">
                <button type="submit" className="dark">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;