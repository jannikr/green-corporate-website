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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;