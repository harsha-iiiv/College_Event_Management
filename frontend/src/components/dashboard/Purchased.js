import React from "react";
import cubejs from "@cubejs-client/core";
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
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzMzMjQzODQsImV4cCI6MTU3MzQxMDc4NH0.x0iPDpSJfevU9LELO16VcyA7Is4xgJWbUjUJgpITRl8",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = Component => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || <Spin />;

const PurChartRenderer = () => (
  <QueryRenderer
    query={{
      measures: [],
      timeDimensions: [],
      dimensions: [
        "Evenetregistrations.email",
        "Evenetregistrations.name",
        "Evenetregistrations.phone",
        "Events.name",
        "Events.ticketname",
        "Events.date",
        "Events.type"
      ],
      filters: []
    }}
    cubejsApi={cubejsApi}
    render={renderChart(tableRender)}
  />
);

export default PurChartRenderer;
