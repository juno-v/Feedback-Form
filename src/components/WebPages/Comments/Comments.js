import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Support extends Component {

    state = {
        feedback: {
            comments: '',  
        },
    }

    returnToPrevious = (event) => {
        // change location here 
        this.props.history.push('/3'); 
    }

    nextPage = (event) => {
        event.preventDefault();
        console.log('Button clicked', this.state.feedback);
        const action= {type: 'COMMENTS', payload: this.state.feedback.comments}
        this.props.dispatch(action)
        this.props.history.push('/review'); 
    }

    handleChange = (event) => {

        this.setState({
            feedback: {
                ...this.state.feedback,
                comments: event.target.value,
            },
          })
        }


    render() {
        return (
            <section>
                <form>
                    <h1>Leave us some feedback in the comments! We'd love to hear.</h1> <br /> 
                    <input id="input"
                           placeholder="enter text here" 
                           type="text" 
                           onChange={this.handleChange} 
                           name="name" ></input>
                </form>
            <div>
                <button id="next-button" onClick={this.nextPage}> Next Page </button>
                <button id="fixed-button" onClick={this.returnToPrevious}>Go back to Supprt</button>
                <Review /> 
            </div>
        </section>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Support));

