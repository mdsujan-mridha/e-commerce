import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const naviget = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        naviget('/home')
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
        // console.log(name, email, password);
    }
    return (

        <div className='login-style'>
            <div className='login-container'>
                <h2 className='text-center p-2'> Register </h2>
                <form onSubmit={handleRegisterSubmit}>
                    <input ref={nameRef} className='input-field' type="text" name="name" id="1" placeholder='Enter your name' />
                    <input ref={emailRef} className='input-field' type="email" name="email" id="2" placeholder='Enter Your Email' />
                    <input ref={passwordRef} className='input-field' type="password" name="password" id="3" placeholder='Enter password' />
                    <input className='login-btn' type="submit" value="SignIn" />
                </form>
                <h6> Already Have an Accoutn? <Link to='/login'>  <span> Please Login </span> </Link> </h6>
                <div className='line-container'>
                    <div className='line-befor-div' > </div>
                    <p className='line-content'> or </p>
                    <div className='line-after-div'> </div>
                </div>
                <div className='social-btn-container'>
                    <button className='social-login-btn'> Login With Google </button>
                    <button className='social-login-btn'> Login With Facebook </button>
                    <button className='social-login-btn'> Login With Github </button>
                </div>
            </div>
        </div>

    );
};

export default Register;