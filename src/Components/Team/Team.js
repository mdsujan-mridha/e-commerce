import React, { useEffect, useState } from 'react';
import Expart from '../../Expart/Expart';
import './Team.css'

const Team = () => {
  const [exparts, setExparts] = useState([]);
  useEffect( ()=>{
      fetch('expaer.json')
       .then(res=> res.json())
        .then(data=>setExparts(data))

  } ,[])

    return (
        <div id='team'>
   <h1 className='text-center mt-5 text-primary mb-5'> Our Engineers  </h1>
   <div className='team-cintainer container'>
           
         
               {
                   exparts.map(expart => <Expart
                      key={expart.id}
                      expart={expart}
                   ></Expart>)
               }
          
       </div>

        </div>
       
    );
};

export default Team;