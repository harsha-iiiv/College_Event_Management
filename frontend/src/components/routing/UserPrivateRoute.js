import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const UserPrivateRoute = ({
  component: Component,
  auth: { isUserAuthenticated, isUserLoading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isUserAuthenticated && !isUserLoading ? (
        <Redirect to='/' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

UserPrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UserPrivateRoute);
