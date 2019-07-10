import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'
import About from './About'
import USA from './USA'
import EU from './EU'
import Footer from './Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './Navigation';

ReactDOM.render(
        <Router>
            <Navigation />
    
            <Route path="/" exact component={Home} />
            <Route path='/about' exact component={About}/>
            <Route path='/usa' exact component={USA}/>
            <Route path='/eu' exact component={EU}/>

            <Footer />
        </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
