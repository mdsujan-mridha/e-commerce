import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetils = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    console.log(service);

    useEffect(() => {
        const url = `https://lit-river-18873.herokuapp.com/service/${serviceId}`
        fetch(url)
         .then(res => res.json())
          .then(data =>setService(data))

    }, [])
    return (
        <div className='container mt-5'>
            <h1> Our Services Details {service.name} </h1>
            <div className="protected-link">
                <Link to="/procced"> <button> Procced  </button> </Link>
            </div>

        </div>
    );
};

export default ServicesDetils;