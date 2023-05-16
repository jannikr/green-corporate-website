import styles from './Navbar.module.css';
import React from "react";
import Image from 'next/image'
import Link from "next/link";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className="logo">
                    <Link className={styles.listItem} href="/">
                        <Image
                            src="logo.svg"
                            alt="Logo"
                            className={styles.header}
                            width={100}
                            height={24}
                            priority
                        />
                    </Link>
                </div>
                <nav>
                    <ul>
                        {/*Todo: Check disable prefetching with prefetch={false} as Link parameter*/}
                        <li><Link id="home-navbar-link" className={styles.listItem} prefetch={false} href="/">Home</Link></li>
                        <li><Link id="about-navbar-link" className={styles.listItem} prefetch={false} href="/about">About</Link></li>
                        <li><Link id="team-navbar-link" className={styles.listItem} prefetch={false} href="/team">Team</Link></li>
                        <li><Link id="blog-navbar-link" className={styles.listItem} prefetch={false} href="/blog">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;