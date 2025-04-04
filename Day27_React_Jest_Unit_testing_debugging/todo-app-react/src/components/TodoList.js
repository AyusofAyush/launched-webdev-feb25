import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
};

export default TodoList;
