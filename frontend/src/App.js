import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/layout/AppNavbar'
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from './components/layout/Admin'
import Routes from './components/routing/Routes'
import React, { Component ,Fragment} from 'react'
import { loadUser } from './actions/auth';
import { loadNormalUser } from "./actions/auth";
import setAuthToken from "./utils/setAdminToken";
import setUserToken from "./utils/setUserToken";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer } = Layout;


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
             <Footer
               style={{
                 background: "#ffff",
                 padding: 0.5,
                 width: '100%'
               }}
             >
               <AppNavbar />

               <div
                 style={{
                   background: "#ffff",
                   padding: 2,
                   width: "100%",
                   
                   marginTop:64
                 }}
               >
                 <Switch>
                   <Route exact path="/admin" component={Admin} />
                   <Route component={Routes} />
                 </Switch>
               </div>
               <Footer style={{ textAlign: "center" }}>
                 CEM ©2019 Made with{" "}
                 <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
               </Footer>
             </Footer>
           </Fragment>
         </Router>
       </Provider>
     );
   }
 }
 

export default App;
