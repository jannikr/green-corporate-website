import React from "react";

async function getTeam(){
    // cache: 'no-store' is the equivalent to getServerSideProps. It will fetch the data on every request
    const res = fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
    const data = (await res).json()
    return data
}

const Team = async () => {

    const team = await getTeam();

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