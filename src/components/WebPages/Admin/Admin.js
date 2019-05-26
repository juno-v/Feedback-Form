import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

  componentDidMount = () => {
    this.props.dispatch({type: 'GET_FEEDBACK'})
  }

    render() {
        return (
            <div>        
          { this.props.reduxState.getFeedback.map( (feedback, index) => {
            return (
              <div key={index}>
                <p>Feeling: {feedback.feeling }</p>
                <p>Understanding {feedback.understanding }</p>
                <p>Support {feedback.supprt }</p>
                <p>Comments {feedback.comments }</p>
              </div>
            )
          })
        }    
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(Admin);

