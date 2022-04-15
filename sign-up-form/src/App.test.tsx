import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should input be empty', () => {
  render(<App />)
  const emailField = screen.getByRole("textbox")
  expect(emailField.value).toBe("")
});
