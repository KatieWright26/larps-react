import React from 'react';
import PropTypes from 'prop-types';
import Form from './styles/Form';
import { useForm } from './hooks/useForm';

function CreateLarp({ createLarp }) {
  const [values, handleChange] = useForm({
    name: '',
    description: '',
    location: '',
    startDate: '',
  });

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        createLarp(values);
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Enter LARP name"
        onChange={handleChange}
        value={values.name}
      />
      <input
        type="text"
        name="location"
        placeholder="Enter a location"
        onChange={handleChange}
        value={values.location}
      />
      <input
        type="date"
        name="startDate"
        onChange={handleChange}
        value={values.startDate}
      />
      <textarea
        rows="7"
        name="description"
        placeholder="Enter description for LARP"
        onChange={handleChange}
        value={values.description}
      />
      <input type="submit" />
    </Form>
  );
}

CreateLarp.propTypes = {
  createLarp: PropTypes.func,
};

export default CreateLarp;
