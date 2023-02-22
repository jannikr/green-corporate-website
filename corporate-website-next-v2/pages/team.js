import React from "react";

// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const team = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            team,
        },
    }
}

const Team = ({ team }) => {

    return (

        <section className="page-content">
            <div className="container">
                <h2 id="team-title">Our team</h2>
                {team.map(a => (
                    <div className="card" key={a.id}>
                        <h3>{a.name}</h3>
                        <p>{a.email}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;