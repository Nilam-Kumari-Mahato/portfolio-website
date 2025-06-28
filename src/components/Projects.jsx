import Nav from "./Nav"

export default function Projects(){
    return(
        <section className="projects" id="projects">
            <Nav />
            <h1>Projects</h1>
            <div className="project-grid">
                <div className="project-card">
                    <video src="/Screen Recording 2025-06-25 190754.mp4" controls ></video>
                    <p> <b><u>Zomato UI Clone </u></b>- Frontend UI Project
                    This project is a frontend user interface clone of the Zomato app, replicating its clean and user-friendly design. It includes the landing page with location selection, search bar, food categories, and featured restaurant cards, closely resembling the real Zomato experience.</p>
                    <a href="https://github.com/Nilam-Kumari-Mahato/Zomato-Ui-Clone">View Code</a>
                </div>
                <div className="project-card">
                    <img src="/Screenshot 2025-05-16 000850.png" alt="meal planner" />
                    <p>
                        <b><u>Meal Planner</u></b> -
                        A responsive web application that generates personalized daily meal plans based on user input such as age, gender, height, weight, dietary preference, and fitness goals. This project integrates the Edamam Meal Planning API to deliver a tailored four-meal plan (breakfast, lunch, snack, and dinner), supporting users in maintaining a healthy lifestyle.
                    </p>
                    <a href="https://www.linkedin.com/posts/nilam-kumari-mahato-5a2710307_reactjs-webdevelopment-frontenddevelopment-activity-7326307970512756736-K8LJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE482EoB-ktsXhZJq2SIh_TKdqP9tw_QgZ8">Live Demo</a>
                    <a href="https://github.com/Nilam-Kumari-Mahato/meal-planner-vite-react">View Code</a>
                </div>
            </div>
        </section>
    )
}