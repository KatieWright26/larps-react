import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './styles/Form';

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
        <Form
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
        </Form>
      </div>
    );
  }
}

CreateCharacter.propTypes = {
  larp: PropTypes.number,
  createCharacterInDb: PropTypes.func,
};
export default CreateCharacter;
