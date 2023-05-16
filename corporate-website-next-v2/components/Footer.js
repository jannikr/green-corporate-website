import styles from './Footer.module.css'
import Link from "next/link";
import React from "react";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
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
                        <li><Link id="home-footer-link" className={styles.listItem} prefetch={false} href="/">Home</Link></li>
                        <li><Link id="about-footer-link" className={styles.listItem} prefetch={false} href="/about">About</Link></li>
                        <li><Link id="team-footer-link" className={styles.listItem} prefetch={false} href="/team">Team</Link></li>
                        <li><Link id="blog-footer-link" className={styles.listItem} prefetch={false} href="/blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer