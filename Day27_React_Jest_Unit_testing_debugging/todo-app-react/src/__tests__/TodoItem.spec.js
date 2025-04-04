import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

const todo = {
  id: 1,
  text: 'Test Todo',
  completed: false,
};

// snapshot test
test('renders the todo item text', () => {
  render(<TodoItem todo={todo} onToggle={() => {}} onDelete={() => {}} />);
  
  const todoElement = screen.getByText(/test todo/i);
  
  expect(todoElement).toBeInTheDocument();
});

// mock test
test('calls onToggle when the todo text is clicked', () => {
  const onToggleMock = jest.fn();
  render(<TodoItem todo={todo} onToggle={onToggleMock} onDelete={() => {}} />);
  
  const todoElement = screen.getByText(/test todo/i);
  fireEvent.click(todoElement);
  
  expect(onToggleMock).toHaveBeenCalledWith(1);
});

// mock test
test('calls onDelete when the delete button is clicked', () => {
  const onDeleteMock = jest.fn();
  render(<TodoItem todo={todo} onToggle={() => {}} onDelete={onDeleteMock} />);
  
  const deleteButtonElement = screen.getByText(/delete/i);
  fireEvent.click(deleteButtonElement);
  
  expect(onDeleteMock).toHaveBeenCalledWith(1);
});
