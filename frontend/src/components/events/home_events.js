import React, { Component } from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux';
import { getEvents } from '../../actions/events';
import PropTypes from 'prop-types';
import  Eventcard from './event_card';
import { Element } from "react-scroll";
import { Row, Col } from "antd";



class HomeEvents extends Component {
                

                 componentDidMount() {
                  this.props.getEvents();
                 }
                 render() {
		let events;
		if (this.props.events.events.loading) {
			events = <h3>Just a moment</h3>;
		} else {
			if (this.props.events.events.length === 0) {
				events = <div className="nothing-to-show">No events added yet</div>;
			} else {
				var i;
				var sixevents = []
			  		for(i=0; i<6; i++){
				    sixevents[i] = this.props.events.events[i];
				}
                
				events = sixevents.map((event, i) => (
					<Col
						key={i}
						sm={{ span: 20, offset: 2 }}
						md={{ span: 10, offset: 1 }}
						xl={{ span: 8, offset: 0 }}
					>
						<Eventcard  event={event} />
					</Col>
				));
			}
		}

		return (
			<div className="home-page">
				<div className="homepage-events">
					<Element name="events">
						<Row className="event-card" gutter={{ sm: 0, md: 4, xl: 8 }}>{events}</Row>
					</Element>
				</div>
			</div>
		);
	}
               }
HomeEvents.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}              
 const mapStateToProps = state =>({
   events: state.events
 });   
export default connect(mapStateToProps, {getEvents})(HomeEvents); 