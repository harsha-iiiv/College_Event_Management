import React, { Component } from 'react'
import { Card, Icon, Avatar } from "antd";

const { Meta } = Card;
export default class Eventcard extends Component {
  render() {
    return (
      <div>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="icon-tuichu" key="setting" />,
             <Icon type="like" />,
            <Icon type="ellipsis" key="ellipsis" />
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={this.props.event.name}
            description={this.props.event.Description}
          />
        </Card>
      </div>
    );
  }
}
