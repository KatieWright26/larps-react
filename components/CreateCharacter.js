import React, { Component } from 'react';
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
    return (
      <div>
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.props.createCharacter(this.state);
            this.setState({ name: '', larp: '' });
          }}
        >
          <input
            type="text"
            name="name"
            onChange={this.saveToState}
            placeholder="Enter character name"
          />
          <input type="submit"></input>
        </Form>
      </div>
    );
  }
}

export default CreateCharacter;
