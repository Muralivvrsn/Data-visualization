import React from "react";
import Chart from "react-apexcharts";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../chartData";



const Monthly = () => {
  
  return (
    <Chart
      type="line"
      width="100%"
      height="60%"
      className="pb-4 bg-white px-2 chart"
      options={lineChartOptionsTotalSpent}
      series={lineChartDataTotalSpent}
    />
  );
};

export default Monthly;
