import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

class Admin_Dashboard extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <div className="gutter-example">
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
                <Link to="/admin/editEvents">
                  <Card style={{ width: 300, marginTop: 16 }}>
                    <Meta
                      avatar={<Icon type="control" />}
                      title="Manage event"
                      description="This is the description"
                    />
                  </Card>
                </Link>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
                <Link to="/admin/dashboard_admin/analytics">
                  <Card style={{ width: 300, marginTop: 16 }}>
                    <Meta
                      avatar={<Icon type="line-chart" />}
                      title="Analytics overview"
                      description="This is the description"
                    />
                  </Card>
                </Link>
              </div>
            </Col>
          </Row>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
                <Link to="/admin/dashboard_admin/announce">
                  <Card style={{ width: 300, marginTop: 16 }}>
                    <Meta
                      avatar={<Icon type="notification" />}
                      title="Make an announcement"
                      description="This is the description"
                    />
                  </Card>
                </Link>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className="gutter-box">
                <Link to="/admin/dashboard_admin/purchased_tickets">
                  <Card style={{ width: 300, marginTop: 16 }}>
                    <Meta
                      avatar={<Icon type="shake" />}
                      title="Purchased tickets"
                      description="This is the description"
                    />
                  </Card>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin_Dashboard)
