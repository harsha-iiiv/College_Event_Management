import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/register';
import Login from '../auth/login_Admin';
import Admin from '../layout/Admin';
import ULogin from '../auth/login';
import Alert from '../layout/userlayout/Alert';
import Home from '../layout/userlayout/Homepage';
// import Dashboard from '../dashboard';
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
const Routes = () => {
  return (
    <section className='container'>
      <Alert/>
      <Switch>
        
        <Route exact path='/signup' component={Register} />
        <Route exact path='/admin/login' component={Login} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={ULogin} />
        <PrivateRoute exact path='/admin/profile_admin' component={Profile_Admin} />
        {/* <Route exact path='/profile/:id' component={Profile} /> */}
         <PrivateRoute exact path='/admin/dashboard_admin' component={Profile_Admin} />
       
        <PrivateRoute exact path='/admin/create_event' component={Eventform} />
        {/*<PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} /> 
        <PrivateRoute exact path='/add-education' component={AddEducation} /> */}
        <Route exact path='/events' component={Events} />
        <Route exact path='/events/:eventID' component={Events_details} />
        <UserPrivateRoute exact path='/events/:eventID/register' component={Events_details} />
        {/* <PrivateRoute exact path='/posts/:id' component={Post} /> */}
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
