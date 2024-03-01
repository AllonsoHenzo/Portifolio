import React from 'react'
import './Navbar.css'

const navbar = () => {
  return (
    <>
      <nav className='nav-wrapper'>
        <div className="nav-content">
          <img className='logo' src="./assets/images/logo.png" alt="logo" />

          <ul>
            <li>
              <a className='menu-item'>Home</a>
            </li>
            <li>
              <a className='menu-item'>Skills</a>
            </li>
            <li>
              <a className='menu-item'>Experiência</a>
            </li>
            <li>
              <a className='menu-item'>Fale comigo!</a>
            </li>

            <button className='contato-btn' onclick={() => {}}> Fale comigo! </button>
          </ul>
        </div>
      </nav>
    
    </>
  )
}

export default navbar