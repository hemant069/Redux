
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './features/Navbar';
import Counter from './pages/Counter';
import TodoApp from './pages/TodoApp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/todoapp' element={<TodoApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
