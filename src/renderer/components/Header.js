import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/headers.css';

const links = [
  { url: '/', title: 'OS-Metrics' },
  { url: '/settings', title: 'Settings' },
];

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {links.map((link) => (
          <NavLink
            key={link.url}
            to={link.url}
            className={({ isActive }) =>
              isActive ? 'navLink__active navLink' : 'navLink'
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
export default Header;
