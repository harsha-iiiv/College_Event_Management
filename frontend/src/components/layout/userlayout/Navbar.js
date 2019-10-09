import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userlogout } from "../../../actions/auth";

const Navbar = ({ auth: { isUserAuthenticated, isUserLoading }, userlogout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard"> 
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>  
        </Link>
      </li>
      <li>
        <Link to="/events">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm"> Events</span>
        </Link>
      </li>
      <li>
        <Link to="/" onClick={userlogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Event Management
        </Link>
      </h1>
      {!isUserLoading && (
        <Fragment>{isUserAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  userlogout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { userlogout }
)(Navbar);
