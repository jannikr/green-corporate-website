import './Navbar.css';
import logo from '../assets/logo.svg';
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;