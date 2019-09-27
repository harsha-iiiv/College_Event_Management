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

class Events extends Component {
                

                 componentDidMount() {
                  this.props.getEvents();
                 }
                 render() {
                  const {events} =  this.props.events
                  if(this.props.events.loading)
                  return (<div>PLease wait...</div>)
                  else
                   return (
                     <div>
                       {events.map(person => (
                         <li key={uuid()}>{person._id}</li>
                       ))}
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