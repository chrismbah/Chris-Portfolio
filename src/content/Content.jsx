import React from 'react'
import "./Content.css"
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Home'
import About from "../components/About/About"
import Skills from '../components/Skills/Skills'

export default function Content() {
  return (
    <main className='content'>
        <Nav/>
        <Home/>
        <About/>
        <Skills />
    </main>
  )
}
