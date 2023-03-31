import React from "react";
import Chart from "react-apexcharts";
import { pieChartOptions, pieChartData } from "../chartData";

const Piechart = () => {
  return (
    <Chart
      type="pie"
      width="100%"
      height="90%"
      className="pie-chart"
      options={pieChartOptions}
      series={pieChartData}
    />
  );
};

export default Piechart;
