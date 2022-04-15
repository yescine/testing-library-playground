import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should input be empty', () => {
  render(<App />)
  const emailField = screen.getByRole("textbox")
  const passwordField = screen.getByLabelText("Password")
  const passwordConfirmField = screen.getByLabelText(/confirm password/i)

  expect(emailField.value).toBe("")
  expect(passwordField.value).toBe("")
  expect(passwordConfirmField.value).toBe("")

});
