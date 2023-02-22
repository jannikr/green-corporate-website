import Articles from '../../data/articles.json'
import {Link} from "react-router-dom";
import Showcase from "../Home/Showcase";

const Blog = () => {

    return (
        <>
            <Showcase heading="React Blog" text="A simple blog built with Next" showExtra={false}/>
            <section className="page-content">
                <div className="container">
                    {Articles.map(a => (
                        <div className="card" key={a.title}>
                            <h3>{a.title}</h3>
                            <p>{a.body}</p>
                            <Link id={`blog-id-${a.id}`} to={`/blog/${a.id}`}>Read more...</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Blog;