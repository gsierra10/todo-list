import './App.css'; 
import Header from './components/Header/Header';
import ToDoPage from './containers/ToDoPage/ToDoPage';


function App() {
  return (
    <div className="App">
      <Header />
      <ToDoPage />
    </div>
  );
}

export default App;
