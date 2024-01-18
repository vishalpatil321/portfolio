import { Footer } from "../Footer";
import { SkillContainer } from "../Skill-container";
import "./Skills.css";

export const Skills = () => {
    const skill = [
        {
           name : "HTML",
           text : "With Project",
           percentage: 80,
        },
        {
            name : "CSS",
            text : "With Project",
            percentage: 60,

         },
         {
            name : "Bootstrap",
            text : "With Project",
            percentage: 70,
         },
         {
            name : "JavaScript",
            text : "With Project",
            percentage: 70,
         },
         {
            name : "React js.",
            text : "With Project",
            percentage: 65,
         },
         {
            name : "Node js.",
            text : "Basic",
            percentage: 50,
         },
         {
            name : "C",
            text : "Intermediate",
            percentage: 60,
         },
         {
            name : "C++",
            text : "With Project",
            percentage: 80,
         },
        
    ]
    
    return(
      <>
        <div className="heading1">
            <p>I Have Some</p>
            <h2>Hard Skills</h2>
         </div>
        <div className="container">
         <div className="skills">
            {skill.map((item) => <SkillContainer text={item.text} name={item.name} percentage={item.percentage}/>)}
         </div>
        </div>
        <hr/>
        <Footer/>
      </>
       )
};