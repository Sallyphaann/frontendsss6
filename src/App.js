
import './App.css';
import Login from './component/login'
import Profile from './component/Profile';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} /> {/* Add this route */}
    </Routes>
    </div>
  );
}

export default App;