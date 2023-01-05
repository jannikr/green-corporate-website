import {useEffect, useState} from "react";

const Team = () => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setUsers(data)
            })
    }, []);

    return (
        <section className="page-content">
            <div className="container">
                <h2>Our team</h2>
                { users && users.map(a => (
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