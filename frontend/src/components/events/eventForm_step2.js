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
