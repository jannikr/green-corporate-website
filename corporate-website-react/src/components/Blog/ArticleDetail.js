const ArticleDetail = (props) => {

    const title = props.articleTitle;
    const image = props.articleImage
    const body = props.articleBody;

    // TODO: Replace this with external file
    const imageStyle = {
        width: "450px"
    };

    return (
        <div>
            <div className="card">
                <h3>{title}</h3>
                <img src={require("../../assets/blog/" + image)} style={imageStyle} alt=""/>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default ArticleDetail;