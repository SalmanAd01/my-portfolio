import { useState } from "react";
import NavBar from "../NavBar/Index";

const Right = ({ active, setActive }) => {
  return (
    <>
      <div className={"responsive-sidebar-menu " + (active ? "active" : "")}>
        <div
          className="overlay"
          onClick={() => {
            setActive(false);
          }}
        ></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              <li>
                <a
                  className="scroll-to"
                  href="#home"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  <i className="las la-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  className="scroll-to"
                  href="#about"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  <i className="lar la-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a
                  className="scroll-to"
                  href="#resume"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  <i className="las la-briefcase"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a
                  className="scroll-to"
                  href="#skills"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  <i className="las la-shapes"></i> <span>Skills</span>
                </a>
              </li>
              <li>
                <a
                  className="scroll-to"
                  href="#portfolio"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  <i className="las la-grip-vertical"></i>{" "}
                  <span>Portfolios</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              <li>
                <a
                  href="https://twitter.com/AdhikariSalman?t=RxCEcOAXyNev9pp2-HWnxQ&s=09"
                  target="_blank"
                >
                  <i className="lab la-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/SalmanAd01" target="_blank">
                  <i className="lab la-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/salman-adhikari-a938911bb/h"
                  target="_blank"
                >
                  <i className="lab la-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NavBar />
      <div className="left-sidebar">
        <div className="sidebar-header d-flex align-items-center justify-content-between">
          <h1 className="logo">Salman</h1>
          <span className="designation">Third Year Student | B.E IT</span>
        </div>
        <img className="me" src="images/me.jpg" alt="Me" />
        <h2 className="email">salmanadhikari415@gmail.com</h2>
        <h2 className="address">Navi Mumbai, India</h2>

        <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <a
              href="https://twitter.com/AdhikariSalman?t=RxCEcOAXyNev9pp2-HWnxQ&s=09"
              target="_blank"
            >
              <i className="lab la-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/salman-adhikari-a938911bb/"
              target="_blank"
            >
              <i className="lab la-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/SalmanAd01/" target="_blank">
              <i className="las la-code"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/SalmanAd01" target="_blank">
              <i className="lab la-github"></i>
            </a>
          </li>
        </ul>
        <a href="" className="theme-btn">
          <i className="las la-envelope"></i> Contact Me!
        </a>
      </div>
    </>
  );
};

export default Right;
