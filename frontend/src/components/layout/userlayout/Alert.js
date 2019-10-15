import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { message, Button } from "antd";
const success = (msg) => {
  message.success(msg);
};

const error1 = (msg) => {
  message.error(msg);
};
const warning = () => {
  message.warning("Something went wrong");
};

const Alert = ({ error }) =>
  error !== null &&
  error.length > 0 &&
  error.map(alert => {
  if(alert.alertType==='danger')
  return <span> {error1(alert.msg)}</span>
  if(alert.alertType==='success')
   return  <span> {success(alert.msg)}</span>;
   else
  return  <span> {warning()}</span>;

  }
  );

Alert.propTypes = {
  error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(Alert);
