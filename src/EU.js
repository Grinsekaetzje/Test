import React from 'react';
import './EU.css'
import img1 from './photos/img1.jpg';
import { Card, Button } from 'react-bootstrap'

function EU() {
    return (
        <div class="Gallery">
            
        <div>
            <h1>Welcome to the Europe Gallery</h1>
            <p>What you see here is my home and my people. I come from a German people in a small town know by it's secrecy as HuddleDorf. The town has present the ease of imagery through it's mesmorizing scenes and jaw dropping country sunset colouring. Please enjoy.</p>
        </div>
        <div class="GalleryBox">
            <div class="col-4">
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
            </div>
            <div class="col-8">
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
            </div>
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

export default EU;