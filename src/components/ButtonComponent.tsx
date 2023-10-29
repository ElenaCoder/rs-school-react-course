import React, { Component } from 'react';
import './ButtonComponent.css';

interface ButtonProps {}

interface ButtonState {
  counter: number;
}

class ButtonComponent extends Component<ButtonProps, ButtonState> {
  state: ButtonState = {
    counter: 0,
  };

  handleClick() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 1) {
      throw new Error('I crashed!');
    }
    return (
      <div className="button-container">
        <button className="error-button" onClick={() => this.handleClick()}>
          Click to throw error
        </button>
      </div>
    );
  }
}

export default ButtonComponent;
