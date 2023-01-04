import logos from '../assets/deploy-logos.png';
import logosSmall from '../assets/deploy-logos-small.png';

const About = () => {
    return (
        <section className="page-content">
            <div className="container">
                <h2>About Astro</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vel
                    quas repudiandae optio voluptatibus dolore maxime sed nisi ad, quod
                    exercitationem. Magni facilis ducimus neque nostrum voluptas, eius,
                    aliquam ullam eligendi corporis perferendis dolor iusto veniam cumque
                    saepe iste porro, non optio amet. Enim esse porro incidunt sequi
                    consectetur vitae.
                </p>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio porro
                    sequi officia nihil optio dicta eos, cumque asperiores id harum, qui
                    quas dolorem tempore? Recusandae repudiandae magnam quae doloribus
                    impedit.
                </p>

                <div className="card">
                    <h3>Use the tools you already love</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
                        deserunt inventore ut voluptate, officia maiores repellat tenetur
                        praesentium omnis est ex tempora a necessitatibus reiciendis at et
                        dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
                        laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
                        iusto error molestias dolorum, necessitatibus labore?
                    </p>
                </div>

                <h3>Deploy to anywhere, even the edge</h3>
                <img className="logos" src={logos} alt=""/>
                <img className="logos-small" src={logosSmall} alt=""/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                    doloribus, vel ipsum mollitia aliquid cumque commodi corrupti omnis
                    ipsam sit earum, dolore quisquam harum qui non, quasi ea voluptatum
                    debitis!
                </p>


                <h3>Join our Community</h3>
                <p>
                    Join us in the Astro Discord to share with and get help from an
                    active, friendly community!
                </p>

                <ul>
                    <li>💬 Say hi in our #introduce-yourself channel!</li>
                    <li>
                        💬 Ask our Support Squad a question in our #support-threads
                        channel!
                    </li>
                    <li>
                        💬 Share what you've been working on in our #showcase channel!
                    </li>
                </ul>

            </div>
        </section>
    );
}

export default About;