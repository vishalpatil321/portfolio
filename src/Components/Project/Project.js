import { ProjectContainer } from "../Project-container";
import "./Project.css";
import calculator from "../../assets/calculator.png"
import frontend from "../../assets/frontend.png"
import todoapp from "../../assets/todoapp.png"
import cricket from "../../assets/cricket.png"
import { Footer } from "../Footer";


export const Project = () => {
    const project = [
        {
            image: calculator,
            name: "Calculator",
            git_url: "https://github.com/vishalpatil321/Responsive-calculator",
            live_url: "https://vishalpatil321.github.io/Responsive-calculator/",


        },
        {
            image: frontend,
            name: "Frontend",
            git_url: "",
            live_url: "https://vishalpatilfirstwebsite.000webhostapp.com/index.html",


        },
        {
            image: todoapp,
            name: "To-do app",
            git_url: "https://github.com/vishalpatil321/Responsive-To-do-app",
            live_url: "https://vishalpatil321.github.io/Responsive-To-do-app/",


        },
        {
            image: cricket,
            name: "Cricket game",
            git_url: "https://github.com/vishalpatil321/Cricket-game",
            live_url: "https://vishalpatil321.github.io/Cricket-game/",


        }
    ]
    return(
        <>
        <div className="heading1">
                    <p>Browse My Recent</p>
                    <h2>Projects</h2>
                </div>
        <div className="project-container1">
            <div className="project-container2">
              {project.map((item) =>  <ProjectContainer name={item.name} image={item.image} gitUrl={item.git_url} liveUrl={item.live_url}/>)}
            </div>
        </div>
        <hr/>
        <Footer/>
        </>
    )
}