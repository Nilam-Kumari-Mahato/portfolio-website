import Nav from "./Nav"

export default function About(){
    return(
        <section className="about" id="about">
            <Nav />
            <section >
                <h1>About Me</h1>
                <div>
                    <p>
                        Hello! I'm Nilam Kumari, an aspiring <strong>Full Stack Developer</strong> with a passion for building responsive, user-friendly web applications. Currently pursuing my engineering degree , I’m actively expanding my skills to become a complete <strong>Full stack developer</strong>.
                    </p>
                    <br />
                    <p>
                        My goal is to work as a software developer in, combining modern design with robust functionality to create impactful digital experiences. 
                    </p>
                    <br />
                    <p>
                        When I’m not coding, I enjoy exploring tech trends, contributing to open source, and constantly challenging myself to learn more. I value <strong>clean code, collaboration, and continuous growth</strong>.
                    </p>
                </div>
            </section>
        </section>
    )
}