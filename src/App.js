import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/navigation";
import Contacts from "./components/pages/Contacts";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";
import "./styles/main.css";
import ScrollToTop from "./scroll/scrollToTop";

function App() {
  return (
    <div className="App">
    <Router>
      <ScrollToTop/>
      <Nav/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/projects' element ={<Projects/>}/>
        <Route path='/project/:id' element ={<Project/>}/>
        <Route path='/contacts/' element ={<Contacts />}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
