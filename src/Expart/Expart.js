import React from 'react';
import './Expart.css';

const Expart = ({expart}) => {
    // console.log(expart);
    const {name, description, img, education} = expart;
    return (
        <div>
             <div className='exaprt-container'>
            <img className='expart-img' src={img} alt="" />
            <h3 className='expart-name text-center text-info'> {name} </h3>
            <p className='expart-discription '> {description} </p>
            <h4 className='expart-education'> {education} </h4>

        </div>
        </div>
    );
};

export default Expart;