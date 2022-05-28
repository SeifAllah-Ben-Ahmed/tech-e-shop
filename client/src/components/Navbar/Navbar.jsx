import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../features/auth/authApi';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar  card">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw246d832e/images/svg-icons/logo-gs-2.svg"
              alt="logo"
              height="30"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>
        <button
          className="btn btn-outline-danger"
          onClick={() => dispatch(logout())}
        >
          logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
