import React from 'react'
import Project from './Project';

//images
import tictactoe from "../images/projects/tic-tac-toe.png";

export default function ProjectGrid() {
  return (
    <div id="projects-grid">
      <div id="projects-grid-container">
        <h1>Projects</h1>
        <Project data={{name: "Tic Tac Toe", img: tictactoe, url: "https://joshiiwoshi-tic-tac-toe.herokuapp.com"}}/>
      </div>
    </div>
  )
}
