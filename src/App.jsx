import SectionWrapper from "./components/Sectionwraper"     
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

export default function App(){
    return(
        <>
            <SectionWrapper><Hero /></SectionWrapper>
            <SectionWrapper><About /></SectionWrapper>
            <SectionWrapper><Skills /></SectionWrapper>
            <SectionWrapper><Projects /></SectionWrapper>
            <Contact />
        </>
    )
}