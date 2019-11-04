
import React, { Component } from 'react'
import { connect } from "react-redux";
import { editEvent } from "../../actions/events";
import Step2Form from "./eventForm_step2";
import Step1Form from "./eventForm_step1";
import Step3Form from "./eventForm_step3";
import Step4Form from "./eventForm_step4";
import Formupdate from "./formupdate";
import ThankYou from './thankYou';
import StepWizard from "react-step-wizard";
import { Modal, Button } from "antd";


class EditEventForm extends Component {
   
  
  
  showModal = () => {
    this.setState({
      visible: this.props.open
    });
  };

    constructor(props) {
      super(props)
    
      this.state = {
        step: 1,
        eic: "",
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
        visible: true
      };
      console.log('==============Constructor======================');
      console.log(this.props.event1);
      console.log('====================================');
       this.setState({
         eic: this.props.event1.eic,
         name: this.props.event1.name,
         date: this.props.event1.date,
         time: this.props.event1.time,
         venue: this.props.event1.venue,
         Description: this.props.event1.Description,
         type: this.props.event1.type,
         image: this.props.event1.image,
         logo: this.props.event1.logo,
         organiserName: this.props.event1.organiserName,
         role: this.props.event1.role,
         email: this.props.event1.email,
         ticketrequired: this.props.event1.ticketrequired,
         ticketname: this.props.event1.ticketname,
         isPaid: this.props.event1.isPaid,
         ticketprice: this.props.event1.ticketprice
       });
    }
   

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
      visible: !this.state.visible
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
    console.log('====================================');
    console.log(this.state);
    console.log('====================================');
    const {
      eic,
      name ,
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
    console.log('================values====================');
    console.log(values);
    console.log('====================================');

    return (
      <div className="container">
        <Modal
          title="Basic Modal"
          visible={this.props.open}
          onOk={this.handleOk}
          onCancel={this.props.handleCancel}
          footer={[]}
        >
          <StepWizard>
            <Step1Form
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              event1 = {this.props.event1}
            />
            <Step2Form
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
              event1 = {this.props.event1}
            />
            <Step3Form
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
              event1 = {this.props.event1}
            />
            <Step4Form
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              handleChange={this.handleChange}
              values={values}
              event1 = {this.props.event1}
            />
            <Formupdate
              values={values}
              finalvalues = {this.state}
              nextStep={this.nextStep}
              prevStep={this.previousStep}
              editEvent={this.props.editEvent}
              event1 = {this.props.event1}
            />
          </StepWizard>
        </Modal>
      </div>
    );
  }
}


  
const mapStateToProps = state =>({
   events: state.events
 });   
export default connect(mapStateToProps, {editEvent})(EditEventForm); 


