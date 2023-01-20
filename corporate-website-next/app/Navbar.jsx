import styles from './Navbar.module.css';
import React from "react";
import Image from 'next/image'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className="logo">
                    <a href="/">
                        <Image
                            src="logo.svg"
                            alt="Logo"
                            className={styles.header}
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
                <nav>
                    <ul>
                        <li className={styles.listItem}>Home</li>
                        <li className={styles.listItem}>About</li>
                        <li className={styles.listItem}>Team</li>
                        <li className={styles.listItem}>Blog</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;