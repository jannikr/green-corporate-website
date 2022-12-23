import './App.css';
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Tabs from "./components/Tabs"

function App() {

    return (
        <div>
            <Navbar/>
            <Showcase/>
            <Features/>
            <section className="page-content">
                <div className="container">
                    <h2>Get Started With Astro</h2>
                    <p>
                        Get a new Astro project up and running locally with our helpful
                        create-astro CLI wizard!
                    </p>
                    <Tabs/>
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
        </div>
    );
}

export default App;
