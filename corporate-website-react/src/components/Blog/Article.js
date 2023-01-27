import {useParams} from "react-router-dom";
import Articles from '../../data/articles.json'
import {useEffect, useState} from "react";
import ArticleDetail from "./ArticleDetail";

const Article = () => {

    const { id } = useParams()
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const article = Articles.find(el => el.id === id)
        setArticle(article)
        setIsLoading(false)
    }, [id]);

    return (
        <section className="page-content">
            <div className="container">
                {/*Is important to wait for articles to render*/}
                { isLoading && <p>Is loading...</p>}
                { article && <ArticleDetail articleTitle={article.title} articleImage={article.image} articleBody={article.body} />}
            </div>
        </section>
    );
}

export default Article;