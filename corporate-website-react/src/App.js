import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Article from "./components/Article";

function App() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog/:id" element={<Article/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
