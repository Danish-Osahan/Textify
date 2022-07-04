import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  let navlight = {
    backgroundColor: "#9dc5c3",
    backgroundImage: "linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%)",
    
  };
  let navdark = {
    backgroundColor: "#bf3a30",
    backgroundImage: "linear-gradient(315deg, #bf3a30 0%, #864ba2 74%)",
  };

  return (
    <nav className="navbar navbar-expand-lg mb-5" style={props.mode==='Light'?navdark:navlight}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="./nav_logo.png" alt="" />
          <strong>{props.title}</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li> */}
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <strong>Enable {props.mode} Mode</strong>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
