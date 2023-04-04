import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '1rem',
    borderBottom: '1px solid #e9ecef',
  };

  const linkStyles = {
    color: '#212529',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyles = {
    marginRight: '0.5rem',
  };

  return (
    <header style={headerStyles}>
      <div className="logo">
        <Link to="/" style={linkStyles}>
          GoalSetter
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ display: 'flex', alignItems: 'center' }}>
          <li>
            <Link to="/register" style={linkStyles}>
              <FaUser style={iconStyles} />
              Register
            </Link>
          </li>
        </ul>
        <ul style={{ display: 'flex', alignItems: 'center' }}>
          <li>
            <Link to="/login" style={linkStyles}>
              <FaSignInAlt style={iconStyles} />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
