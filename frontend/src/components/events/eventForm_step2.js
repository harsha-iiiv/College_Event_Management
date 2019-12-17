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
          <Row gutter={48}>
            <Col span={12}> <Radio value={"Music"}>Music</Radio></Col>
            <Col span={12}><Radio value={"Dance"}>Dance</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Drama"}>Drama</Radio></Col>
            <Col span={12}><Radio value={"Sports"}>Sports</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Workshop"}>Workshop</Radio></Col>
            <Col span={12}><Radio value={"Management"}>Management</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Fun & Other Events"}>Fun and Other Events</Radio></Col>
            <Col span={12}><Radio value={"Online Events"}>Online Events</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Hobbies & Interest"}>Hobbies annd Interest</Radio></Col>
            <Col span={12}><Radio value={"Concert"}>Concert</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Seminars"}>Seminars</Radio></Col>
            <Col span={12}><Radio value={"Gaming"}>Gaming</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Conferences"}>Conferences</Radio></Col>
            <Col span={12}><Radio value={"Travel"}>Travel</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"General"}>General</Radio></Col>
            <Col span={12}><Radio value={"Alumni"}>Alumni</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Others"}>Others</Radio></Col>
            <Col span={12}><Radio value={"Symposium"}>Symposium</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"TEDx"}>TEDx</Radio></Col>
            <Col span={12}><Radio value={"Technical"}>Technical</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Entrepreneurship"}>Entrepreneurship</Radio></Col>
            <Col span={12}><Radio value={"Literature"}>Literature</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Accommodation"}>Accommodation</Radio></Col>
            <Col span={12}><Radio value={"Departmental"}>Departmental</Radio></Col>
          </Row>
          <Row gutter={48}>
            <Col span={12}><Radio value={"Model United Nations"}>Model United Nations</Radio></Col>
            <Col span={12}><Radio value={"Merchandise"}>Merchandise</Radio></Col>
          </Row>

         
          
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
