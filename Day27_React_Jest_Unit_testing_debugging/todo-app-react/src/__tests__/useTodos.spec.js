import { renderHook, act } from '@testing-library/react';
import useTodos from '../hooks/useTodos';

// functional testing
test('initializes with an empty list of todos', () => {
  const { result } = renderHook(() => useTodos());
  
  expect(result.current.todos).toEqual([]);
});

test('adds a todo', () => {
  const { result } = renderHook(() => useTodos());
  
  act(() => {
    result.current.addTodo('New Task');
  });
  
  expect(result.current.todos).toHaveLength(1);
  expect(result.current.todos[0].text).toBe('New Task');
});

test('toggles a todo', () => {
  const { result } = renderHook(() => useTodos());
  
  act(() => {
    result.current.addTodo('New Task');
  });
  
  act(() => {
    result.current.toggleTodo(result.current.todos[0].id);
  });
  
  expect(result.current.todos[0].completed).toBe(true);
});

test('deletes a todo', () => {
  const { result } = renderHook(() => useTodos());
  
  act(() => {
    result.current.addTodo('New Task');
  });
  
  act(() => {
    result.current.deleteTodo(result.current.todos[0].id);
  });
  
  expect(result.current.todos).toHaveLength(0);
});
