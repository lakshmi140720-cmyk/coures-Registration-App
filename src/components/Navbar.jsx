import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 SkillHub</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/mycourses">My Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;