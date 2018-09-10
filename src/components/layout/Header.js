import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  // Destructing so you don't have to write props prefix.
  // Dumb component doesn't need this.
  const { branding } = props;
  return (
    <nav
      className="navbar navbar-expand-sm 
        navbar-dark bg-danger mb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Default properties in case nothing is passed in from parent.
Header.defaultProps = {
  branding: "My App"
};

// Tell the user what args. to input.
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
