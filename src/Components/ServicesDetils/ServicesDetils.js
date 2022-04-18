import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetils = () => {
    const {serviceId} = useParams();
    return (
        <div>
                <h1> Our Services Details {serviceId} </h1>
        </div>
    );
};

export default ServicesDetils;