import React from 'react'

export default function Navbar() {
  return (
    <div id="navbar">
      <div id="navbar-container">
        <h1 onClick={() => window.open("https://joshiiwoshi.github.io/personal-portfolio/")}>Codie's Portfolio</h1>
        <div id="page-sections">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects-grid">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
