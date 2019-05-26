import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import Review from '../Review/Review';

// material ui imports 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// material ui styles 
const styles = theme => ({
    button: {
      width: 200,
   
    },
    text: {
        width: 500,
    }
});

class Feeling extends Component {

    state = {
        feedback: {
            feeling: '',  
        },
    }

    // go back to previous page 
    returnToPrevious = (event) => { 
        this.props.history.push('/'); 
    }

    // setState to input field's value 
    handleChange = (event) => {
    this.setState({
        feedback: {
            ...this.state.feedback,
            feeling: event.target.value,
            },
        })
    }

    // go to the next page of the form submission and dispatch input field value 
    nextPage = (event) => {
        event.preventDefault();

        // dispatch
        this.props.dispatch({type: 'FEELING', payload: this.state.feedback})

        // next page 
        this.props.history.push('/2');  
    }

    render() {
       
        const { classes } = this.props;
        
        return (
        <section>

            <form>
                <h1>How are you feeling today? </h1> <br /> 
                <TextField 
                    className={classes.text}
                    id="input"
                    placeholder="Insert a number between 1-5" 
                    type="number" 
                    min="1"
                    max="5"
                    onChange={this.handleChange} 
                    name="name" />
            </form>

            <div>
                <Button id="fixed-button" onClick={this.returnToPrevious}>Go back to home</Button>
                <Button id="next-button" onClick={this.nextPage}> Next Page </Button>
                <Review /> 
            </div>

        </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

Feeling.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps, null)
)(withRouter(Feeling));
