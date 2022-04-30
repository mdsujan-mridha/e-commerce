import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'





const Services = () => {

  const [services, setServices] = useState([]);

  useEffect( ()=>{

  fetch('https://lit-river-18873.herokuapp.com/service')
   .then(res=>res.json())
   .then(data=>setServices(data))

  } ,[])


    return (
          <div id="services">
            <h2 className='text-center mt-5 text-primary mb-5'> Our Services </h2>
          
        <div  className='service-container container'>
                
                 {
                     services.map(service=> <Service
                      key={service._id}
                      service={service}
                     
                     >

                     </Service>)
                 }
        </div>
        </div>
    );
};

export default Services;