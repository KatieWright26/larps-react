import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './styles/Form';

class CreateLarp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      location: '',
      startDate: '',
    };

    this.saveToState = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  }

  render() {
    const { createLarp } = this.props;
    const { name, description, location, startDate } = this.state;

    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          createLarp(this.state);
          this.setState({
            name: '',
            description: '',
            startDate: '',
            location: '',
          });
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter LARP name"
          onChange={this.saveToState}
          value={name}
        />
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          onChange={this.saveToState}
          value={location}
        />
        <input
          type="date"
          name="startDate"
          onChange={this.saveToState}
          value={startDate}
        />
        <textarea
          rows="7"
          name="description"
          placeholder="Enter description for LARP"
          onChange={this.saveToState}
          value={description}
        />

        <input type="submit" />
      </Form>
    );
  }
}

CreateLarp.propTypes = {
  createLarp: PropTypes.func,
};

export default CreateLarp;
