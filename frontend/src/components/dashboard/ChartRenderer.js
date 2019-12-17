import React from "react";
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import { Spin } from "antd";
import { Row, Col, Statistic, Table } from "antd";
import BarChart from "./Chart";
import Chart2 from './Chart2'

const tableRender = ({ resultSet }) => (
  <Table
    pagination={false}
    columns={resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key }))}
    dataSource={resultSet.tablePivot()}
  />
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzMzMDIyNzUsImV4cCI6MTU3MzM4ODY3NX0.1WYQSAS1X3FErKLlHAh_GnDXLyMAFY7y8nWJVvw5BqE",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = Component => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || <Spin />;

const ChartRenderer = () => (
  <React.Fragment>
    <Chart2/>
    <BarChart />
    <QueryRenderer
      query={{
        dimensions: ["Evenetregistrations.name"],
        timeDimensions: [
          {
            dimension: "Evenetregistrations.createdat"
          }
        ],
        measures: ["Evenetregistrations.count"],
        filters: []
      }}
      cubejsApi={cubejsApi}
      render={renderChart(tableRender)}
    />
  </React.Fragment>
);

export default ChartRenderer;
