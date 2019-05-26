import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      width: 200,
   
    },
    text: {
        width: 500,
    }
});

class Home extends Component {

    // home pages displays prior to starting the server which is at localhost:3000/1
    handleClick = () => {
        alert('You are starting your feedback survey!');
        // change location here 
        this.props.history.push('/1'); 
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <h1>Please fill out this feedback survey!</h1>
                <Button 
                    variant="contained" 
                    className={classes.button}
                    onClick={this.handleClick}>Start Feedback Survey
                </Button>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (withStyles(styles))(withRouter(Home));

