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

class Comments extends Component {

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

    // create a new state copy where comment's value = what was typed into the inputs. 
    handleChange = (event) => {

        this.setState({
            feedback: {
                ...this.state.feedback,
                comments: event.target.value,
            },
          })
        }


    render() {

        const { classes } = this.props;

        return (
            <section>
                <form>
                    <h1>Leave us some feedback in the comments! We'd love to hear.</h1> <br /> 
                    <TextField 
                        multiline 
                        className={classes.text}
                        placeholder="enter text here" 
                        type="text" 
                        onChange={this.handleChange} 
                        name="name" />
                </form>
            <div>
                <Button id="next-button" onClick={this.nextPage}> Next Page </Button>
                <Button id="fixed-button" onClick={this.returnToPrevious}>Go back to Supprt</Button>
                <Review /> 
            </div>
        </section>
        );
    }
}



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

Comments.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps, null)
)(withRouter(Comments));
