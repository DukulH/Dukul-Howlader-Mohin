import React, { useEffect, useState } from "react";
import "./LineChart.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import RingLoader from "react-spinners/RingLoader";

export default function LineChart() {
  const [RegionID, SetRegionID] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [DateRange, SetDateRange] = useState({
    startDate: "2023-01-01",
    endDate: "2023-02-20",
  });
  const [LineChartData, SetLineChartData] = useState({
    title: {
      text: "Sales data from January,1 2023 - February, 20 2023",
      align: "left",
    },

    yAxis: {
      title: {
        text: "Sales Amount",
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 480,
          },
        },
      ],
    },
  });

  const handleRegionChange = (e) => {
    SetRegionID(e.target.value);
  };
  const handleStartDateChange = (e) => {
    SetDateRange({
      startDate: e.target.value,
      endDate: "",
    });
  };
  const handleEndDateChange = (e) => {
    SetDateRange({
      startDate: DateRange.startDate,
      endDate: e.target.value,
    });
  };

  useEffect(() => {
    if (DateRange.startDate && DateRange.endDate !== "") {
      setShowLoader(true);
      fetch(
        `https://agrigate-service.onrender.com/regionAndDateWiseData/${RegionID}/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(DateRange),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const seriesData = []; //creating empty array to push total sales data
          const xAxisCategoryData = []; //creating empty array for push line chart x axis data
          data.forEach((element) => {
            let dateFormate = new Date(element.order_date);
            xAxisCategoryData.push(
              dateFormate.toLocaleString("default", {
                //convert date into day and month name. Example:'2023-1-1 into 1 jan'
                day: "numeric",
                month: "short",
              })
            );
            seriesData.push(element.order_total);
          });
          SetLineChartData({
            xAxis: {
              accessibility: {
                rangeDescription: "Range: January,1 2023 - February, 20 2023",
              },
              showLastLabel: true,
              categories: xAxisCategoryData,
            },

            series: [
              {
                pointPlacement: "on",
                data: seriesData,
                name: "Sales Amount According Date",
              },
            ],
          });
          setShowLoader(false);
        });
    }
  }, [RegionID, DateRange]);
  return (
    <div className="LineChart">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <select
            name="region"
            onChange={handleRegionChange}
            id="region"
            className="RegionSelect"
          >
            <option value="0">Select Region</option>
            <option value="1">Mirpur</option>
            <option value="2">Dhanmondi</option>
            <option value="3">Gulshan</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateInput1" className="me-2">
            Start Date:{" "}
          </label>
          <input
            name="dateInput1"
            onChange={handleStartDateChange}
            className="DateInput"
            type="date"
          />
          <label htmlFor="dateInput2" className="mx-2">
            End Date:{" "}
          </label>
          <input
            name="dateInput2"
            onChange={handleEndDateChange}
            className="DateInput"
            type="date"
          />
        </div>
      </div>

      {showLoader ? (
        <div className="d-flex justify-content-center">
          <RingLoader
            loading={showLoader}
            aria-label="Loading Spinner"
          />
        </div>
      ) : (
        <HighchartsReact highcharts={Highcharts} options={LineChartData} />
      )}
    </div>
  );
}
