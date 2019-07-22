import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import './App.scss';
import Navigation from './Navigation';
import Home from './components/Home'
import About from './components/About'
import USA from './components/USA'
import EU from './components/EU'
import Footer from './Footer'

function App() {
    return (
        <Router>
            <div id="top">
                <Navigation />
            </div>

            <div id='middle'>
                <Switch>
                    <Route exact path='/Test' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/eu' component={EU} />
                    <Route path='/usa' component={USA} />
                </Switch>
            </div>
            
            <div id='bottom'>
                <Footer />
            </div>
        </Router>
    )};


export default App;


