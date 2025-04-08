// src/App.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const titleElement = screen.getByText(/todo list/i);
  expect(titleElement).toBeInTheDocument();
});

test("adds a task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Enter task");
  const buttonElement = screen.getByText("Add Task");

  fireEvent.change(inputElement, { target: { value: "Learn Jest" } });
  fireEvent.click(buttonElement);

  const todoItem = screen.getByText("Learn Jest");
  expect(todoItem).toBeInTheDocument();
});

test("toggles task completion", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Enter task");
  const buttonElement = screen.getByText("Add Task");

  fireEvent.change(inputElement, { target: { value: "Learn React" } });
  fireEvent.click(buttonElement);

  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem); // Toggle completion

  expect(todoItem).toHaveClass("completed");
});

test("removes a task", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Enter task");
  const buttonElement = screen.getByText("Add Task");

  fireEvent.change(inputElement, { target: { value: "Learn Testing" } });
  fireEvent.click(buttonElement);

  const todoItem = screen.getByText("Learn Testing");
  const removeButton = screen.getByText("Remove");

  fireEvent.click(removeButton); // Remove task
  expect(todoItem).not.toBeInTheDocument();
});
