import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/layout/AppNavbar'
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from './components/layout/Spinner'
import Routes from './components/routing/Routes'
import React, { Component ,Fragment} from 'react'
import { loadUser } from './actions/auth';
import setAuthToken from "./utils/setAdminToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {
 
  componentDidMount() {
    store.dispatch(loadUser())
  }

   render() {
     return (
       <Provider store={store}>
         <Router>
           <Fragment>
             <AppNavbar />
             <Switch>
               <Route exact path="/admin" component={Spinner} />
               <Route component={Routes} />
             </Switch>
           </Fragment>
         </Router>
       </Provider>
     );
   }
 }
 

export default App;
