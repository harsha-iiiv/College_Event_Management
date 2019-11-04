import React, { Component } from "react";
import { Radio, Button } from "antd";


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
          <Radio value={"Music"}>Music</Radio>
          <Radio value={"Dance"}>Dance</Radio>
          <Radio value={"Drama"}>Drama</Radio>
          <Radio value={"Sports"}>Sports</Radio>
          <Radio value={"Workshop"}>Workshop</Radio>
          <Radio value={"Management"}>Management</Radio>
          <Radio value={"Fun & Other Events"}>Fun and Other Events</Radio>
          <Radio value={"Online Events"}>Online Events</Radio>
          <Radio value={"Hobbies & Interest"}>Hobbies annd Interest</Radio>
          <Radio value={"Concert"}>Concert</Radio>
          <Radio value={"Seminars"}>Seminars</Radio>
          <Radio value={"Gaming"}>Gaming</Radio>
          <Radio value={"Conferences"}>Conferences</Radio>
          <Radio value={"Travel"}>Travel</Radio>
          <Radio value={"General"}>General</Radio>
          <Radio value={"Alumni"}>Alumni</Radio>
          <Radio value={"Others"}>Others</Radio>
          <Radio value={"Symposium"}>Symposium</Radio>
          <Radio value={"TEDx"}>TEDx</Radio>
          <Radio value={"Technical"}>Technical</Radio>
          <Radio value={"Entrepreneurship"}>Entrepreneurship</Radio>
          <Radio value={"Literature"}>Literature</Radio>
          <Radio value={"Accommodation"}>Accommodation</Radio>
          <Radio value={"Departmental"}>Departmental</Radio>
          <Radio value={"Model United Nations"}>Model United Nations</Radio>
          <Radio value={"Merchandise"}>Merchandise</Radio>
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
