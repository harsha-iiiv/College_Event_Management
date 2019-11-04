import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { resetpassword } from "../../actions/auth";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const Pass_reset = ({ setAlert, resetpassword, resetLink, isUserAuthenticated, match }) => {
  const [formData, setFormData] = useState({
   
    password: "",
    password2: ""
  });
  const [formValid, setformValid] = useState({
    isValid: true
  });

  const { password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      resetpassword(password, match.params.token);
    }
  };

//   if (isUserAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>

      <div className="container adminlogin">
        <Form onSubmit={e => onSubmit(e)} className="login-form">
          <Form.Item style={{ width: "30%" }}>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </Form.Item>
          <Form.Item style={{ width: "30%" }}>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              minLength="6"
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
            />
          </Form.Item>
          <Form.Item style={{ width: "30%" }}>
            <Button
              type="primary"
              disabled={!formValid.isValid}
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
};


const mapStateToProps = state => ({
  resetLink: state.auth.resetLink,
  isUserAuthenticated: state.auth.isUserAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, resetpassword }
)(Pass_reset);
