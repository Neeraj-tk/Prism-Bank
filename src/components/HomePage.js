import React, { Component } from "react";
import { useNavigate } from 'react-router-dom';
import '../style/HomePage.css';


const HomePage = () => {
  const history = useNavigate();

  const handleRegistration = () => {
    history('/register');
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>WELCOME TO PRISM BANK</h1>
        <p className="slogan">Empowering Your Financial Journey, One Click at a Time</p>
      </header>
      <section className="features">
        <div className="feature">
          <img src="/images/hp1.jpg" alt="Secure Banking" />
          <h2>Secure Online Banking</h2>
          <p>Experience safe and reliable online banking services.</p>
        </div>
        <div className="feature">
          <img src="/images/hp2.jpg" alt="Mobile Banking" />
          <h2>Mobile Banking App</h2>
          <p>Bank on the go with our convenient mobile app.</p>
        </div>
        <div className="feature">
          <img src="/images/hp4.jpg" alt="Customer Support" />
          <h2>24/7 Customer Support</h2>
          <p>Our dedicated support team is here to assist you around the clock.</p>
        </div>
      </section>
      <section className="cta1">
        <h2>ABOUT US</h2>
        <p>At Prism Bank, we are dedicated to redefining the way you experience online banking. With a steadfast commitment to security, convenience, and innovation, we aim to provide you with a seamless and trustworthy financial journey. Our team of experts is driven by a passion to deliver personalized solutions that cater to your unique needs. Backed by cutting-edge technology and a user-friendly interface, Prism Bank offers a comprehensive suite of services designed to empower you in managing your finances with confidence.

With a foundation built on integrity and transparency, we strive to be your trusted partner in navigating the ever-evolving world of banking. Whether you're on the go or in the comfort of your home, Prism Bank is here to ensure that your financial aspirations are met efficiently and securely. Join us in embracing a new era of banking where your goals are our priority, and your convenience is our commitment. Welcome to Prism Bank—where modern banking meets your future.</p>
        </section>
      <section className="cta">
        <h2>Open an Account Today</h2>
        <p>Join Prism Bank and experience modern banking at your fingertips.</p>
        <button className="btn-primary" onClick={handleRegistration}>Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
