import React, { Component } from 'react';
import '../Feeling/Feeling.css'

class Feeling extends Component {

    returnToPrevious = () => {
        alert('You are going back to home!');
        // change location here 
        this.props.history.push('/'); 
    }

    render() {
        return (
        <section>
            <div>
                <form>
                    <label>How are you feeling today?</label> <br /> 
                    <input name="rating" type="number" placeholder="Insert a number 1-5"/>
                </form>
            </div>
            <div>
                <button id="fixed-button" onClick={this.returnToPrevious}>Go back to home.</button>
            </div>
        </section>
        );
    }
}

export default Feeling;