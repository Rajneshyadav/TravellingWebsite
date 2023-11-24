// Importing necessary libraries and styles
import  React, {useState , useEffect } from "react";
import "./navbar.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
 
// Navbar Component
const Navbar = () => {
  
  // Initialize AOS library on component mount
    useEffect( () =>{
        Aos.init({duration:2000})
     }, [])    

  // State to manage the active class for Navbar
  const [active, setActive] = useState('navBar')

  // Function to toggle Navbar Display
  const showNav = () =>{
      setActive('navBar acitveNavbar');
  }

  // Function to toggle Navbar to hide
  const removeNavbar = () =>{
          setActive('navBar ');
      }

  return (
    <section   className="navBarSection">
      <header className="header flex">

        <div   className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon" /> Travel </h1>
         </a>
        </div>

        <div   className={active}>

          {/* Navigation List */}
          <ul className="navLists flex">
            <li className="navItem"><a href="#" className="navLink"> Home </a></li>
            <li className="navItem"><a href="#" className="navLink"> Packages </a></li>
            <li className="navItem"><a href="#" className="navLink"> Shop </a></li>
            <li className="navItem"><a href="#" className="navLink"> About </a></li>
            <li className="navItem"><a href="#" className="navLink"> Pages </a></li>
            <li className="navItem"><a href="#" className="navLink"> News </a></li>
            <li className="navItem"><a href="#" className="navLink"> Contact </a></li>
            <button className="btn"><a href="#">BOOK NOW</a></button>
          </ul>
         
          {/* Close Navbar Button */}
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        {/* Toggle Navbar Button */}
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>

      </header>
    </section>
  );
};

export default Navbar;
