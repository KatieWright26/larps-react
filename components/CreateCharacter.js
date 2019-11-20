import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterForm from './styles/CharacterForm';
import { createCharacterInDb } from '../actionCreators';

const mapStateToProps = state => ({
  larps: state.larps,
  characters: state.characters,
});

const mapDispatchToProps = { createCharacterInDb };

class CreateCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      larp: props.larp,
    };

    this.saveToState = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  }

  render() {
    const { name } = this.state;
    const { createCharacterInDb } = this.props;
    return (
      <div>
        <CharacterForm
          onSubmit={e => {
            e.preventDefault();
            createCharacterInDb(this.state);
            this.setState({ name: '', larp: '' });
          }}
        >
          <input
            type="text"
            name="name"
            onChange={this.saveToState}
            placeholder="Enter character name"
            value={name}
          />
          <input type="submit"></input>
        </CharacterForm>
      </div>
    );
  }
}

CreateCharacter.propTypes = {
  larp: PropTypes.number,
  createCharacterInDb: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacter);
