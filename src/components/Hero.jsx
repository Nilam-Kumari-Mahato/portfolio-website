import Nav from "./Nav"

export default function Hero(){
    return(
        <section className="body" id="body">
            <Nav />
            <section className="Hero">
                <div className="detail">
                    <h1>Hello I'm</h1>
                    <h1>Nilam Kumari Mahato</h1>
                    <h2>Frontend Web Developer.</h2>
                    <h3>Aspiring Full Stack Developer</h3>
                </div>
                <div className="profilepic">
                    <img src="nilam1.png" alt="profile picture" />
                </div>
            </section>
        </section>
    )
}