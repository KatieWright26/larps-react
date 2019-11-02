import React, { Component } from 'react';

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
        <form
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
        </form>
      </div>
    );
  }
}

export default CreateLarp;
