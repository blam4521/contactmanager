import React from "react";
import PropTypes from "prop-types";

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
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Default properties in case nothing is passed in from parent.
Header.defaultProps = {
  branding: "my App"
};

// Tell the user what args. to input.
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
