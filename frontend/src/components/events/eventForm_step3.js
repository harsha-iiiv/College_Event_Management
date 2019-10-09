import React, { Component } from "react";
import { Radio, Button, Form, Input } from "antd";

class Step3Form extends Component {
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
        <Form>
          <Input type="text" onChange={handleChange("image")} defaultValue={values.image} placeholder="Image" />
          <br />
          <br />
          <Input type="text"
            //   hintText="Enter Event date"
            //   floatingLabelText="Event Date"
            onChange={handleChange("logo")}
            defaultValue={values.logo} placeholder="Logo"
          />
          <br />
          <br />
        </Form>
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

export default Step3Form;
