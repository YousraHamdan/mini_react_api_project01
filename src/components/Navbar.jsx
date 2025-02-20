import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

