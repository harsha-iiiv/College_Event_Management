import React, { Component } from 'react'
import { Card, Icon, Avatar, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
export default class EditEventcard extends Component {
                //  state = { open: false };
                //  showModal = () => {
                //    this.props.getEventById(this.props.event._id);
                //    this.setState({
                //      open: true
                //    });
                //  };
                //  handleCancel = e => {
                //    this.setState({
                //      open: false
                //    });
                //  };
                 render() {
                   return (
                     <div>
                       <Card
                         className="event-card-single"
                         style={{ width: 200, boxShadow: "black" }}
                         actions={[
                           <Icon type="icon-tuichu" key="setting" />,
                           <Icon type="like" />,

                           <Popconfirm
                             title="Sure to delete?"
                             onConfirm={() => this.props.deleteEvent(this.props.event._id)}
                           >
                             <Icon type="delete" key="edit" />
                           </Popconfirm>
                         ]}
                       >
                         <Meta title={this.props.event.name} />
                       </Card>
                     </div>
                   );
                 }
               }

