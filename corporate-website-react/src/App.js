import './App.css';
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { lazy, Suspense } from "react";

// Dynamic import
const Home = lazy(() =>import('./components/Home/Home'));
const About = lazy(() =>import('./components/About/About'));
const Team = lazy(() =>import('./components/Team/Team'));
const Blog = lazy(() =>import('./components/Blog/Blog'));
const Article = lazy(() =>import('./components/Blog/Article'));

function App() {

    return (
        <Router>
            <Navbar/>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/blog/:id" element={<Article/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </Router>
    );
}

export default App;
