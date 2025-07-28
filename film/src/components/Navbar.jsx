import { Link } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
  // nav is a semantic HTML element for navigation bar
  return (
    <nav className = "navbar">
      <div className = "navbar-brand">
        <Link to ="/" > My First Movie UI </Link> {/*Brings to home after clicks */};
      </div>
      <div className = "navbar-links">
        <Link to ="/" className = "nav-link"> Home </Link>
        <Link to ="/favorites" className = "nav-link"> Favorites </Link>
      </div>
    </nav>
  );
};
