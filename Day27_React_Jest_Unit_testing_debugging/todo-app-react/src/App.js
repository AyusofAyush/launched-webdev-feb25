import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import './styles/App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
