import React from "react";
import styles from './Features.module.css'
import Card from "@/components/Card";

// No useState because this is a static rendered page
const featuresData =  [
    {title: 'Zero JavaScript Runtime', body: ' Astro renders HTML on the server and strips away any remaining, unused JavaScript.'},
    {title: 'The Power of Islands', body: ' Need interactive UI? Load individual, non-blocking component islands in parallel.'},
    {title: 'Lazy-Loading Islands', body: 'Components only hydrate when they scroll into view. If you don\'t see it, Astro won\'t load it.'}
]
const Features = () => {

    return (
        <section className={styles.features}>
            <div className={styles.container}>
                {featuresData.map((feature, index) => (
                    // Sending data to child component
                    <Card isDark={false} key={index} featureTitle={feature.title} featureBody={feature.body}/>
                ))}
            </div>
        </section>
    );
}

export default Features;