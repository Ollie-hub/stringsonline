import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss'


export function Navigation() {

  const [open, setOpen] = useState(false);
  const toggleClass = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <img src="#" alt="logo" className="logo"></img>
      <button onClick={() => toggleClass()} className="hamburger" >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-ul ${open === true ? 'show' : ''}`}>
        <li className="link"><Link to="/forside">1</Link></li>
        <li className="link"><Link to="/2">2</Link></li>
        <li className="link"><Link to="/3">3</Link></li>
        <li className="link"><Link to="/4">4</Link></li>
      </ul>
    </nav >
  )
}
