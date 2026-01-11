import React, { useState } from 'react';

const AddStudent = ({ handleAddStudent }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    major: '',
    university: '',
    averageGrade: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.major) {
        handleAddStudent(formData);
        setFormData({ name: '', age: '', major: '', university: '', averageGrade: '' });
    }
  };

  return (
    <div className="form-container">
      <h3>Add New Student</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input name="major" placeholder="Major" value={formData.major} onChange={handleChange} required />
        <input name="university" placeholder="University" value={formData.university} onChange={handleChange} />
        <input name="averageGrade" type="number" placeholder="Grade" value={formData.averageGrade} onChange={handleChange} />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;