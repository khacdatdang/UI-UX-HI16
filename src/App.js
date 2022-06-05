import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import logo
import Home from './layout/Home/home';
import Dash from './layout/Dash/dash';
import Task from './layout/Task/task';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dash />} />
        <Route path = '/alltask' element = { <Task/> }/> 
      </Routes>
    </Router>
  );
}

export default App;
