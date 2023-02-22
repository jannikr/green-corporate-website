import './Navbar.css';
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><Link id="home-navbar-link" to="/">Home</Link></li>
                        <li><Link id="about-navbar-link" to="/about">About</Link></li>
                        <li><Link id="team-navbar-link" to="/team">Team</Link></li>
                        <li><Link id="blog-navbar-link" to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;