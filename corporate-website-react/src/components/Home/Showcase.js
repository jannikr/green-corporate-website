import './Showcase.css';
import frameworkLogos from '../../assets/framework-logos.png';
import frameworkLogosSmall from '../../assets/framework-logos-small.png'

const heading = "Welcome To the Green IT Agency!"
const text= "Discover new ways to reduce the resource consumption of web applications"

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="showcase-text">
                <h1>{heading}</h1>
                <p>
                    {text}
                </p>
            </div>
            <div className="showcase-img">
                <img className="logos" src={frameworkLogos} alt=""/>
                <img className="logos-small" src={frameworkLogosSmall} alt=""/>
            </div>
            <p className="showcase-demo">
                <small>This is a demo website used for energy efficiency measurements.</small>
            </p>
        </section>
    );
}

export default Showcase;