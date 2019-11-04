import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { forgotpassword } from "../../actions/auth";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";

const ForgotPassword = ({ forgotpassword, userlogout, isUserAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const [confirmLoading, setconfirmLoading] = useState({
    loading: false
  });


  const [formValid, setformValid] = useState({
    isValid: true
  });

  const { email } = formData;
   const {loading} = confirmLoading;
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
    forgotpassword(email);
     setconfirmLoading({loading: true});
     setTimeout(() => {
       setconfirmLoading({
        
         loading: false
       });
     }, 4000);

    
  };

  if (isUserAuthenticated) {
    return (
      <div>
        Login success
        <li>
          <a onClick={userlogout} href="#!">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </div>
    );
  }

  const testLog = (
    <div className="container adminlogin">
      <Form onSubmit={e => onSubmit(e)} className="login-form">
        <Form.Item style={{ width: "30%" }}>
          <Input
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="email"
            placeholder="input email id"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </Form.Item>

        <Form.Item style={{ width: "30%" }}>
          <Button
            type="primary"
            disabled={!formValid.isValid}
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Reset
          </Button>
          <Link className="login-form-forgot" to="/signup">
            SignUp
          </Link>
        </Form.Item>
      </Form>
      ;
    </div>
  );

  return (
    <Fragment>
      <h1 className="large text-primary">Reset Password</h1>

      {testLog}
      <p>A reset link will be sent to your registered mail</p>
    </Fragment>
  );
};

// Forgotpassword.propTypes = {
//   userlogin: PropTypes.func.isRequired,
//   isUserAuthenticated: PropTypes.bool
// };

const mapStateToProps = state => ({
  isUserAuthenticated: state.auth.isUserAuthenticated
});

export default connect(
  mapStateToProps,
  { forgotpassword }
)(ForgotPassword);


 