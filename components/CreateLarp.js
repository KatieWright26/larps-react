import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    };

    this.saveToState = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  }

  render() {
    const { createLarpInDb } = this.props;
    const { name, description } = this.state;
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          createLarpInDb(this.state);
          this.setState({ name: '', description: '' });
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
        <input type="submit" />
      </Form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLarp);
