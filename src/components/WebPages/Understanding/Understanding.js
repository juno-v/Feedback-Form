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

class Understanding extends Component {

    state = {
        feedback: {
            understanding: '',
        },
    }

    returnToPrevious = (event) => {
        alert('You are going back to home!');
        // change location here 
        this.props.history.push('/1'); 
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

        const { classes } = this.props;

        return (
        <section>
                <form>
                    <h1>How are you understang things?</h1> <br /> 
                    <TextField 
                        className={classes.text}
                        placeholder="insert a number 1 - 5" 
                        type="number" 
                        min="1"
                        max="5"
                        onChange={this.handleChange} 
                        name="name" />
                </form>
                <div>
                    <Button id="fixed-button" onClick={this.returnToPrevious}>Go back to Feeling</Button>
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

Understanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps, null)
)(withRouter(Understanding));
