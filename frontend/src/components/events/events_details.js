import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventById, eventreg } from "../../actions/events";
import Events_reg from './event_reg'
import EditEventForm from "./editEventForm";

import {Modal , Button, Icon} from 'antd'
import { editEvent } from "../../actions/events";


import { setAlert } from './../../actions/alert';
// useEffect(() => {
  //   getEventById(match.params.eventID);
  // }, [getEventById, match.params.eventID]);
class Events_details extends Component {
  componentDidMount() {
    const { getEventById } = this.props;
    getEventById(this.props.match.params.eventID);
  }
  
showModal1 = () => {
 
  this.setState({
    open: true
  });
};
handleCancel1 = e => {
  this.setState({
    open: false
  });
};
  state = {
    name: "jlnd",
    loading: false,
    visible: false,
    open: false
  };
  showModal = () => {
    if (this.props.isUserAuthenticated) {
      this.setState({
        visible: true
      });
    } else {
      this.props.setAlert("Please sign in to register", "danger");
    }
  };

  handleOk = e => {
   this.setState({ loading: true });
   setTimeout(() => {
     this.setState({ loading: false, visible: false });
   }, 3000);
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
    } = this.props.events.event == null ? "wait" : this.props.events.event;

    const edit =   <a onClick= {this.showModal1} className="float">
                   <Icon className= 'my-float' type="edit" />
                    </a>
                    

    return (
      <div className="container">
        <div className="event-details">
          <div className="event-logo">
            <img
              src={
                this.props.events.event != null
                  ? "https://cloudinary-res.cloudinary.com/image/upload/c_limit,h_540,w_770/f_auto,fl_lossy,q_auto/rzxcje2xocuicsxjevlviw.jpg"
                  : "Please wait"
              }
              alt="Logo will shown here"
              className="event-img"
            />
          </div>
          <div className="event-title">
            <span>
              {this.props.events.event != null ? name : "Please wait"}
            </span>
          </div>{" "}
          <div className="event-venue">
            <spna>
              <Icon type="environment" />
              <span>
                {this.props.events.event != null ? venue : "Please wait"}
              </span>
            </spna>
          </div>
          <div className="event-date">
            <span>
              {this.props.events.event != null ? date : "Please wait"}{" "}
            </span>
          </div>
          <div className="event-time">
            <span>
              {this.props.events.event != null ? time : "Please wait"}{" "}
            </span>
          </div>
          <div className="event-dur">
            <span> 3 hr </span>
          </div>
        </div>
        <div classNam="event-reg-btn">
          <Button type="primary" onClick={this.showModal} className="e-btn">
            Register
          </Button>
        </div>
       <div className = 'edit-btn'>
        {this.props.isAuthenticated ? edit : ''}
        <EditEventForm  event1 = {this.props.events.event == null ? "wait" : this.props.events.event} open = {this.state.open} handleCancel = {this.handleCancel1} />

       </div>
        <Modal
          title="Event registration form"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          <Events_reg
            name={
              this.props.user != null ? this.props.user.name : "Please wait"
            }
            email={
              this.props.user != null ? this.props.user.email : "Please wait"
            }
            ename={
              this.props.events.event != null
                ? this.props.events.event.name
                : "Please wait"
            }
            eID={
              this.props.events.event != null
                ? this.props.events.event._id
                : "Please wait"
            }
            eventreg={this.props.eventreg}
            userID={
              this.props.user != null ? this.props.user._id : "Please wait"
            }
          />
        </Modal>
        <div className="event-des">
          <div className="e-des-title dhead">
            <span>Event Descriptions:</span>
          </div>
          <span>
            {this.props.events.event != null ? Description : "Please wait"}
          </span>
        </div>
        <div className="event-timig">
          <div className="e-timing-title dhead">
            <span>Event Timing:</span>
          </div>
          <span>{this.props.events.event != null ? date : "Please wait"}</span>
        </div>
        <div className="event-org">
          <div className="e-org-title dhead">
            <span>Oragaiser details:</span>
          </div>
          <span>
            {this.props.events.event != null ? organiserName : "Please wait"}
          </span>
          <span>{this.props.events.event != null ? role : "Please wait"}</span>
          <span>{this.props.events.event != null ? email : "Please wait"}</span>
        </div>
        <div className="event-note">
          <div className="e-note-title dhead">
            <span>Things that you should know:</span>
          </div>
          <span>
            {this.props.events.event != null
              ? "Get your ticket before your events get expired!"
              : "Please wait"}
          </span>
        </div>
        <div className="event-sub">
          <div className="dhead">
            <span>Get updated regarding College Events!</span>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  events: state.events,
  user: state.auth.normalUser,
  isUserAuthenticated: state.auth.isUserAuthenticated,
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { getEventById, setAlert, eventreg, editEvent }
)(Events_details);
