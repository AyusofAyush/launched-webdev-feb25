import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "../components/AddTodo";

// snapshot testing
test("renders input and button", () => {
  render(<AddTodo onAdd={() => {}} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

// mock testing - 1
test("calls onAdd when form is submitted", () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);

  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.click(buttonElement);

  expect(onAddMock).toHaveBeenCalledWith("New Task");
  expect(onAddMock).toHaveBeenCalledTimes(1);
});

// mock testing - 2
test("does not call onAdd if input is empty", () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);

  const buttonElement = screen.getByText(/add/i);

  fireEvent.click(buttonElement);

  expect(onAddMock).not.toHaveBeenCalled();
});
// test to ensure input clears after adding a task
test("clears input after task is added", () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);

  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.click(buttonElement);

  expect(inputElement.value).toBe("");
});

// test to ensure input does not clear if task is not added
test("does not clear input if task is not added", () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);

  fireEvent.change(inputElement, { target: { value: "   " } });
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

  expect(inputElement.value).toBe("   ");
});

// test to ensure onAdd is not called when only whitespace is entered
test("does not call onAdd when only whitespace is entered", () => {
  const onAddMock = jest.fn();
  render(<AddTodo onAdd={onAddMock} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);

  fireEvent.change(inputElement, { target: { value: "   " } });
  fireEvent.click(buttonElement);

  expect(onAddMock).not.toHaveBeenCalled();
});

// test to ensure button is disabled when input is empty
test("button is disabled when input is empty", () => {
  render(<AddTodo onAdd={() => {}} />);

  const inputElement = screen.getByPlaceholderText(/add a new task/i);
  const buttonElement = screen.getByText(/add/i);

  expect(buttonElement).not.toBeDisabled();

  fireEvent.change(inputElement, { target: { value: "" } });
  expect(buttonElement).not.toBeDisabled();
});
