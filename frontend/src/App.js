import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/layout/AppNavbar'
import Navbar from './components/layout/userlayout/Navbar'
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './components/layout/Admin'
import Routes from './components/routing/Routes'
import Uroutes from './components/routing/Uroutes'
import React, { Component ,Fragment} from 'react'
import { loadUser } from './actions/auth';
import { loadNormalUser } from "./actions/auth";
import setAuthToken from "./utils/setAdminToken";
import setUserToken from "./utils/setUserToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
 if(localStorage.userToken){
     setUserToken(localStorage.userToken);
 }

class App extends Component {
 
  componentDidMount() {
   
    if (localStorage.userToken) {

      setUserToken(localStorage.userToken);
     store.dispatch(loadNormalUser());
    }
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
       

   
  }
  
   render() {
     return (
       <Provider store={store}>
         <Router>
           <Fragment>
             <AppNavbar />
             <Switch>
               <Route exact path="/admin" component={Admin} />
               <Route component={Routes} />
             </Switch>
            
           </Fragment>
         </Router>
       </Provider>
     );
   }
 }
 

export default App;
