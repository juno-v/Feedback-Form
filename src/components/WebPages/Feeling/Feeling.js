import React, { Component } from 'react';
import '../Feeling/Feeling.css'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Feeling extends Component {

    state = {
        feedback: {
            feeling: '',  
        },
    }

    returnToPrevious = (event) => {
        alert('You are going back to home!');
        // change location here 
        this.props.history.push('/'); 
    }

    nextPage = (event) => {
        event.preventDefault();
        console.log('Button clicked', this.state.feedback);
        const action= {type: 'FEELING', payload: this.state.feedback.feeling}
        
        this.props.dispatch(action)
        this.props.history.push('/understanding');  
    }

    handleChange = (event) => {

        this.setState({
            feedback: {
                ...this.state.feedback,
                feeling: event.target.value,
            },
          })
        }


    render() {
        console.log(`this is the log of this.props.reduxState`, this.props.reduxState.feeling);
        
        return (
        <section>
            <div>
                <form>
                    <label>How are you Feeling today?</label> <br /> 
                    <input placeholder="insert a number 1 - 5" 
                           type="text" 
                           onChange={this.handleChange} 
                           name="name" ></input>
                </form>
                <Review /> 
            </div>
            
            <div>
                <button id="fixed-button" 
                        onClick={this.returnToPrevious}>Go back to home</button>
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

export default connect(mapReduxStateToProps)(withRouter(Feeling));

