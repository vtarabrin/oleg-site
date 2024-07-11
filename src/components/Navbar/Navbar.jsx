import './Navbar.css';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <ul>
          <li className="active">
            <CustomLink to="/home">ГЛАВНАЯ </CustomLink>
          </li>
          <li className="active">
            <CustomLink to="/about">О нас</CustomLink>
          </li>
          <li className="active">
            <CustomLink to="/contacts">Контакты </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
