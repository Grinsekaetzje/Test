import React from 'react';
import { Link } from "react-router-dom";
import img from './components/photos/Picture1.png'


function Navigation() {
    return (
        <nav className="navbar navbar-expand-sm header">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav top-nav">
                    <li><Link to={'/Test'} className="nav-link">HOME</Link></li>
                    <li><Link to={'/about'} className="nav-link">ABOUT</Link></li>
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" className='nav-link'>AMERICA</a>
                            <ul className="dropdown-menu" role="button">
                                <li><Link to={'/usa'} className="dropdown nav-link">Austin</Link></li>
                                <li><Link to={'/usa'} className="dropdown nav-link">Los Angeles</Link></li>
                                <li><Link to={'/usa'} className="dropdown nav-link">Miami</Link></li>
                                <li><Link to={'/usa'} className="dropdown nav-link">San Francisco</Link></li>
                            </ul>
                    </li>
                    <li><Link to={'/eu'} className="nav-link">EUROPE</Link></li>
                    <li><Link to={'/blog'} className="nav-link">TRAVELBLOG</Link></li>
                </ul>

                <a className='insta' href="https://www.instagram.com/denisefphotography/"><img src={img} alt=""/></a>
            </div>
        </nav>
    )};


export default Navigation;


