import React, { Component } from 'react';
import '../Feeling/Feeling.css'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

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
        const action= {type: 'FEELING', payload: this.state.feedback}
        this.props.dispatch(action)
    }

    handleChange = (event) => {
        let propertyName = event.target.name;
        console.log(propertyName);
        
        this.setState({
            feedback: {
                ...this.state.feedback,
                [propertyName]: event.target.value,
            },
          })
        }


    render() {
        return (
        <section>
            <div>
                <form>
                    <label>How are you feeling today?</label> <br /> 
                    <input name="rating" type="text" placeholder="Insert a number 1-5"/>
                    
                </form>
            </div>
            <div>
                <button id="fixed-button" onClick={this.returnToPrevious}>Go back to home</button>
                <button id="next-button" onClick={this.nextPage} onChange={this.handleChange} > Next Page </button>
            </div>
        </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Feeling));

