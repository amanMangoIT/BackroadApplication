import React from "react";
import { pageLink, socialLink } from "../data";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img
              src="./src/assets/logo.svg"
              className="nav-logo"
              alt="backroads"
            />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLink.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLink.map((data) => {
              return (
                <li key={data.id} >
                <a
                  href={data.href}
                  target="_blank"
                  className="nav-icon"
                >
                  <i className={data.icon}></i>
                </a>
              </li>
              )
            })}
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Nav;
