import React from "react";
import cubejs from "@cubejs-client/core";
import { connect } from "react-redux";
import { QueryRenderer } from "@cubejs-client/react";
import { Spin } from "antd";
import { Row, Col, Statistic, Table } from "antd";

const tableRender = ({ resultSet }) => (
  <Table
    pagination={false}
    columns={resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key }))}
    dataSource={resultSet.tablePivot()}
  />
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzMzMjE0OTAsImV4cCI6MTU3MzQwNzg5MH0.eGTragKKOLFyJ4YOls0gNx13DhGdALYQhOytvDv23I4",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = Component => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || <Spin />;

const UserChartRenderer = ({ name }) => (
  <QueryRenderer
    query={{
      dimensions: [
        "Evenetregistrations.name",
        "Events.name",
        "Events.venue",
        "Events.date"
      ],
      timeDimensions: [],
      measures: [],
      filters: [
        {
          dimension: "Evenetregistrations.name",
          operator: "contains",
          values: [name]
        }
      ]
    }}
    cubejsApi={cubejsApi}
    render={renderChart(tableRender)}
  />
);
const mapStateToProps = state =>({
   name: state.auth.normalUser.name
 });   
export default connect(mapStateToProps)(UserChartRenderer); 

