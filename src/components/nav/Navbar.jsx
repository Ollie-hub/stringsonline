import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Logo } from '../../images/Logo.svg'
import './navbar.scss'


export function Navigation() {

  const [open, setOpen] = useState(false);
  const toggleClass = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <img src={Logo} alt="logo" className="logo"></img>
      <button onClick={() => toggleClass()} className="hamburger" >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`nav-ul ${open === true ? 'show' : ''}`}>
        <li className="link"><Link to="/forside">Forside</Link></li>
        <li className="link"><Link to="/2">Salgs- og handelsbetingelser</Link></li>
        <li className="link"><Link to="/3">Login</Link></li>
      </ul>

      <section>

      </section>
    </nav >
  )
}
