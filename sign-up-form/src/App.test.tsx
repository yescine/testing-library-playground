import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("should input be empty", () => {
  render(<App />);
  const emailField = screen.getByRole("textbox");
  const passwordField = screen.getByLabelText("Password");
  const passwordConfirmField = screen.getByLabelText(/confirm password/i);

  expect(emailField.value).toBe("");
  expect(passwordField.value).toBe("");
  expect(passwordConfirmField.value).toBe("");
});

test("should type login form", () => {
  const email = "slena@gmail.com";
  const password = "pass!";
  render(<App />);
  const emailField = screen.getByRole("textbox", { name: /email/i });
  const passwordField = screen.getByLabelText("Password");
  const passwordConfirmField = screen.getByLabelText(/confirm password/i);

  userEvent.type(emailField, email);
  userEvent.type(passwordField, password);
  userEvent.type(passwordConfirmField, password);

  expect(emailField.value).toBe(email);
  expect(passwordField.value).toBe(password);
  expect(passwordConfirmField.value).toBe(password);
});
