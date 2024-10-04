import React from 'react';
import './header.css'
import { useAppContext } from 'context/AppContext';
import Logo from 'components/Logo';

const Header = ({ toggleSidebar }) => {
  const { appName } = useAppContext();
  return (
    <header className="header">
       <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <h1>{appName}</h1>
      <Logo/>
    </header>
  );
};

export default Header;
