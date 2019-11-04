import React, { Component } from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux';
import { getEvents } from '../../actions/events';
import { getEventById } from "../../actions/events";
import PropTypes from 'prop-types';
import  EditEventcard from './editevent_card';
import { Element } from "react-scroll";
import { Row, Col, message } from "antd";
import loader from "../../img/loader.gif";



class EditEvents extends Component {
                

                 componentDidMount() {
                  this.props.getEvents();
                 }
                 render() {
		let events;
		if (this.props.events.events.loading) {
			events = <h3>Just a moment</h3>;
		} else {
			if (this.props.events.events.length === 0) {
				events = <div className="nothing-to-show"><img src={loader} alt="Loading" className="App-loader" /></div>;
			} else {
				events = this.props.events.events.map((event, i) => (
          <Col
            key={i}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 10, offset: 1 }}
            xl={{ span: 8, offset: 0 }}
          >
            <Row className="event-card" gutter={{ xs: 8, sm: 16, md: 24 }}>
              <EditEventcard getEventById = {this.props.getEventById} className="event-card" event={event} />
            </Row>
          </Col>
        ));
			}
		}

		return (
      <div className="home-page">
        <div className="homepage-events">
          <Element name="events">
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>{events}</Row>
          </Element>
        </div>
      </div>
    );
	}
               }
EditEvents.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}              
 const mapStateToProps = state =>({
   events: state.events
 });   
export default connect(mapStateToProps, {getEvents, getEventById})(EditEvents); 