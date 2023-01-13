import './ImageSection.css'
const ImageSection = (props) => {

    const imageIsLeft = props.imageIsLeft
    const image = props.imageSrc

    return (
        <div className="image-section-wrapper">
        <section className="page-content">
            <div className="container">
                {imageIsLeft && <div>
                    <img className="image-section image-section-left" src={require("../../assets/blog/" + image)} alt=""/>
                </div>}
                <div className="section-text">
                <h1>Creative Solutions</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                {!imageIsLeft && <div>
                    <img className="image-section image-section-right" src={require("../../assets/blog/" + image)} alt=""/>
                </div>}
            </div>
        </section>
        </div>
    );
}

export default ImageSection;