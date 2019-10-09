import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { userlogout } from "../../actions/auth";
import { register } from './../../actions/auth';
const AppNavbar = ({ auth: { isAuthenticated, isUserAuthenticated,  isLoading, isUserLoading }, logout, userlogout, }) => {
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
  const userauthLinks = (
    <ul>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      {/* <li>
        <Link to="/admin/create_event">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm"></span>
        </Link>
      </li> */}
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
        <Link to="/admin/login">Login</Link>
      </li>
     
    </ul>
  );
  const userguestLinks = (
    <ul>
    

      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Sign Up</Link>
      </li>
    </ul>
  );
var res 
  if(!isUserLoading)
  {
    if(isUserAuthenticated){
       res = userauthLinks
    }
    else
      res = userguestLinks 
  }
 

  return (
   
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Event Management
        </Link>
      </h1>
     {res}
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
  { logout, userlogout }
)(AppNavbar);
