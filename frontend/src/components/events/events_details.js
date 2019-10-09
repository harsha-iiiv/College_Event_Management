import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventById, eventreg } from "../../actions/events";
import Events_reg from './event_reg'
import {Modal , Button} from 'antd'

import { setAlert } from './../../actions/alert';
// useEffect(() => {
  //   getEventById(match.params.eventID);
  // }, [getEventById, match.params.eventID]);
class Events_details extends Component {
 
  componentDidMount() { 
   const  {getEventById} = this.props;
    getEventById(this.props.match.params.eventID);
     
  }
  
  state = {
    
    name: "jlnd",
    visible: false
  };
  showModal = () => {
    
    if (this.props.isUserAuthenticated){
      this.setState({
        visible: true
      });
    }
    else{
       this.props.setAlert("Please sign in to register", "danger")
    }
  };

  handleOk = e => {
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
  
    return (
      <div className="container">
        {this.props.events.event != null
          ? this.props.events.event.name
          : "Please wait"}
        <Button type="primary" onClick={this.showModal}>
            Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
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
            eventreg = {this.props.eventreg}
            userID = {this.props.user != null ? this.props.user._id : "Please wait"}
          />

          <Button type="primary">Submit</Button>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  events: state.events,
  user: state.auth.normalUser,
  isUserAuthenticated: state.auth.isUserAuthenticated
});
export default connect(
  mapStateToProps,
  { getEventById, setAlert, eventreg }
)(Events_details);
