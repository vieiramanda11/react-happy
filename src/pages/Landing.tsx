import React from "react";
import '../styles/pages/landing.css';
import logoImg from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo happy"></img>

        <main>
          <h1>Bring happiness to the world</h1>
          <p>Visit orphanages and change many children's day.</p>
        </main>
        <div className="location">
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
