import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({service}) => {
    // console.log(service);
    const {name,Price, description, img,id} = service;
    const navigate = useNavigate()
    const serviceDeytails = id =>{
            navigate(`/service/${id}`);
    }

    return (
       <div  className='container'>
           <div className='card-container'>
               <img className='service-img' src={img} alt="" />
                <h2 className='service-title'> {name} </h2>
                 <h4 className='service-price'> {Price} </h4>
                 <p className='service-description'> {description} </p>
                 <Button onClick={()=>serviceDeytails(id)} className='service-btn' variant="primary"> See More </Button>

           </div>

       </div>
            
    


        
    );
};

export default Service;