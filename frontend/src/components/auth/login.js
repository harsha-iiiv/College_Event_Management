import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userlogin } from "../../actions/auth";
import { userlogout } from "../../actions/auth";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";

const ULogin = ({ userlogin, userlogout, isUserAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [formValid, setformValid] = useState({
    isValid: true
  });
  
  const { email, password } = formData;

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
    userlogin(email, password);
  };

  if (isUserAuthenticated) {
    return (
      <div>
      <Redirect to='/' />
      </div>
    );
  }

  const testLog = (
    <div class="container adminlogin">
      <Form onSubmit={e => onSubmit(e)} className="login-form">
        <Form.Item style={{ width: "30%" }}>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="email"
            placeholder="input email id"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
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
            required
          />
        </Form.Item>
        {/* {errors.length > 0 ? <span>{errors[0]}</span> : ""} */}
        <Form.Item style={{ width: "30%" }}>
          <Link to="/forgotpassword">
            Forgot password
          </Link>
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
    </div>
  );

  return (
    <Fragment>
      <h1 className="large text-primary">Login</h1>
     
      {testLog}
    </Fragment>
  );
};

ULogin.propTypes = {
  userlogin: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isUserAuthenticated: state.auth.isUserAuthenticated
});

export default connect(
  mapStateToProps,
  { userlogin, userlogout }
)(ULogin);
