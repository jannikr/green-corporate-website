import React from "react";
import Articles from '../../data/articles.json'
import Image from "next/image";
import { useRouter } from 'next/router'

export function getArticle() {

    const router = useRouter()
    const { id } = router.query
    const article = Articles.find(el => el.id === id)
    return article
}

// TODO: Enable SSG for each blog article
export async function generateStaticParams() {
    return Articles.map(article => ({
        id: article.id
    }))
}

const Article = () => {

    const article = getArticle()

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