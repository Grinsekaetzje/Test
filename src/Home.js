import React from 'react';
import Banner from './photos/Home.jpg'
import { Carousel, Jumbotron, Button } from 'react-bootstrap'

function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Banner}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Banner}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Jumbotron>
                <h1>Denise Photograph</h1>
                <p>
                    An envision upon all things we find beautiful in this world. The eye is influxed with so many images, that is why us artist's must capture the ones that truly show beauty. 
                </p>
                <p>
                    <Button variant="primary" href='/about'>Learn more</Button>
                </p>
            </Jumbotron>
        </div>
  )};

export default Home;