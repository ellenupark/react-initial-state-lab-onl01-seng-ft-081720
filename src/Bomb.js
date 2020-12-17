import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    displaySeconds = () => {
        if (this.state.secondsLeft === 0) {
            return 'Boom!'
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {
        return (
            <div>
                <h2>{this.displaySeconds()}</h2>
            </div>
        );
    }
}

export default Bomb;
