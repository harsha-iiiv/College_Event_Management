import React, { Component } from 'react'
import { Carousel, Button, Icon } from "antd";
import { Row, Col } from "antd";
import { Card } from "antd";
import { animateScroll as scroll } from 'react-scroll'
import { Link } from "react-router-dom";
import eposter from "../../../img/events.png";
import e1 from "../../../img/event_2.jpg";
import e2 from "../../../img/event_3.jpg";
import e3 from "../../../img/event_1.jpg";
import exe from "../../../img/scroll-bg.png";
import HomeEvents from "../../events/events";
const { Meta } = Card;


 class Home extends Component {
   
  
   render() { 
     return (
       <div className="container-fluid home-con">
         <Col gutter={48} className="home">
           <Row>
             <header className="header">
               <h1 className="heading">
                 College Fests & Events Ticketing Platform
               </h1>
               <p className="header-description">
                 Features College events | Sell college events tickets Online|
                 Registrations for Free and Paid events | Fest organizer
                 assistance | Events analytics |
               </p>
               <div className="scroll-down">
                 <div>Explore Events </div>
                 <div className="icon-wrapper">
                   <button
                     onClick={() => scroll.scrollMore(500)}
                     class="arrowCta  arrowCta--alt arrow-btn "
                   ></button>
                 </div>
               </div>
             </header>
           </Row>
         
           <Row className="block-hom">
             <img
               className="img-fluid img-ad"
               src={eposter}
               alt="Events poster"
             />
           </Row>
           <Row>
             <h1 className="heading">Events</h1>
             <HomeEvents />
           </Row>
           <Row className="moreevents-btn">
             <Link to="/events">
               <Button type="primary" icon="down" size={"large"} ghost>
                 More Events
               </Button>
             </Link>
           </Row>
         </Col>
       </div>
     );
   }
 }

export default Home;
