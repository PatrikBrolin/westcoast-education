import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.heading}><Link to="/">Westcoast education</Link></h1>
      <ul>
        <li><Link to="teachers">Lärare</Link></li>
        <li><Link to="courses">Kurser</Link></li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
