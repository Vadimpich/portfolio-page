import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Header} from './components/header/Header.jsx'
import {Skills} from "./components/skills/Skills.jsx";
import {Projects} from "./components/projects/Projects.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
    console.log('Welcome, Stranger! :)')
    return (
        <>
            <Header/>
            <Contact/>
            <Skills/>
            <Projects/>
            <Footer/>
        </>
    )
}

export default App
