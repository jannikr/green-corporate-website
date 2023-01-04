import {useParams} from "react-router-dom";
import Articles from '../../data/articles.json'
import {useEffect, useState} from "react";
import Card from "../Home/Card";

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
                { isLoading && <p>Is loading...</p>}
                TODO: Create new component for article-detail
                { article && <Card featureTitle={article.title} featureBody={article.body} />}
            </div>
        </section>
    );
}

export default Article;