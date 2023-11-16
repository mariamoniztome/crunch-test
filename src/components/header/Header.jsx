/**
 * A functional component that represents the header section of a website.
 * @returns The JSX code for the header section.
 */
import React from 'react';
import './header.scss';

// Import the logo image
import logo from '../../assets/img/logo.svg'; 

const Header = () => {
  return (
    <header className="header">
   
      <div className="header__inner">
        <div className="header__logo">
            <img src={logo} alt="Logo" />
        </div>
        {/* <nav className="header__nav">
          <ul>
            <li><a href="/">Slots</a></li>
            <li><a href="#">Jogos de Mesa</a></li>
            <li><a href="#">Apostas Desportivas</a></li>
            <li><a href="#">Apostas ao Vivo</a></li>
          </ul>
        </nav> */}
       
      </div>
      <div className="header__user">
        
            <div className='btn btn-secondary'>Login</div>
            <div className='btn btn-primary'>Registo</div>
          
        </div>
    </header>
  );
};

export default Header;

