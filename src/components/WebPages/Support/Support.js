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

class Support extends Component {

    state = {
        feedback: {
            support: '',  
        },
    }

    returnToPrevious = (event) => {
        this.props.history.push('/2'); 
    }

    nextPage = (event) => {
        event.preventDefault();
       
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

        const { classes } = this.props;

        return (
            <section>
                <form>
                    <h1>How well do you feel Supported??</h1> <br /> 
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
                <Button id="next-button" onClick={this.nextPage}> Next Page </Button>
                <Button id="fixed-button" onClick={this.returnToPrevious}> Go back to Understanding</Button>
                <Review /> 
            </div>
        </section>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

Support.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps, null)
)(withRouter(Support));
