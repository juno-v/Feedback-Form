import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Support extends Component {

    state = {
        feedback: {
            support: '',  
        },
    }

    returnToPrevious = (event) => {
        // change location here 
        this.props.history.push('/2'); 
    }

    nextPage = (event) => {
        event.preventDefault();
        console.log('Button clicked', this.state.feedback);
        const action= {type: 'SUPPORT', payload: this.state.feedback.support}
        this.props.dispatch(action)
        this.props.history.push('/4'); 
    }

    handleChange = (event) => {

        this.setState({
            feedback: {
                ...this.state.feedback,
                support: event.target.value,
            },
          })
        }


    render() {
        return (
            <section>
                <form>
                    <h1>How well do you feel Supported??</h1> <br /> 
                    <input id="input"
                           placeholder="insert a number 1 - 5" 
                           type="number" 
                           min="1"
                           max="5"
                           onChange={this.handleChange} 
                           name="name" ></input>
                </form>
            <div>
                <button id="next-button" onClick={this.nextPage}> Next Page </button>
                <button id="fixed-button" onClick={this.returnToPrevious}>Go back to Understanding</button>
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

