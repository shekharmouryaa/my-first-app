import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  gender: yup.string().required('Gender is required'),
  skills: yup.array().of(yup.string()),
  country: yup.string().required('Country is required'),
  age: yup.number().required('Age is required').positive().integer(),
});

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: '',
      skills: [],
      country: '',
      age: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form data submitted:', values);
    },
  });

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        {/* ... Other form fields with similar structure ... */}
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.age && formik.errors.age && (
            <div>{formik.errors.age}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikForm;
