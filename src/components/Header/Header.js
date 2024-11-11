import React from 'react';
import './header.css';
import { useAppContext } from 'context/AppContext';
import Logo from 'components/Logo';
import { getGsdUsername } from 'utils/storage';

const Header = ({ toggleSidebar, username }) => {
  const { appName } = useAppContext();
  return (
    <header className="header">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="app-info">
        <h1 className="app-name">{appName}</h1>
        <div className="user-status">
          <span className="status-dot"></span>
          <p className="username">{getGsdUsername()}</p>
        </div>
      </div>
      <Logo />
    </header>
  );
};

export default Header;
