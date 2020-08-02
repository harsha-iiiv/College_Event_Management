import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import EditEvents from "../events/editevents";
import Register from '../auth/register';
import Forgotpassword from '../auth/Forgotpassword';
import Pass_reset from '../auth/Pass_reset';
import Login from '../auth/login_Admin';
import Admin from '../layout/Admin';
import ULogin from '../auth/login';
import Alert from '../layout/userlayout/Alert';
import Home from '../layout/userlayout/Homepage';
import Admin_Dashboard from '../dashboard/admin_dashboard';
import DeleteEvent from '../events/AnnouceEvent';
import Dashboard from '../dashboard/dashboard';
import ChartRenderer from '../dashboard/ChartRenderer'
import PurChartRenderer from '../dashboard/Purchased'
// import EditProfile from '../profile-forms/EditProfile';
// import Event from '../events/event_card';
import Events from '../events/events';
import Events_details from '../events/events_details';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import UserPrivateRoute from '../routing/UserPrivateRoute';
import Profile_Admin from './../profile/profile_Admin';
import Eventform from '../events/eventForm'
// import Event_reg from '../events/event_reg'
// function mapStyles(styles) {
//   return {
//     opacity: styles.opacity,
//     transform: `scale(${styles.scale})`
//   };
// }

// // wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//   return spring(val, {
//     stiffness: 500,
//     damping: 40
//   });
// }

// child matches will...
// const bounceTransition = {
//   // start in a transparent, upscaled state
//   atEnter: {
//     opacity: 0,
    
//   },
//   // leave in a transparent, downscaled state
//   atLeave: {
//     opacity: 0,
    
//   },
//   // and rest at an opaque, normally-scaled state
//   atActive: {
//     opacity: 1,
   
//   }
// };

 class Routes extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/signup" component={Register} />
              <Route exact path="/admin/login" component={Login} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgotpassword" component={Forgotpassword} />
              <Route exact path="/reset/:token" component={Pass_reset} />
              <Route exact path="/login" component={ULogin} />
              <PrivateRoute
                exact
                path="/admin/profile_admin"
                component={Profile_Admin}
              />
              {/* <Route exact path='/profile/:id' component={Profile} /> */}
              <PrivateRoute
                exact
                path="/admin/dashboard_admin"
                component={Admin_Dashboard}
              />
              <Route
                exact
                path="/admin/dashboard_admin/announce"
                component={DeleteEvent}
              />

              <UserPrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/admin/dashboard_admin/analytics"
                component={ChartRenderer}
              />
              <PrivateRoute
                exact
                path="/admin/dashboard_admin/purchased_tickets"
                component={PurChartRenderer}
              />

              <PrivateRoute
                exact
                path="/admin/create_event"
                component={Eventform}
              />
              <PrivateRoute
                exact
                path="/admin/editEvents"
                component={EditEvents}
              />
              {/*<PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} /> 
        <PrivateRoute exact path='/add-education' component={AddEducation} /> */}
              <Route exact path="/events" component={Events} />
              <Route exact path="/events/:eventID" component={Events_details} />
              <UserPrivateRoute
                exact
                path="/events/:eventID/register"
                component={Events_details}
              />
              {/* <PrivateRoute exact path='/posts/:id' component={Post} /> */}
              <Route component={NotFound} />
            </Switch>
          </section>
        </React.Fragment>
      </div>
    );
  }
}

export default Routes;
