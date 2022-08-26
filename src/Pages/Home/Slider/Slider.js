
import { Carousel } from 'react-bootstrap';
import React from 'react';
import './slider.css'


import slider2 from '../../../images/slider/slider2.jpg'
import slider4 from '../../../images/slider/slider4.jpg'
import slider5 from '../../../images/slider/slider5.jpg'

const Slider = () => {
    return (
      
        <div className='mb-3  '>  

      <Carousel>
     

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider5}
          alt="Second slide"
        />

        <Carousel.Caption className='  mx-auto slider' >
        <h1 className='display-1 mb-4'>Laptop Wirehouse management website</h1>
          <p className=' mb-4'>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-primary'>ManageStock</button>
        </Carousel.Caption>
      </Carousel.Item>

     

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider4}
          alt="Third slide"
        />

       <Carousel.Caption className='  mx-auto slider' >
        <h1 className='display-1 mb-4'>Laptop Wirehouse management website</h1>
          <p className=' mb-4'>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-primary'>ManageStock</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Third slide"
        />

     <Carousel.Caption className='  mx-auto slider' >
        <h1 className='display-1 mb-4'>Laptop Wirehouse management website</h1>
          <p className=' mb-4'>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.
          Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-primary'>ManageStock</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    </div>   






       
    );
};

export default Slider;