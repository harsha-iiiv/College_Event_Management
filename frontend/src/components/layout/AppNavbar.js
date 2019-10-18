import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { userlogout } from "../../actions/auth";
import { register } from './../../actions/auth';
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const AppNavbar = ({ auth: { isAuthenticated, isUserAuthenticated,  isLoading, isUserLoading }, logout, userlogout, }) => {
 var go = window.location.pathname;


  if(isUserAuthenticated){
    go = go
  }
  else{
    go = '/';
  }
  var res1;
  var res;
  const authLinks = (
   
     <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Admin</span>
                </span>
              }
            >
              <Menu.Item key="4"><Link to="/admin/dashboard_admin">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
</Menu.Item>
              <Menu.Item key="5"> <Link to="/admin/create_event">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Create Event</span>
        </Link></Menu.Item>
              <Menu.Item key="6">  <Link to="/admin" onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link></Menu.Item>
            </SubMenu>
  );

   const guestLinks = (
     <SubMenu
       key="sub2"
       title={
         <span>
           <Icon  type="user" />
           <span>Admin</span>
         </span>
       }
     >
      
       <Menu.Item key="4">
         {" "}
         <Link to="/admin/login">Login</Link>
       </Menu.Item>
      
     </SubMenu>
   );

 
 
  if (!isLoading) {
    if (isAuthenticated) {
      res1 = authLinks;
    } else res1 = guestLinks;
  }
  const userauthLinks = (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["4"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="4">
        {" "}
        <Link to="/">
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        {" "}
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        {" "}
        <Link to="/events">Events</Link>
      </Menu.Item>
      <Menu.Item key="3">
        {" "}
        <Link to={go} onClick={userlogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </Menu.Item>
      {res1}
    </Menu>
  );

 
  const userguestLinks = (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["4"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="4">
        {" "}
        <Link to="/">
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        {" "}
        <Link to="/events">Events</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/login">
          {" "}
          <Icon type="team" />
          <span>Login</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/signup">Sign Up</Link>
      </Menu.Item>
      {res1}
    </Menu>
  );

  if(!isUserLoading)
  {
    if(isUserAuthenticated){
       res = userauthLinks
    }
    else
      res = userguestLinks 
  }
 

 

  return (
     
      <Header style={{ position: "fixed", zIndex: 1, width: "100%", backgroundColor:'white' }}>
        <div className="logo" />
        
       

        {res}
      </Header>
     
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
