import React, { Component } from 'react';

class ThankYou extends Component {

    handleClick = () => {
        this.props.history.push('/home') 
    }

    render() {
        return (
            <div>
                <h1>Thank you!</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        );
    }
}

export default ThankYou;