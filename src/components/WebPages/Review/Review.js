import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 

class Review extends Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/') 
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState,
        }).then((response) => {
            console.log(`the response is in review btw`, response);
            this.props.dispatch({
                type: "RESET"
            })
            
        }).catch((error) => {
            alert('something went wrong with your POST')
        })

    }


    render() {
    let button = '';
        if (this.props.reduxState.feeling !== '' && this.props.reduxState.understanding !== '' && this.props.reduxState.support !== '' && this.props.reduxState.comments !== '') {
            button = <button onClick={this.handleClick}>Submit Feedback</button>
        }
        else {
            button = <button disabled>Incomplete</button>
        }

        return (
            <div className="App">


                <h1>Review Your Feedback</h1>
                <br />
                <div>
                    <div>
                        <h3>Feelings: {this.props.reduxState.feeling}</h3>
                        <h3>Understanding: {this.props.reduxState.understanding}</h3>
                        <h3>Support: {this.props.reduxState.support}</h3>
                        <h3>Comments: {this.props.reduxState.comments}</h3>
                        {button}
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Review);