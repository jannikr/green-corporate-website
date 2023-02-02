import React from "react";
import Articles from '../../data/articles.json'
import Link from "next/link";
import Showcase from "@/app/Showcase";

const Blog = () => {
    return (
        <>
        <Showcase heading="Next Blog" text="A simple blog built with Next" showExtra={ false }/>
        <section className="page-content">
            <div className="container">
                {Articles.map(a => (
                    <div className="card" key={a.title}>
                        <h3>{a.title}</h3>
                        <p>{a.body}</p>
                        <Link href={`/blog/${ a.id }`}>Read more...</Link>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Blog;