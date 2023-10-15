import React,{useEffect,useRef, useState} from 'react'
// import { TypeAnimation } from 'react-type-animation';
import "./Home.css"
import Illustration from "../../assets/Illustration2.svg"
import Linkedin from '../Icons/Linkedin'
import Gmail from "../Icons/Gmail"
import Github from "../Icons/Github"
import NavUp from "../Icons/NavUp"
export default function Home() {
  const [ isVisible, setIsVisible] = useState(false)

  useEffect(()=>{
    function handleScroll(){
      setIsVisible(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <section className='home'>
      <div className='home-text'>
        <h1>Hey there 👋,</h1>
        <h1 className='name'>I'm Chris Mbah</h1>
        <h2>a <span> Software Developer</span></h2>
        <div className="info">
         <p>High level experience in Web   Design and Development Knowledge,<br/>
          producing pixel perfect designs.</p> 
         <p>I transform your concepts into reality.</p>
        </div>
        <div className="home-links">
          <div className="btn github"><Github/></div>
          <div className="btn linkedin"><Linkedin/></div>
          <div className="btn gmail"><Gmail/></div>
        </div>
        <div className="resume">
          <button className="contact-btn">
            <a href="">Download CV</a>
          </button>
        </div>
      </div>
      <div className='home-img'>
        <img src={Illustration}/>
      </div>
      <div className={`nav-up ${isVisible?"nav-visible": ""}`}>
        <a href="#"><NavUp/></a> 
      </div>
    </section>
  )
}
