import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Team from '../Team/Team';
import './Home.css'
 import home1 from '../../Images/h-01.png';
 import home2 from '../../Images/home-2.jpg'
 import home3 from '../../Images/home-3.jpg'

const Home = () => {
    return (
        <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 home-img"
      src={home1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="home-img d-block w-100 home-img"
        src={home2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 home-img"
      src={home3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <Services></Services>
            <Team></Team> 
        </div>
    );
};

export default Home;