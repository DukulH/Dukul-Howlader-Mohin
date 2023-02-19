import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./BarChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export function BarChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="BarChart">
      <select name="category" className="CategorySelect">
        <option value="">Select Category</option>
        <option value="1">Mirpur</option>
        <option value="2">Dhanmondi</option>
        <option value="3">Gulshan</option>
      </select>
      <div className="d-flex justify-content-center" style={{height:'408px'}}>
        <Doughnut   data={data} />
      </div>
    </div>
  );
}
