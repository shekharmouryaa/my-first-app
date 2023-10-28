import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    skills: [],
    country: '',
    age: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let newValue = value

    if(type === 'checkbox'){
        newValue = formData.skills.concat(value)
    }
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div>
          <label>Skills:</label>
          <input
            type="checkbox"
            name="skills"
            value={"js"}
            checked={formData.skills.includes("js")}
            onChange={handleChange}
          /> Javascript
          <input
            type="checkbox"
            name="skills"
            value={"react"}
            checked={formData.skills.includes("react")}
            onChange={handleChange}
          /> React
            <input
            type="checkbox"
            name="skills"
            value={"htmlcss"}
            checked={formData.skills.includes("htmlcss")}
            onChange={handleChange}
          /> HTML/CSS
        </div>
        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
