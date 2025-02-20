import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}>Home</Route>
          <Route path="/Contact" element={<Contact/>}>Contact</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
