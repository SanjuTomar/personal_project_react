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

const Select = styled.select`
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

const StudentForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    dob: '',
    adharNo: '',
    bloodGroup: '',
    address: '',
    isActive: '',
    class: '',
    section: '',
    transport: '',
    mobile: '',
    id: ''
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
      <h2>Student Registration Form</h2>
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
          <Label>Father's Name</Label>
          <Input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Mother's Name</Label>
          <Input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Date of Birth</Label>
          <Input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Aadhar Number</Label>
          <Input
            type="text"
            name="adharNo"
            value={formData.adharNo}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Blood Group</Label>
          <Input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <TextArea
            name="address"
            rows="4"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Active</Label>
          <Select
            name="isActive"
            value={formData.isActive}
            onChange={handleChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Class</Label>
          <Input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Section</Label>
          <Input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Transport</Label>
          <Select
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            required
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Mobile</Label>
          <Input
            type="text"
            name="mobile"
            value={formData.mobile}
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
        <Button type="submit" label="Submit" />
      </form>
    </FormContainer>
  );
};

export default StudentForm;
