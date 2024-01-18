import { NavLink} from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import './Navbar.css';
import { useState } from "react";
export const Navbar = () => {

   const [showmenu , setShowmenu] = useState(false);
    return(
        <nav>
         <div className="my-name">
            <h3 >Vishal Dhone</h3>
            <button className="bar" onClick={() => {
                setShowmenu(!showmenu);
            }}><FaBars /></button>
         </div>
          <div className={showmenu ? "options-mobile-menu" : "options"}>
           <NavLink className="menu" to='/About'>About me</NavLink>
           <NavLink className="menu" to='/Skills'>Skills</NavLink>
           <NavLink className="menu" to='/Project'>Projects</NavLink>
           
          </div>
        </nav>
    );
};