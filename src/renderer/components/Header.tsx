import * as React from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import routes from '../routes';
import '../styles/headers.css';

function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <header className="header">
      <nav className="nav">
        {routes
          .filter((route) => route.inMenu)
          .map((route) => (
            <button key={route.url} type="button" className="button">
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
