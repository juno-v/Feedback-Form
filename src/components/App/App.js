import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Feeling from '../WebPages/Feeling/Feeling';
import Understanding from '../WebPages/Understanding/Understanding';
import Support from '../WebPages/Support/Support';
import Comments from '../WebPages/Comments/Comments';
import Header from '../Header/Header';
import Home from '../Home/Home'; 
import Submit from '../WebPages/Submit/Submit';
import Review from '../WebPages/Review/Review'; 
import ThankYou from '../WebPages/ThankYou/ThankYou';
import Admin from '../WebPages/Admin/Admin'; 

class App extends Component {

  // get all feedback, test to see if code can connect with the database and retrieve a response. 
  componentDidMount () {
    this.getAllFeedback(); 
  }

  getAllFeedback = () => {
    console.log('getting all feedback');
    axios({
      method: 'GET',
      url: '/feedback',
  })
  .then(
    (response) => {
  })
  .catch((error) => {
    console.log('error in getting all feedback', error);
    alert('Something went wrong, try again later')
  })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} /> 
        <Route path ="/1" component={Feeling} />  
        <Route path ="/2" component={Understanding} />  
        <Route path ="/3" component={Support} /> 
        <Route path ="/4" component={Comments} /> 
        <Route path ="/review" component={Review} />  
        <Route path ="/submit" component={Submit} />  
        <Route path ="/thankyou" component={ThankYou} />  
        <Route path ="/admin" component={Admin} />  
      </div>
    </Router>
    );
  }
}

export default connect()(App);
