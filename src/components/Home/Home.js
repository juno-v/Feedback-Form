import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Home extends Component {

    handleClick = () => {
        alert('You are starting your feedback survey!');
        // change location here 
        this.props.history.push('/1'); 
    }

    render() {
        return (
            <div>
                <h1>Please fill out this feedback survey!</h1>
                <button onClick={this.handleClick}>Start Feedback Survey</button>
            </div>
        );
    }
}

export default withRouter(Home);