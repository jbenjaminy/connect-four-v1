import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';

const propTypes = {
  dispatch: PropTypes.func,
};

class NewGame extends React.Component {
  constructor() {
    super();
    this.newGame = this.newGame.bind(this);
  }

  newGame(event) {
    event.preventDefault();
    console.log(this.name.value);
    this.props.dispatch(actions.newGame());
  }

  render() {
    return (
      <div>
        <h2>Enter your name:</h2>
        <form onSubmit={this.newGame}>
          <input type="text" ref={(name) => { this.name = name; }} required />
          <button type="submit">Start Game</button>
        </form>
      </div>
    );
  }
}

NewGame.propTypes = propTypes;

const Container = connect()(NewGame);

module.exports = Container;