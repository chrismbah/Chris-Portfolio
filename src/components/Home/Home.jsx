import React,{useEffect, useState} from 'react'
import "./Home.css"
import Illustration from "../../assets/Illustration2.svg"
import Linkedin from "../../assets/Icons/Linkedin"
import Gmail from "../../assets/Icons/Gmail"
import Github from "../../assets/Icons/Github"
import NavUp from "../../assets/Icons/NavUp"

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
        <h1 className='name'>Chris Mbah <div className="bar"></div></h1>
        <h2>a <span> Software Developer.</span></h2>
        <div className="info">
         <p>I transform your concepts into reality.</p>
        </div>
        <div className="home-links">
          <div className="btn github"><Github/></div>
          <div className="btn linkedin"><Linkedin/></div>
          <div className="btn gmail"><Gmail/></div>
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
