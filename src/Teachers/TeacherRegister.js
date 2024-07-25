import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button'; // Assuming you have the Button component from the previous example

// Styled components for form elements
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TeacherForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    fatherOrHusband: '',
    adharCard: '',
    age: '',
    qualification: '',
    grade: '',
    id: '',
    gender: '',
    experience: '',
    heading: '',
    scope: '',
    subject: ''
  });

  // Handler for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted:', formData);
    // You can add further logic here to send data to server or perform other actions
  };

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormContainer>
      <h2>Teacher Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Father/Husband</Label>
          <Input
            type="text"
            name="fatherOrHusband"
            value={formData.fatherOrHusband}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Aadhar Card</Label>
          <Input
            type="text"
            name="adharCard"
            value={formData.adharCard}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Qualification</Label>
          <Input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Grade</Label>
          <Input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>ID</Label>
          <Input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <Input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Experience</Label>
          <Input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Heading</Label>
          <TextArea
            name="heading"
            rows="4"
            value={formData.heading}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Scope</Label>
          <Input
            type="text"
            name="scope"
            value={formData.scope}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Subject</Label>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit" label="Submit" />
      </form>
    </FormContainer>
  );
};

export default TeacherForm;
