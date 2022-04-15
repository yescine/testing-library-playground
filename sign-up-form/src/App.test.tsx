import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

function typeForm({ email, password, confirmPassword }: { email?: string; password?: string; confirmPassword?: string }) {
  const emailField = screen.getByRole("textbox", { name: /email/i });
  const passwordField = screen.getByLabelText("Password");
  const passwordConfirmField = screen.getByLabelText(/confirm Password/i);

  if (email) userEvent.type(emailField, email);
  if (password) userEvent.type(passwordField, password);
  if (confirmPassword) userEvent.type(passwordConfirmField, confirmPassword);

  return { emailField, passwordField, passwordConfirmField };
}

function submitForm() {
  const submitBtn = screen.getByRole("button", { name: /submit/i });
  userEvent.click(submitBtn);
}

describe("fill in form", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("safe path", () => {
    test("should input be empty", () => {
      expect(screen.getByRole("textbox", { name: /email/i }).value).toBe("");
      expect(screen.getByLabelText("Password").value).toBe("");
      expect(screen.getByLabelText(/confirm password/i).value).toBe("");
    });

    test("should type login form", () => {
      const email = "slena@gmail.com";
      const password = "pass!";
      const { emailField, passwordField, passwordConfirmField } = typeForm({ email, password, confirmPassword: password });

      expect(emailField.value).toBe(email);
      expect(passwordField.value).toBe(password);
      expect(passwordConfirmField.value).toBe(password);
    });

    test("should not show error text", () => {
      const email = "slena@gmail.com";
      typeForm({ email });
      submitForm();

      expect(screen.queryByText(/the email you input is invalid/i)).not.toBeInTheDocument();
    });
  });

  describe("error path", () => {
    test("should show error text", () => {
      const email = "slenagmail.com";
      typeForm({ email });
      submitForm();

      expect(screen.queryByText(/the email you input is invalid/i)).toBeInTheDocument();
    });
  });
});
