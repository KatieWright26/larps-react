import React, { Component } from 'react';
import Form from './styles/Form';

class CreateLarp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
            this.props.createLarp(this.state);
            this.setState({ name: '' });
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter LARP name"
            onChange={this.saveToState}
            value={this.state.name}
          />
          <input type="submit" />
        </Form>
      </div>
    );
  }
}

export default CreateLarp;
