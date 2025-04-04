import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

const todos = [
  { id: 1, text: 'Test Todo 1', completed: false },
  { id: 2, text: 'Test Todo 2', completed: true },
];

// snapshot testing
test('renders list of todos', () => {
  render(<TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />);
  
  const firstTodoElement = screen.getByText(/test todo 1/i);
  const secondTodoElement = screen.getByText(/test todo 2/i);
  
  expect(firstTodoElement).toBeInTheDocument();
  expect(secondTodoElement).toBeInTheDocument();
});

// snapshot testing
test('renders message if no todos are available', () => {
  render(<TodoList todos={[]} onToggle={() => {}} onDelete={() => {}} />);
  
  const noTodosMessage = screen.getByText(/no tasks added yet/i);
  
  expect(noTodosMessage).toBeInTheDocument();
});
