import React from "react";
import Chart from "react-apexcharts";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
} from "../chartData";

const Weekly = () => {
  return (
    <Chart
      type="bar"
      className="pb-4 bg-white"
      options={barChartOptionsWeeklyRevenue}
      series={barChartDataWeeklyRevenue}
      width="100%"
      height="80%"
    />
  );
};

export default Weekly;
