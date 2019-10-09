// import React, { Fragment, useEffect } from 'react';
// // import PropTypes from 'prop-types';
// // import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import Spinner from '../layout/Spinner';
// // import PostItem from '../posts/PostItem';
// // import CommentForm from '../post/CommentForm';
// // import CommentItem from '../post/CommentItem';
// import { getEvents } from './../actions/events';

// const Posts = ({ getEvents, event: { events, loading } }) => {
//   useEffect(() => {
//     getEvents();
//   }, [getEvents]);

//   return loading ? (
//    <h1>Please wait.....</h1>
//   ) : (
//     <Fragment>
//       <h1 className="large text-primary">Events</h1>
//       <p className="lead">
//         <i className="fas fa-user" /> Welcome to the Eventspage
//       </p>
     
//       <div className="posts">
//         {events.map(event => (
//          {event}
//         ))}
//       </div>
//     </Fragment>
//   );
// };

// // Post.propTypes = {
// //   getPost: PropTypes.func.isRequired,
// //   post: PropTypes.object.isRequired
// // };

// const mapStateToProps = state => ({
//   event: state.event
// });

// export default connect(
//   mapStateToProps,
//   { getEvents }
// )(Posts);

import React, { Component } from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux';
import { getEvents } from '../../actions/events';
import PropTypes from 'prop-types';
import  Eventcard from './event_card';
import { Element } from "react-scroll";
import { Row, Col, message } from "antd";



class Events extends Component {
                

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
				events = this.props.events.events.map((event, i) => (
					<Col
						key={i}
						sm={{ span: 20, offset: 2 }}
						md={{ span: 10, offset: 1 }}
						xl={{ span: 8, offset: 0 }}
					>
						<Eventcard event={event} />
					</Col>
				));
			}
		}

		return (
			<div className="home-page">
				<div className="homepage-events">
					<div className="homepage-events-header">Tutorials</div>
					<Element name="events">
						<Row gutter={{ sm: 0, md: 4, xl: 8 }}>{events}</Row>
					</Element>
				</div>
			</div>
		);
	}
               }
Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}              
 const mapStateToProps = state =>({
   events: state.events
 });   
export default connect(mapStateToProps, {getEvents})(Events); 