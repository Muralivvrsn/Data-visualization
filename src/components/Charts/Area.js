import React from "react";
import Chart from "react-apexcharts";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../chartData";

const Area = () => {
  return (
    <Chart
      type="area"
      width="100%"
      height="86%"
      options={lineChartOptionsTotalSpent}
      series={lineChartDataTotalSpent}
    />
  );
};

export default Area;
