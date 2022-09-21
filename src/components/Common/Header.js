import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/header.css';
import { SignIn } from '../Index'

export default function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            COMPANY
            <i className='fab fa-typo3' />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/lp' className='nav-navlinks' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/book/new'
                className='nav-navlinks'
                onClick={closeMobileMenu}
              >
                Register Book
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/cart'
                className='nav-navlinks'
                onClick={closeMobileMenu}
              >
                My cart
              </NavLink>
            </li>

            <li className='nav-item'>
              <div className='nav-navlinks' >
                <SignIn />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

{/* <SignIn />  */}