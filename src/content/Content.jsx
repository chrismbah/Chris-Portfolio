import React from 'react'
import "./Content.css"
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Home'

export default function Content() {
  return (
    <main className='content'>
        <Nav/>
        <Home/>
    </main>
  )
}
