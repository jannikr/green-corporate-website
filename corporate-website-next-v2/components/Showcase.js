import styles from './Showcase.module.css';
import React from "react";
import Image from 'next/image'

const Showcase = (props) => {

    const showExtra = props.showExtra
    const heading = props.heading
    const text = props.text

    return (
        <section className={styles.showcase}>
            <div className={styles.showcaseText}>
                <h1>{heading}</h1>
                <p>
                    {text}
                </p>
            </div>
            { showExtra && <>
                <div className={styles.showcaseImg}>
                    <Image
                        src="/framework-logos.png"
                        alt="Logo"
                        className="logos"
                        width={905}
                        height={85}
                        priority
                    />
                    <Image
                        src="/framework-logos-small.png"
                        alt="Logo"
                        className="logos-small"
                        width={299}
                        height={85}
                        priority
                    />
                </div>
                <p className={styles.showcaseDemo}>
                    <small>This is a demo website used for energy efficiency measurements.</small>
                </p>
            </>}
        </section>
    );
}

Showcase.defaultProps = {
    showExtra: false,
    heading: "Welcome To the Green IT Agency!",
    text: "Discover new ways to reduce the resource consumption of web applications"
}

export default Showcase;