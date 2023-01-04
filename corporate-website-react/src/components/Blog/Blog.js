import Articles from '../../data/articles.json'

const Blog = () => {

    return (
        <section className="page-content">
            <div className="container">
                <h1>Blog</h1>
                {Articles.map(p => (
                    <div className="card" key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;