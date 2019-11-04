import React, { Component } from 'react'

export default class Event_guide extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center" style={{fontSize: '15px'}}>
          <br />
          <strong>Important Notes! Have a look before proceeding</strong>
          <br />
          <br />
          <br />
        </h1>
        <h6 className="shadow-sm d-flex event-guide-head">
          <br />
          <strong>Event Related Guide </strong>There are simple 5 steps(Fill all
          steps correctly!)
          <br />
          <br />
          <br />
        </h6>
        <ul className="list-group"></ul>
        <ul>
          <li>
            <strong>Step-1</strong> (Fill Event Name, Date, Location &amp;
            Description)
            <br />
          </li>
          <li>
            <strong>Step-2</strong> (Select category for your event)
            <br />
          </li>
          <li>
            <strong>Step-3</strong> (Upload Poster and Banner Image for your
            event)
            <br />
          </li>
          <li>
            <strong>Step-4</strong> (Fill Organiser Details and ticket details)
            <br />
          </li>
        </ul>
      </div>
    );
  }
}
