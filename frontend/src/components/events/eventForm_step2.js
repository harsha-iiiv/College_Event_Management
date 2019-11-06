import React, { Component } from "react";
import { Radio, Button, Row, Col } from "antd";


class Step2Form extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Radio.Group onChange={handleChange("type")} defaultValue={values.type}>
          <Col>
            <Row gutter={16}>
              <Col
                sm={{ span: 20, offset: 2 }}
                md={{ span: 10, offset: 1 }}
                xl={{ span: 8, offset: 0 }}
              >
                
                <Radio value={"Music"}>Music</Radio>
                <Radio value={"Dance"}>Dance</Radio>
                <Radio value={"Drama"}>Drama</Radio>
              </Col>
            </Row>
            <Row>
              <Radio value={"Sports"}>Sports</Radio>
              <Radio value={"Workshop"}>Workshop</Radio>
              <Radio value={"Management"}>Management</Radio>
            </Row>
            <Row>
              <Radio value={"Fun & Other Events"}>Fun and Other Events</Radio>
              <Radio value={"Online Events"}>Online Events</Radio>
              <Radio value={"Hobbies & Interest"}>Hobbies annd Interest</Radio>
            </Row>
            <Row>
              <Radio value={"Concert"}>Concert</Radio>
              <Radio value={"Seminars"}>Seminars</Radio>
              <Radio value={"Gaming"}>Gaming</Radio>
            </Row>
            <Row>
              <Radio value={"Conferences"}>Conferences</Radio>
              <Radio value={"Travel"}>Travel</Radio>

              <Radio value={"General"}>General</Radio>
            </Row>
            <Row>
              <Radio value={"Alumni"}>Alumni</Radio>
              <Radio value={"Others"}>Others</Radio>
              <Radio value={"Symposium"}>Symposium</Radio>
            </Row>
            <Row>
              <Radio value={"TEDx"}>TEDx</Radio>
              <Radio value={"Technical"}>Technical</Radio>
              <Radio value={"Entrepreneurship"}>Entrepreneurship</Radio>
            </Row>
            <Row>
              <Radio value={"Literature"}>Literature</Radio>
              <Radio value={"Accommodation"}>Accommodation</Radio>
              <Radio value={"Departmental"}>Departmental</Radio>
            </Row>
            <Radio value={"Model United Nations"}>Model United Nations</Radio>
            <Radio value={"Merchandise"}>Merchandise</Radio>
          </Col>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" onClick={this.props.nextStep}>
          Continue
        </Button>
        <Button type="primary" onClick={this.props.previousStep}>
          Back
        </Button>
        <br />
        <br />
      </React.Fragment>
    );
  }
}



export default Step2Form;
