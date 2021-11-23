import './App.css'; 
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
