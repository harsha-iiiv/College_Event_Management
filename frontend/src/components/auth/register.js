import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { Form, Icon, Input, Button, Checkbox } from "antd";


const Register = ({ setAlert, register, isUserAuthenticated}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
   const [formValid, setformValid] = useState({
     isValid: true
   });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isUserAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>

      <div className="container adminlogin">
        <Form onSubmit={e => onSubmit(e)} className="login-form">
          <Form.Item className="fitem" style={{ width: "30%" }}>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="name"
              placeholder="input username"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </Form.Item>
          <Form.Item className="fitem" style={{ width: "30%" }}>
            <Input
              prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
              required
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />
          </Form.Item>
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
              Sign up
            </Button>
          </Form.Item>
        </Form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isUserAuthenticated: state.auth.isUserAuthenticated,
  
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
