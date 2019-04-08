import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'; 

class Review extends Component {

    // if all feedback has values, on the click of the submit button will be able to be clicked. 
    // on click of submit button all feedback data will be sent to the database through a POST request 
    // the input values will also clear and return to the home page.
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

    returnHome = () => {
        this.props.history.push('/');
        this.props.dispatch({
            type: "RESET"
        })
    }

    render() {
    // an if statement to show the "submit button" if all input fields have been entered in something.
    let button = '';
        if (this.props.reduxState.feeling !== '' && this.props.reduxState.understanding !== '' && this.props.reduxState.support !== '' && this.props.reduxState.comments !== '') {
            button = <button onClick={this.handleClick}>Submit Feedback</button>
        }
        else {
            button = <button disabled>Incomplete</button>
        }
        
        return (
        <section> 
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
                <div>
                    <button id="home" onClick={this.returnHome}>Quit & Return to Home</button>
                </div>
                </div>
                <br />
            </div>
            
        </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Review);