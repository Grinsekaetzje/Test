import React from 'react';
import './USA.css'
import img1 from './photos/img1.jpg';
import { Card, Button } from 'react-bootstrap'

function USA() {
    return (
        <div class="Gallery">
            
        <div>
            <h1>Welcome to the USA Gallery</h1>
            <p>This library in particular has a special spot in my heart, as it was in America I commenced my venture into photography. With so many images, and colours to play with, how could I deny Miami it's right to shine. Yes my aventure began in Miami where for the first time I picked up a camera as part of my studies at university. Who knew that someday I would explode actracting so much attention, especially in recognition for what I love to do.</p>
        </div>
        <div class="GalleryBox">
            <Card style={{ width: '20em' }} >
                <Card.Img variant="top" src={img1}  />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./photos/img2.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./photos/img1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        </div>
  )};

export default USA;