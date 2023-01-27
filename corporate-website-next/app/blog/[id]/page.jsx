import Articles from '../../../data/articles.json'
function getArticle(articleId){
    const article = Articles.find(el => el.id === articleId)
    return article
}

const Article = ({params}) => {

    const article = getArticle(params.id)
    console.log("Hello")

    return(
        <section className="page-content">
            <div className="container">
                <div className="card">
                    <h3>{article.title}</h3>
{/*                    TODO: Add Image to article
                    <img src={require("../../assets/blog/" + image)} style={imageStyle} alt=""/>*/}
                    <p>{article.body}</p>
                </div>
            </div>
        </section>
    )

}

export default Article