import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import axios from 'axios'; 

// material ui imports 
import Button from '@material-ui/core/Button';
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

class Review extends Component {

    // if all feedback has values, on the click of the submit button will be able to be clicked. 
    // on click of submit button all feedback data will be sent to the database through a POST request 
    // the input values will also clear and return to the home page.
    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/') 
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.reduxState,
        }).then((response) => {
            console.log(`the response is in review btw`, response);
            // this.props.dispatch({
            //     type: "RESET"
            // })
            
        }).catch((error) => {
            alert('something went wrong with your POST')
        })

    }

    returnHome = () => {
        this.props.history.push('/');
        this.props.dispatch({
            type: "RESET"
        })
    }

    render() {

        const { classes } = this.props;

        // an if statement to show the "submit button" if all input fields have been entered in something.
        let button = '';
            if (this.props.reduxState.feeling !== '' && this.props.reduxState.understanding !== '' && this.props.reduxState.support !== '' && this.props.reduxState.comments !== '') {
                button = <Button 
                            variant="outlined"
                            onClick={this.handleClick}
                            >Submit Feedback</Button>
            }
            else {
                button = <Button 
                            variant="outlined"
                            onClick={this.handleClick}
                            disabled>Incomplete</Button>
            }
        
        return (
        <section> 
            <div className="App">


                <h1>Review Your Feedback</h1>
                <br />
                <div>
                    <div>
                        <h3>Feelings: {this.props.reduxState.feeling}</h3>
                        <h3>Understanding: {this.props.reduxState.understanding}</h3>
                        <h3>Support: {this.props.reduxState.support}</h3>
                        <h3>Comments: {this.props.reduxState.comments}</h3>
                        {button}
                    </div>
                    <br/>
                <div>
                    <Button 
                    variant="outlined"
                    id="home" 
                    onClick={this.returnHome}
                    >Quit & Return to Home</Button>
                </div>
                </div>
                <br />
            </div>
            
        </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

Review.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    connect(mapReduxStateToProps, null)
)(Review);
