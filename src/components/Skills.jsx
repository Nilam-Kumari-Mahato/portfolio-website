import Nav from "./Nav"

export default function Skills(){
    return(
        <section className="skills" id="skills">
            <Nav />
            <h1>My Skills</h1>
            <section>
                
                <div className="languages">
                    <h3><u>Programming Languages</u></h3>
                    <p>C</p>
                    <p>Java</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                </div>
                <div className="framework">
                    <h3><u>Framework and Library</u></h3>
                    <p>React</p>
                </div>
                <div className="tools">
                    <h3><u>Tools</u></h3>
                    <p>Vs Code</p>
                    <p>Git & Github</p>
                </div>
            </section>
        </section>
    )
}