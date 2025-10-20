import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProductViewer from './components/ProductViewer';
import Performance from './components/Performance';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Performance />
    </main>
  )
}

export default App
