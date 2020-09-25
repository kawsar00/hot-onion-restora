import React from 'react';
import './Header.css'
import logo from '../../Image/random/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md px-5">
        <Link to="/" className="navbar-brand">
          <img height="50" src={logo} alt="" />
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item ">
            <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '7px' }} icon={faShoppingCart} /><span className="badge badge-danger">4</span>

              
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Login</Link>
            </li>
            <li className="nav-item">
              <button className="btn red-button">Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;