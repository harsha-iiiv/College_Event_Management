import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Row, Col, Card, Icon, Avatar, Button } from "antd";
const { Meta } = Card;

const Admin = ({
  auth: { isAuthenticated, isLoading},
  logout,
}) => {
  var go;
  
    
  if(isAuthenticated)
   go = '/admin/create_event'
   else
   go = '/admin/login'

  return (
    <div className="container">
      <h4 className="text-center" >COLLEGE FEST MANAGEMENT PLATFORM</h4>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div className="gutter-box">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img src="https://img.icons8.com/clouds/500/000000/admin-settings-male.png" />
              }
            >
              <Meta
                title="EASY MANAGEMENT"
                description="smooth registration process with payment gateway."
              />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div className="gutter-box">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                    <img src="https://img.icons8.com/clouds/200/000000/qr-code.png" />

              }
            >
              <Meta
                title="PAPERLESS TICKETING"
                description="QR Code integration on the tickets provided"
              />
            </Card></div>
            </Col>
            <Col className="gutter-row" span={8}>
            <div className="gutter-box">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                  <img src="https://img.icons8.com/clouds/200/000000/mailbox-closed-flag-down.png" />
              }
            >
              <Meta title="EMAIL NOTIFICATIONS" description="Event announcements and event updates" />
            </Card>
          </div>
        </Col>
      </Row>
       <Link to = {go}>
      <Button  className="button" type="primary" style={{margin: '10% 0% 50% 50%'}}>
       Create Event here 
      </Button>
      </Link>
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
