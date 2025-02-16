import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import HostEvents from './pages/HostEvents';
import './App.css'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/host-events" element={<HostEvents />} />
    </Routes>
  </Router>
);

export default App;