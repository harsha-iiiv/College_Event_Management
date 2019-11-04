import React, { Component } from 'react'
import { Card, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";
import EditEventForm from "./editEventForm";

const { Meta } = Card;
export default class EditEventcard extends Component {
                 state = { open: false };
                 showModal = () => {
                   this.props.getEventById(this.props.event._id);
                   this.setState({
                     open: true
                   });
                 };
                 handleCancel = e => {
                   this.setState({
                     open: false
                   });
                 };
                 render() {
                   return (
                     <div>
                       <Card
                         className="event-card-single"
                         style={{ width: 200, boxShadow: "black" }}
                         actions={[
                           <Icon type="icon-tuichu" key="setting" />,
                           <Icon type="like" />,
                           <span onClick={this.showModal}>
                             {" "}
                             <Icon type="edit" key="edit" />
                           </span>
                         ]}
                       >
                         <Link to={`/events/${this.props.event._id}`}>
                           {" "}
                           <Meta title={this.props.event.name} />
                         </Link>
                       </Card>
                       <EditEventForm handleCancel = {this.handleCancel} open={this.state.open} />
                     </div>
                   );
                 }
               }
