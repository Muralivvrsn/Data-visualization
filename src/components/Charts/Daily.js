import React from "react";
import Chart from "react-apexcharts";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../chartData";

const Daily = () => {
  return (
    <Chart
      type="bar"
      width="100%"
      height="81%"
      className="pb-4 bg-white"
      options={barChartOptionsDailyTraffic}
      series={barChartDataDailyTraffic}
    />
  );
};

export default Daily;
