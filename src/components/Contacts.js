import React from 'react'

export default function Contacts() {
  return (
    <div id="contacts">
      <div id="contacts-container">
        <h1>Contacts</h1>
        <div id="contact-list">
          <div className="contact" onClick={() => window.open("https://github.com/joshiiwoshi", "_blank")}>
            <i className="fa-brands fa-github"></i>
            <p>GitHub</p>
          </div>
          <div className="contact" onClick={() => window.open("mailto: joshiiwoshi@gmail.com")}>
            <i className="fa-solid fa-envelope"></i>
            <p>Email</p>
          </div>
          <div className='contact'>
            <i className="fa-brands fa-discord" onClick={async () => {await navigator.clipboard.writeText("713018450838290434"); alert("Discord ID copied to clipboard!");}}></i>
            <p>Discord</p>
          </div>
        </div>
      </div>
    </div>
  )
}
