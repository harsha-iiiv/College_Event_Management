
import React, { Component } from 'react'
import { connect } from "react-redux";
import { createEvent } from "./../../actions/events";
import Event_guide from "./create_events_guide";
import Step2Form from "./eventForm_step2";
import Step1Form from "./eventForm_step1";
import Step3Form from "./eventForm_step3";
import Step4Form from "./eventForm_step4";
import Success from './success';
import ThankYou from './thankYou';
import StepWizard from "react-step-wizard";
import { Modal, Button } from "antd";




class EventForm extends Component {
  state = {
    step: 1,
    eic:'',
    name: "",
    date: "",
    time: "",
    venue: "",
    Description: "",
    type: "",
    image: "",
    logo: "",
    organiserName: "",
    role: "",
    email: "",
    ticketrequired: false,
    ticketname: "",
    isPaid: false,
    ticketprice: 30,
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
 const {
   name,
   date,
   time,
   venue,
   Description,
   type,
   image,
   logo,
   organiserName,
   role,
   email,
   ticketrequired,
   ticketname,
   isPaid,
   ticketprice
 } = this.state;
  // this.props.createEvent(
  //     name,
  //     date,
  //     time,
  //     venue,
  //     Description,
  //     type,
  //     image,
  //     logo,
  //     organiserName,
  //     role,
  //     email,
  //     ticketrequired,
  //     ticketname,
  //     isPaid,
  //     ticketprice
  //   );
    
    this.setState({
      visible: false
    });
    

  
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      eic,
      name,
      date,
      time,
      venue,
      Description,
      type,
      image,
      logo,
      organiserName,
      role,
      email,
      ticketrequired,
      ticketname,
      isPaid,
      ticketprice
    } = this.state;
    const values = {
      eic,
      name,
      date,
      time,
      venue,
      Description,
      type,
      image,
      logo,
      organiserName,
      role,
      email,
      ticketrequired,
      ticketname,
      isPaid,
      ticketprice
    };

    return (
      <div className="container">
       <Event_guide/>
        <Button className="button" type="primary" onClick={this.showModal} style={{margin: '0% 0% 50% 50%'}}>
          Proceed
        </Button>
        <Modal
          title="Fill the event details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <StepWizard>
            <Step1Form
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Step2Form
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Step3Form
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Step4Form
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
            />
            <Success
              values={values}
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              createEvent={this.props.createEvent}
            />
          </StepWizard>
        </Modal>
      </div>
    );
  }
}


  



export default connect(
  undefined,
  { createEvent }
)(EventForm);