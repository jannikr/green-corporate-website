import styles from './Footer.module.css'
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer