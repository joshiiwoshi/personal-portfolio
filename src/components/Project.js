import React from 'react'

export default function Project(props) {
  console.log(props.data);

  function projectClick() {
    window.open(props.data.url, "_blank")
  }

  return (
    <div className="project">
      <div className="project-container" onClick={projectClick}>
        <div className="img-container">
          <img src={props.data.img} alt={props.data.name}></img>
        </div>
        <p>{props.data.name}</p>
      </div>
    </div>
  )
}
