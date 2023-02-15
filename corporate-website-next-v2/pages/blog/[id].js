import React from "react";
import Articles from '../../data/articles.json'
import Image from "next/image";

export function getStaticProps(context){
    const { params } = context
    const data = Articles.find(el => el.id === params.id)
    return {
        props: {
            article: data
        }
    }
}

export async function getStaticPaths() {
    const articlePaths = Articles.map(article => ({
        params : { id : article.id}
    }))
    return {
        paths: articlePaths,
        fallback: false,
    }
}

const Article = ({ article }) => {

    if (article) {
        return (
            <section className="page-content">
                <div className="container">
                    <div className="card">
                        <h3>{article.title}</h3>
                        <Image src={`/${article.image}`}
                               width={450}
                               height={300}
                               priority
                        />
                        <p>{article.body}</p>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="page-content">
                <div className="container">
                    <p>Page not found.</p>
                </div>
            </section>
        )
    }
}

export default Article