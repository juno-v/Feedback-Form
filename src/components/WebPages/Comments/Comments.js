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
        this.props.history.push('/4'); 
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
            <div>
                <form>
                    <h1>Leave us some feedback in the comments! We'd love to hear.</h1> <br /> 
                    <input placeholder="enter text here" 
                           type="text" 
                           onChange={this.handleChange} 
                           name="name" ></input>
                </form>
                <Review /> 
            </div>
            <div>
                <button id="fixed-button" 
                        onClick={this.returnToPrevious}>Go back to Supprt</button>
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

export default connect(mapReduxStateToProps)(withRouter(Support));

