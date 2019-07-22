import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
        <div className='links'>
            <Link to={'/Test'} className='navi'>Home</Link>
            <Link to={'/about'} className='navi'>About</Link>
            <Link to={'/eu'} className='navi'>Europe</Link>
            <Link to={'/usa'} className='navi'>America</Link>
        </div>
        <div className='links'>Sign up to keep with the latest posts</div>
        <form className='links'>
            <input placeholder='Email' />
        </form>
        <div className='links'>Or follow me on my social medias</div>
        <a className='links' href="https://www.instagram.com/denisefphotography/">Instagram</a>
        </div>
  )};

export default Footer;