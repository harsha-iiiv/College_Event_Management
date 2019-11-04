import React, { Component } from "react";
import {Button} from 'antd'

class Formupdate extends Component {
  

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  };
   back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
   
  handleSubmit = () =>{
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
        } = this.props.values;

      console.log(this.props.finalvalues);
      
    this.props.editEvent(
      this.props.event1._id,
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
    );
  }
    
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
      } = this.props.finalvalues;
    return (
      <React.Fragment>
        <h4>Please check the details once before submitting.</h4>
        <div className=" table-bordered text-left text-primary bg-light shadow-lg d-block visible">
    <table className="table table-striped table-bordered table-sm">
        <thead>
            <tr>
                <th>Name</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Event Code</strong></td>
                <td>{eic}</td>
            </tr>
            <tr>
                <td><strong>Event Name</strong></td>
                <td>{name}</td>
            </tr>
            <tr>
                <td><strong>Event Description</strong></td>
                <td>{Description}</td>
            </tr>
            <tr>
                <td><strong>Venue</strong></td>
                <td>{venue}2</td>
            </tr>
            <tr>
                <td><strong>Date &amp; Timimg </strong></td>
                <td>{date} and {time}</td>
            </tr>
            <tr>
                <td><strong>Event duration</strong></td>
                <td>3 hr</td>
            </tr>
            <tr>
                <td><strong>Tickey price</strong></td>
                <td>{ticketprice}</td>
            </tr>
            <tr>
                <td><strong>Organiser</strong></td>
                <td>{organiserName}</td>
            </tr>
            <tr>
                <td><strong>Role of organiser</strong></td>
                <td>{role}</td>
            </tr>
            <tr>
                <td><strong>Organiser email </strong></td>
                <td>{email}</td>
            </tr>
            <tr>
                <td><strong>Event type</strong></td>
                <td>{type}</td>
            </tr>
        </tbody>
    </table>
</div>

        <Button type="primary" onClick={this.props.previousStep}>
          Back
        </Button>
        <Button type="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </React.Fragment>
    );
  }
}
export default Formupdate; 