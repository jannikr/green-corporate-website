import Articles from '../../data/articles.json'
import {Link} from "react-router-dom";

const Blog = () => {

    return (
        <section className="page-content">
            <div className="container">
                {Articles.map(a => (
                    <div className="card" key={a.title}>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                        <Link to={`/blog/${ a.id }`}>Read more...</Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;