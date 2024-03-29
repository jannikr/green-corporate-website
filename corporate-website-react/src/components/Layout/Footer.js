import './Footer.css'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <h3>Astro</h3>
                    <p>
                        This is a demo website to show how the Astro framework works. Visit
                        the <a href="https://astro.build">official website</a> to learn
                        more.
                    </p>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><Link id="home-footer-link" to="/">Home</Link></li>
                        <li><Link id="about-footer-link" to="/about">About</Link></li>
                        <li><Link id="team-footer-link" to="/team">Team</Link></li>
                        <li><Link id="blog-footer-link" to="/blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;