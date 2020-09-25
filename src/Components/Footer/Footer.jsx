import React from 'react';
import './Footer.css';
import logo from '../../Image/random/logo2.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark mt-5 container-fluid">
      <div className="col-md-12 d-flex flex-row p-5">
        <div className="col-md-6">
          <img height="50" src={logo} alt="" />
        </div>
        <div className="col-md-3">
          <ul>
            <li><Link to="/">About Online Food</Link></li>
            <li><Link to="/">Read our blog</Link></li>
            <li><Link to="/">Sign up to deliver</Link></li>
            <li><Link to="/">Add your restaurant</Link></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
            <li><Link to="/">Get help</Link> </li>
            <li><Link to="/">Read FAQs</Link></li>
            <li><Link to="/">View all cities</Link></li>
            <li><Link to="/">Restaurant near me</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-12 pt-5 d-flex justify-content-between p-5">
        <p className="text-muted">Copyright © 2020 Online Food</p>
        <ul className="d-flex footer-last">
          <li><Link to="/">Privacy</Link></li>
          <li><Link to="/">PolicyTerms of Use</Link></li>
          <li><Link to="/">Pricing</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;