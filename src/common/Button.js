import React from 'react';
import styled, { css } from 'styled-components';

// Define button sizes and colors
const sizes = {
  small: {
    fontSize: '12px',
    padding: '6px 12px',
  },
  medium: {
    fontSize: '14px',
    padding: '8px 16px',
  },
  large: {
    fontSize: '16px',
    padding: '10px 20px',
  },
};

const colors = {
  default: {
    background: '#007bff',
    color: '#ffffff',
    hoverBackground: '#0056b3',
  },
  primary: {
    background: '#28a745',
    color: '#ffffff',
    hoverBackground: '#218838',
  },
  secondary: {
    background: '#6c757d',
    color: '#ffffff',
    hoverBackground: '#5a6268',
  },
  danger: {
    background: '#dc3545',
    color: '#ffffff',
    hoverBackground: '#c82333',
  },
};

// Styled button component with dynamic props for size and color
const StyledButton = styled.button`
  font-size: ${({ size }) => sizes[size].fontSize};
  padding: ${({ size }) => sizes[size].padding};
  background-color: ${({ color }) => colors[color].background};
  color: ${({ color }) => colors[color].color};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ color }) => colors[color].hoverBackground};
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

// Reusable Button component
const Button = ({ label, size = 'medium', color = 'default', fullWidth, onClick }) => {
  return (
    <StyledButton size={size} color={color} fullWidth={fullWidth} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
