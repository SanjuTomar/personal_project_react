import React from 'react';
import styled from 'styled-components';

// Styled components for Input and Label
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

// Reusable InputField component
const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  );
};

export default InputField;
