
import React from 'react';
import './footer.css';
import { useAppContext } from 'context/AppContext';

const Footer = () => {
  const { appName } = useAppContext();
  return (
    <footer className="footer">
      <p>© 2024 {appName}. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;