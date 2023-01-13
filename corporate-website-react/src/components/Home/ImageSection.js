import './ImageSection.css'
import green from "../../assets/blog/ash-from.jpg";
const ImageSection = () => {
    return (
        <div className="image-section-wrapper">
        <section className="page-content">
            <div className="container">
                <div>
                    <img className="image-section" src={green} alt=""/>
                </div>
                <div className="section-text">
                <h1>Creative Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </section>
        </div>
    );
}

export default ImageSection;