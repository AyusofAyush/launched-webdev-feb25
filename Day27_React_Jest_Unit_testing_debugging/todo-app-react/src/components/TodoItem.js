import '../styles/TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)} className="delete-button">Delete</button>
      </div>
    );
  };
  
  export default TodoItem;
  