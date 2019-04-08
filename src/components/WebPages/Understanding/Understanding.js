import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import '../Feeling/Webpages.css'

class Understanding extends Component {

    state = {
        feedback: {
            understanding: '',
        },
    }

    returnToPrevious = (event) => {
        alert('You are going back to home!');
        // change location here 
        this.props.history.push('/feeling'); 
    }

    nextPage = (event) => {
        event.preventDefault();
        console.log('Button clicked', this.state.feedback);
        const action= {type: 'UNDERSTANDING', payload: this.state.feedback.understanding}
        this.props.dispatch(action)
        this.props.history.push('/3'); 
    }

    handleChange = (event) => {
        this.setState({
            feedback: {
                ...this.state.feedback,
                understanding: event.target.value,
            },
          })
        }


    render() {
        return (
        <section>
            <div>
                <form>
                    <h1>How are you understang things?</h1> <br /> 
                    <input id="input"
                           placeholder="insert a number 1 - 5" 
                           type="number" 
                           min="1"
                           max="5"
                           onChange={this.handleChange} 
                           name="name" ></input>
                </form>
                <Review /> 
            </div>
            <div>
                <button id="fixed-button" 
                        onClick={this.returnToPrevious}>Go back to Feeling</button>
                <button id="next-button" 
                onClick={this.nextPage}> Next Page </button>
            </div>
        </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Understanding));

