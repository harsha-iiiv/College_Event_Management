import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Admin = ({
  auth: { isAuthenticated, isLoading},
  logout,
}) => {
  // const authLinks = (
  //   <ul>
  //     <li>
  //       <Link to="/admin/dashboard_admin">
  //         <i className="fas fa-user" />{" "}
  //         <span className="hide-sm">Dashboard</span>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link to="/admin/create_event">
  //         <i className="fas fa-user" />{" "}
  //         <span className="hide-sm">Create Event</span>
  //       </Link>
  //     </li>
  //     <li>
  //       <Link to="/admin" onClick={logout} href="#!">
  //         <i className="fas fa-sign-out-alt" />{" "}
  //         <span className="hide-sm">Logout</span>
  //       </Link>
  //     </li>
  //   </ul>
  // );
 
  // const guestLinks = (
  //   <ul>
  //     <li>
  //       <Link to="/events">Events</Link>
  //     </li>
  //     <li>
  //       <Link to="/admin/login">Login</Link>
  //     </li>
  //   </ul>
  // );
 
  // var res;
  // if (!isLoading) {
  //   if (isAuthenticated) {
  //     res = authLinks;
  //   } else res = guestLinks;
  // }

  return (
    <div className="container">
      <h3> This is where you can manage events</h3>
    </div>
  );
};

Admin.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Admin);
