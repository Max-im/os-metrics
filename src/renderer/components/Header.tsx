import * as React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import '../styles/headers.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {routes
          .filter((route) => route.inMenu)
          .map((route) => (
            <button key={route.url} className="button">
              <NavLink
                to={route.url}
                className={({ isActive }) =>
                  isActive ? 'navLink__active navLink' : 'navLink'
                }
              >
                {route.title}
              </NavLink>
            </button>
          ))}
      </nav>
    </header>
  );
}
export default Header;
