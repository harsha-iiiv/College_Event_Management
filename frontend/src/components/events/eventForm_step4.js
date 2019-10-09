import React, { Component } from "react";
import { Radio, Button, Input, Form} from "antd";


class Step4Form extends Component {
  continue = e => {
    e.preventDefault();
    //      const { name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice } = this.props.values;

    // console.log('====================================');
    // console.log(createEvent());
    // console.log('====================================');
    
    this.props.nextStep();

        
        
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
         const { name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice } = this.props.values;

    return (
      <React.Fragment>
        <Form>
          <Input type="text"
            onChange={handleChange("organiserName")}
            defaultValue={values.organiserName}
            placeholder="Organiser Name"
          />
          <br />
          <br />
          <Input type="text" onChange={handleChange("role")} defaultValue={values.role} placeholder="Role" />
          <br />
          <br />
          <Input type="email" onChange={handleChange("email")} defaultValue={values.email} name="Email"
          placeholder="Email"/>
          <br />
          <br />
          <Input type="text"
            onChange={handleChange("ticketrequired")}
            defaultValue={values.ticketrequired}
            placeholder="Ticket"
          />
          <br />
          <br />
          <Input type="text"
            onChange={handleChange("ticketname")}
            defaultValue={values.ticketname}
            placeholder="Ticket Name"
          />
          <br />
          <br />
          <Radio.Group
            onChange={handleChange("isPaid")}
            defaultValue={values.isPaid}
          >
            <Radio value={true}>Paid</Radio>
            <Radio value={false}>Free</Radio>
          </Radio.Group>{" "}
          <br />
          <br />
          <Input type="text"
            onChange={handleChange("ticketprice")}
            defaultValue={values.ticketprice}
            placeholder="Price"
          />
          <br />
          <br />
        </Form>
        <Button type="primary" onClick={this.props.nextStep}>
          Continue
        </Button>

           
        <Button type="primary" onClick={this.props.previousStep}>
          Back
        </Button>
        <br />
        <br />
           
      </React.Fragment>
    );
  }
}

export default Step4Form;
