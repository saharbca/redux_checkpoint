import './App.css';
import ListTask from './Components/ListTask.js';
import AddTask from './Components/AddTask.js';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <h1>TODO-APP</h1>
      <ListTask />
      <AddTask />
    </div>
  );
  
}
export default App ;