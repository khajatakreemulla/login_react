import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Login from './Components/Login';
import Profile from "./Components/Profile";

function App() {
  return (
    <Router>

    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route exact path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
