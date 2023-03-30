import React from 'react';
import logo from '../assets/logo.png';
import '../styles/components/Header.sass';

export default function Header() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <a className="navbar" href="#">
            Login
          </a>
        </li>
        <li>
          <a className="navbar" href="#">
            Registrar
          </a>
        </li>
      </ul>
    </nav>
  );
}
