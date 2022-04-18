import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {
    //  sign in with google
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    // sign in with github 
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLoginSubbmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);

    }

    if (user || user2 || user3) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error2) {
        errorElement =
            <div>
                <p>Error: {error2.message}</p>
               
            </div>

    }
    else if (error3) {
        errorElement =
            <div>
                <p>Error: {error3.message}</p>
               
            </div>

    }
    else if(error) {
        errorElement =
            <div>
                <p>Error: {error.message}</p>
               
            </div>

    }

    return (
        <div className='login-style'>
            <div className='login-container'>
                <h2 className='text-center p-2'> Login </h2>
                <form onSubmit={handleLoginSubbmit}>
                    <input ref={emailRef} className='input-field' type="email" name="email" id="1" placeholder='Enter Your Email' required />
                    <input ref={passwordRef} className='input-field' type="password" name="password" id="2" placeholder='Enter password' required />
                    <input className='login-btn' type="submit" value="login" />

                </form>

                <h6> Your are not register? <Link to='/register'>  <span> Create an account </span> </Link> </h6>
                <div className='line-container'>
                    <div className='line-befor-div' > </div>
                    <p className='line-content'> or </p>
                    <div className='line-after-div'> </div>
                </div>
                {errorElement}
                <div className='social-btn-container'>
                    <button onClick={() => signInWithGoogle()} className='social-login-btn'> Login With Google </button>
                    <button className='social-login-btn'> Login With Facebook </button>
                    <button onClick={()=> signInWithGithub()} className='social-login-btn'> Login With Github </button>

                </div>


            </div>

        </div>
    );
};

export default Login;