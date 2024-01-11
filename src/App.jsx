// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Box from './Box'
import About from './About'
import Footer from './Footer'

function App() {

  return (
    <>
    <div className="body">
    <Header/>
    <Hero/>

    <div className="BoxD">
      <Box Img='./src/assets/img1.png' h1="Awsome Books" p3="Is an online library application that enables users to keep track of books in their library by adding to and removing books from a list. Built with JavaScript ES6 syntax, HTML, and CSS."/>
      <Box Img='./src/assets/img2.svg' flex="row-reverse" h1="Multi-Post Stories" p3="Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends." show="flex" Ruby="Ruby on rails"/>
      <Box Img='./src/assets/img3.svg' h1="Facebook 360" p3="Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR." show="flex" Ruby="Ruby on rails"/>
      <Box Img='./src/assets/img4.svg' flex="row-reverse" h1="Uber Navigation" p3="A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car." show="flex" Ruby="Ruby on rails"/>
    </div>

    <About/>
    <Footer/>


    </div>
    </>
  )
}

export default App
