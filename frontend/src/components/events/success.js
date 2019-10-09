import React, { Component } from "react";
import {Button} from 'antd'

class Success extends Component {
  

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  };
   back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice} = this.props.values
    return (
      <React.Fragment>
        <h1>Please check the details once before submitting.</h1>

        <Button type="primary" onClick={this.props.previousStep}>
          Back
        </Button>
      </React.Fragment>
    );
  }
}
export default Success; 