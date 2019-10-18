import React, { Component } from "react";
import '../../App.css'

import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Container } from "@material-ui/core";

class Step1Form extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  

  render() {
    const { values, handleChange } = this.props;
    

    return ( 
      <React.Fragment>
        <Container className="Step1">
        <Form>
          
          <Input type="text" onChange={handleChange("name")} defaultValue={values.name} placeholder="Event Name" />
          <br />
          <br />
        
          <Input type="text"
            //   hintText="Enter Event date"
            //   floatingLabelText="Event Date"
            onChange={handleChange("date") }
            defaultValue={values.date} placeholder="MM/DD/YYYY"
          />
          <br />
          <br />
          <Input type="text"
            //   hintText="Enter Event time"
            //   floatingLabelText="Time"
            onChange={handleChange("time") }
            defaultValue={values.time} placeholder="Time"
          />
          <br />
          <br />
          <Input type="text"
            //   hintText="Enter Event venue"
            //   floatingLabelText="Venue"
            onChange={handleChange("venue") }
            defaultValue={values.venue} placeholder="Venue"
          />
          <br />
          <br />
          <Input
            //   hintText="Enter Event Description"
            //   floatingLabelText="Description"
            onChange={handleChange("Description")}
            defaultValue={values.Description} placeholder="Description"
          />
          <br />
          <br />
          <Button type="primary" onClick={this.continue}>
            Next
          </Button>
          <br />
          <br />
        </Form>
        </Container>
      </React.Fragment>
    );
  }
}



export default Step1Form;
