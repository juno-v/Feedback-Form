import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import Feeling from '../WebPages/Feeling/Feeling';
import Understanding from '../WebPages/Understanding/Understanding';
import Support from '../WebPages/Support/Support';
import Comments from '../WebPages/Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>


      <Router>
        <Route path ="/feeling" component={Feeling} /> 
        <Route path ="/understanding" component={Understanding} /> 
        <Route path ="/support" component={Support} /> 
        <Route path ="/comments" component={Comments} /> 
      </Router>



      </div>
    );
  }
}

export default App;
