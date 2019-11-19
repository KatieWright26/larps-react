import React, { Component } from 'react';
import { connect } from 'react-redux';
import { start } from 'repl';
import Form from './styles/Form';
import { createLarpInDb } from '../actionCreators';

const mapDispatchToProps = { createLarpInDb };

const mapStateToProps = state => ({
  larps: state.larps,
});

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
    const { createLarpInDb } = this.props;
    const { name, description, location, startDate } = this.state;
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          createLarpInDb(this.state);
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
        <textarea
          rows="5"
          name="description"
          placeholder="Enter description for LARP"
          onChange={this.saveToState}
          value={description}
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
        <input type="submit" />
      </Form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLarp);
