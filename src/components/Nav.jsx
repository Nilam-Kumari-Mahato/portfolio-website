import About from "./About"
import Hero from "./Hero"

export default function Nav(){
    return(
        <div className="nav">
            <a href="#body">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    )
}