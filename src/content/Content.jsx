import React from 'react'
import "./Content.css"
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Home'
import About from "../components/About/About"

export default function Content() {
  return (
    <main className='content'>
        <Nav/>
        <Home/>
        <About/>
    </main>
  )
}
