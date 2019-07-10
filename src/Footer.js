import React from 'react';
import { Nav } from 'react-bootstrap'
import './Footer.css'

function Footer() {
    return (
        <div class='footer'>
            <div class='links'>
                <ul class='navi'>
                    <Nav.Link href="/" class='link'>Home</Nav.Link> 
                    <Nav.Link href="/about" class='link'>About</Nav.Link>
                    <Nav.Link href="/usa" class='link'>Europe Gallery</Nav.Link> 
                    <Nav.Link href="/eu" class='link'>America Gallery</Nav.Link>
                </ul>
            </div>
        </div>
  )};

export default Footer;