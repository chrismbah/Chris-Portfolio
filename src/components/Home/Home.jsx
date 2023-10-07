import React,{useEffect,useRef} from 'react'
// import { TypeAnimation } from 'react-type-animation';
import "./Home.css"
import Illustration from "../../assets/Illustration2.svg"
import Linkedin from '../Icons/Linkedin'
export default function Home() {
  return (
    <section className='home'>
      <div className='home-text'>
        <h1>Hey there 👋,</h1>
        <h1 className='name'>I'm Chris Mbah</h1>
        <h2>a <span> Front-End Developer</span></h2>
        <div className="p-tags">
         <p>High Level Experience in web design and development knowledge,<br/> producing quality work.</p>
         <p>I transform your concepts into reality.</p>
        </div>
        <div className="links">
          <div className="btn github"></div>
          <div className="btn linkedin"><Linkedin/></div>
          <div className="btn gmail"></div>
        </div>
        <div className="resume">
          <div className="resume-btn">

          </div>
        </div>
      </div>
      <div className='home-img'>
        <img src={Illustration}/>
      </div>
    </section>
  )
}
