import React, { Component } from "react";


import { Form, Icon, Input, Button, Checkbox } from "antd";

class Step1Form extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  

  render() {
    const { values, handleChange } = this.props;
    

    return ( 
      <React.Fragment>
        <Form>
          <Input onChange={handleChange("name")} defaultValue={values.name} />
          <br />
          <Input
            //   hintText="Enter Event date"
            //   floatingLabelText="Event Date"
            onChange={handleChange("date")}
            defaultValue={values.date}
          />
          <br />
          <Input
            //   hintText="Enter Event time"
            //   floatingLabelText="Time"
            onChange={handleChange("time")}
            defaultValue={values.time}
          />
          <br />
          <Input
            //   hintText="Enter Event venue"
            //   floatingLabelText="Venue"
            onChange={handleChange("venue")}
            defaultValue={values.venue}
          />
          <br />
          <Input
            //   hintText="Enter Event Description"
            //   floatingLabelText="Description"
            onChange={handleChange("Description")}
            defaultValue={values.Description}
          />
          <br />
          <Button type="primary" onClick={this.continue}>
            Next
          </Button>
          
        </Form>
      </React.Fragment>
    );
  }
}



export default Step1Form;
