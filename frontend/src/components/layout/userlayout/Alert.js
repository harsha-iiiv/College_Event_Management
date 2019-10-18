import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { message, Button } from "antd";
import uuid from "uuid";

 const id = uuid.v4();

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
  return <span key={id}> {error1(alert.msg)}</span>
  if(alert.alertType==='success')
   return <span key={id}> {success(alert.msg)}</span>;
   else
  return <span key={id}> {warning()}</span>;

  }
  );

Alert.propTypes = {
  error: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

export default connect(mapStateToProps)(Alert);
