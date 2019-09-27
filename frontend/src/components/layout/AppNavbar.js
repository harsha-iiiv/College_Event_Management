import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const AppNavbar = ({ auth: { isAuthenticated, isLoading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/admin/dashboard_admin">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/create_event">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Create Event</span>
        </Link>
      </li>
      <li>
        <Link to="/admin" onClick={logout} href="#!">
          
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
        <Link to="/admin/login">Login</Link>
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
      {!isLoading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

AppNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(AppNavbar);
