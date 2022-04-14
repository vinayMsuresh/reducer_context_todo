import './App.css';
import TodoContextProvider from './Components/TodoContextProvider';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <TodoList/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
