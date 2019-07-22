import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Button } from 'react-bootstrap'
import Banner from './photos/Home2.jpeg'

function Home() {
    return (
        <div className='contain'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Banner}
                    alt="First slide" height={560}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1 className='title'>Denise F. Photography</h1>

            <div className='home-box'>
                <p id='home-text'>
                    An envision upon all things we find beautiful in this world. The eye is influxed with so many images, that is why us artist's must capture the ones that truly show beauty. 
                </p>
                <p>
                    <Button variant='flat'><Link to='/about' style={{ all: 'inherit' }}>Learn more</Link></Button>
                </p>
            </div>
        </div>
  )};

export default Home;