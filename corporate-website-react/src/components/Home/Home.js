import Showcase from "./Showcase";
import Features from "./Features";
import Tabs from "./Tabs";
import ImageSection from "./ImageSection";

const Home = () => {
    return (
        <div>
            <Showcase/>
            <Features/>
            <section className="page-content">
                <div className="container">
                    <h2>Get Started With Astro</h2>
                    <p>
                        Get a new Astro project up and running locally with our helpful
                        create-astro CLI wizard!
                    </p>
                    <Tabs tabTitle={["NPM", "PNPM", "YARN"]}
                          tabBody={["$ npm create astro@latest", "$ pnpm create astro@latest", "$ yarn create astro"]}
                    />
                    <h3>Start Building</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
                        deserunt inventore ut voluptate, officia maiores repellat tenetur
                        praesentium omnis est ex tempora a necessitatibus reiciendis at et
                        dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
                        laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
                        iusto error molestias dolorum, necessitatibus labore?
                    </p>
                </div>
            </section>
            <ImageSection imageIsLeft={false} imageSrc={"sky-loop.jpg"}/>
            <section className="page-content">
                <div className="container">
                    <h3>Lorem ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
                        deserunt inventore ut voluptate, officia maiores repellat tenetur
                        praesentium omnis est ex tempora a necessitatibus reiciendis at et
                        dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
                        laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
                        iusto error molestias dolorum, necessitatibus labore?
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
                        deserunt inventore ut voluptate, officia maiores repellat tenetur
                        praesentium omnis est ex tempora a necessitatibus reiciendis at et
                        dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
                        laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
                        iusto error molestias dolorum, necessitatibus labore?
                    </p>
                </div>
            </section>
            <ImageSection imageIsLeft={true} imageSrc={"ash-from.jpg"}/>

        </div>
    );
}

export default Home;