import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Submit extends Component {

    render() {
        return (
        <section>
        IN SUBMIT 
      </section>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Submit));
