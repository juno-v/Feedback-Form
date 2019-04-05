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

class App extends Component {

  getAllFeedback = () => {
    console.log('getting all feedback');
    axios({
      method: 'GET',
      url: '/feedback',
  })
  .then(
    (response) => {
    console.log(`got the response`, response.data);
    const action = { type: 'GET_FEEDBACK', payload: response.data };
        this.props.dispatch(action);
  })
  .catch((error) => {
    console.log('error in getting all pizzas', error);
    alert('Something went wrong, try again later')
  })
  }

componentDidMount() {
  this.getAllFeedback(); 
}

  render() {
    return (
      <Router>
      <div className="App">
      <Header />
        <Route exact path="/" component={Home} /> 
        <Route path ="/feeling" component={Feeling} />  
        <Route path ="/understanding" component={Understanding} />  
        <Route path ="/support" component={Support} /> 
        <Route path ="/comments" component={Comments} /> 
      </div>
    </Router>
    );
  }
}

export default connect()(App);
