import { Form, Input, Button, Checkbox, Select } from "antd";
import React, { Fragment, useState } from "react";
import { announceEvent } from "../../actions/events";

import { connect } from "react-redux";

const { Option } = Select;

const { TextArea } = Input;

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}
const AnnounceEvent = ({ events, announceEvent }) => {
  events.forEach((event, i, array) => {});
  const [formData, setFormData] = useState({
    eventID: ""
  });
  const [formValid, setformValid] = useState({
    isValid: true
  });

  const { eventID } = formData;

  const onChange = e => {
    console.log(e);

    setFormData({ ...formData, eventID: e });
  };
  const handelMsg = msg => {
    console.log(msg);

    setFormData({ ...formData, msg: msg });
  };

  const onSubmit = e => {
    e.preventDefault();
    announceEvent(eventID, "Please visit the web site for new updates")
  };

  return (
    <Fragment>
      <div class="container adminlogin">
        <Form onSubmit={e => onSubmit(e)} className="login-form">
          <Form.Item style={{ width: "30%" }}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              name="eventID"
              value={eventID}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="5dc8dba904023d405098edf7">
                Idea Generation Techniques
              </Option>
              <Option value="5dc8dc6f04023d405098edfb">Code and coffee</Option>
              <Option value="5dc5af1bbb35e42de01abbe0">Node Js</Option>
            </Select>
          </Form.Item>

          <Form.Item style={{ width: "30%" }}>
            <Button
              type="primary"
              disabled={!formValid.isValid}
              htmlType="submit"
              className="login-form-button"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
        <Input
          name="msg"
          onChange={e => {
            handelMsg(e);
          }}
          minLength="6"
          required
          rows={4}
          defaultValue="Alert, Please visit the website for new changes"
        />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  events: state.events.events
})



export default connect(mapStateToProps, {announceEvent})(AnnounceEvent)