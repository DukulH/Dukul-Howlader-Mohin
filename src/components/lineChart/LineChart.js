import React from "react";
import "./LineChart.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function LineChart() {
  const options = {
    title: {
      text: "U.S Solar Employment Growth by Job Category, 2010-2020",
      align: "left",
    },

    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
      align: "left",
    },

    yAxis: {
      title: {
        text: "Number of Employees",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2030",
      },
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: "Installation & Developers",
        data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="LineChart">
      <div
        style={{
          display: "flex",
          justifyContent:'space-between',
          alignItems: "center",
        }}
      >
        <div>
          <select name="region" id="region" className="RegionSelect">
            <option value="">Select Region</option>
            <option value="1">Mirpur</option>
            <option value="2">Dhanmondi</option>
            <option value="3">Gulshan</option>
          </select>
        </div>
        <div>
          {/* <label htmlFor="dateInput">Select Date: </label> */}
          <input name="dateInput" className="DateInput" type="date" />
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
