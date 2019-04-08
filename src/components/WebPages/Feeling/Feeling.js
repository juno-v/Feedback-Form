import React, { Component } from 'react';
import '../Feeling/Webpages.css'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class Feeling extends Component {

     // set an intial state in order to create a setState with input values
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
        this.props.history.push('/2');  
    }

    // create a new state copy where comment's value = what was typed into the inputs. 
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
                <form>
                    <h1>How are you feeling today? </h1> <br /> 
                    <input id="input"
                           placeholder="insert a number 1 - 5" 
                           type="number" 
                           min="1"
                           max="5"
                           onChange={this.handleChange} 
                           name="name" ></input>
                </form>
            <div>
            <button id="fixed-button" onClick={this.returnToPrevious}>Go back to home</button>
            <button id="next-button" onClick={this.nextPage}> Next Page </button>
                <Review /> 
            </div>
        </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Feeling));

