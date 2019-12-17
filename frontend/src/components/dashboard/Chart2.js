import React from 'react';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import { Row, Col, Statistic, Table } from 'antd';

const tableRender = ({ resultSet }) => (
  <Table 
    pagination={false}
    columns={resultSet.tableColumns().map(c => ({ ...c, dataIndex: c.key }))} 
    dataSource={resultSet.tablePivot()} 
  />
  
);

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzM0NjEzODAsImV4cCI6MTU3MzU0Nzc4MH0.iTB8r163Pbhqn34tbLQd_abeV1kET925eICb9LYOgjo",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (Component) => ({ resultSet, error }) => (
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || 
  (<Spin />)
)

const Chart2 = () => <QueryRenderer
  query={{
    "dimensions": [
      "Evenetregistrations.name",
      "Events.name"
    ],
    "timeDimensions": [],
    "filters": []
  }}
  cubejsApi={cubejsApi}
  render={renderChart(tableRender)}
/>;

export default Chart2;
