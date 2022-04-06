import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carusol.css'
import b1 from '../../Images/Banner/banner1.jpg'
import b2 from '../../Images/Banner/banner2.jpg'
import b3 from '../../Images/Banner/banner3.jpg'

const Carusol = () => {
    return (
        <>
            <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={b1}
            alt="First slide"
            />
            <Carousel.Caption>
         
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={b2}
            alt="Second slide"
            />

            <Carousel.Caption>
        
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={b3}
            alt="Third slide"
            />

            <Carousel.Caption>
           
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Carusol;