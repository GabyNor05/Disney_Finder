import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Comparison from './components/Comparison';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App" >
      <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
