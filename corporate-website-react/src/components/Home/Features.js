import './Features.css'
import Card from "./Card";
import {useState} from "react";

const Features = () => {

    const [featuresData] = useState([
        {title: 'Zero JavaScript Runtime', body: ' Astro renders HTML on the server and strips away any remaining, unused JavaScript.'},
        {title: 'The Power of Islands', body: ' Need interactive UI? Load individual, non-blocking component islands in parallel.'},
        {title: 'Lazy-Loading Islands', body: 'Components only hydrate when they scroll into view. If you don\'t see it, Astro won\'t load it.'}
    ]);

    return (
        <section className="features">
            <div className="container">
                {featuresData.map((feature,index) => (
                    <Card isDark={false} key={index} featureTitle={feature.title} featureBody={feature.body} />
                ))}
            </div>
        </section>
    );
}

export default Features;