import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { logout } from "../../actions/auth";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";

const Login = ({ login, logout, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });
  const [formValid, setformValid] = useState({
    isValid: true
  });

  const { name, password } = formData;

  const onChange = e => {
    // if (name.length < 5) {
    //   errors[0] = "name sholud be atleast 5 letters";
    //   setformValid({
    //     ...formValid,
    //     isValid: !formValid.isValid
    //   });
    // }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(name, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/admin" />
  }
  var errors = [];

  const testLog = (
    <Form onSubmit={e => onSubmit(e)} className="login-form">
      <Form.Item style={{ width: 250 }}>
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
      <Form.Item style={{ width: 250 }}>
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
      {/* {errors.length > 0 ? <span>{errors[0]}</span> : ""} */}
      <Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        <Button
          type="primary"
          disabled={!formValid.isValid}
          htmlType="submit"
          className="login-form-button"
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );

  return <Fragment>{testLog}</Fragment>;
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login, logout }
)(Login);


