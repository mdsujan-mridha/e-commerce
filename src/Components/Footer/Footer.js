import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer'>

            <div className=' container'>
                <div className='row mb-5'>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4> Fortune PC Repir </h4>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, deleniti. </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">

                        <h4> Follow us with </h4>
                        <div className='footer-link' >
                            <Link to='/'> Home </Link>
                            <Link to='/'> Services </Link>
                            <Link to='/'> Our Engineers </Link>
                            <Link to='/'> About </Link>
                            <Link to='/'> Contact </Link>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h4> Address </h4>
                        <li> Mongol groho </li>
                    </div>
                </div>
                <h6 className='text-center'> Copyright @ {year} </h6>

            </div>



        </div>

    );
};

export default Footer;