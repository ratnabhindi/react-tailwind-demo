import React from "react";
import { Pie, Line } from "react-chartjs-2";
import { dataPie, dataLine } from "../../Data/chart";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Charts = () => (
  <div>
    <div className="chart">
      <h2>Pie Chart</h2>
      <Pie data={dataPie} />
    </div>
    <div className="chart">
      <h2>Line Chart</h2>
      <Line data={dataLine} />
    </div>
  </div>
);

export default Charts;
