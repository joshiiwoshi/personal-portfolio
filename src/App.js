import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'
import './css/App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <ProjectGrid/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
