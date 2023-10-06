import React,{useEffect,useRef} from 'react'
// import { TypeAnimation } from 'react-type-animation';
import "./Home.css"

export default function Home() {
  return (
    <section className='home'>
      <div className='home-text'>
        <h1>Hey there 👋,</h1>
        <h1 className='name'>I'm Chris Mbah</h1>
        <h2>a <span> Front-End Engineer</span></h2>
        <p>High Level Experience in web design and development knowledge, producing quality work</p>
        <p>I transform your concepts into reality.</p>
      </div>
      <div>
        {/* <img src="../../assets/Illustration.svg"/> */}
      </div>
    </section>
  )
}
