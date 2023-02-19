import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Badge, CardHeader } from "@mui/material";
import profile from "../../assets/profile.jpg";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Card from "../card/Card";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InventoryIcon from "@mui/icons-material/Inventory";
import StoreIcon from "@mui/icons-material/Store";
import Footer from "../footer/Footer";
import LineChart from "../lineChart/LineChart";
import { DoughnutChart } from "../doughnutChart/DoughnutChart";
import TopProductsTable from "../topProductsTable/TopProductsTable";


export default function Dashboard() {
  const [CARD_TOTAL_DATA, SET_CARD_TOTAL_DATA] = useState({});



  useEffect(() => {
    fetch("http://localhost:8001/cardData")
      .then((response) => response.json())
      .then((data) => SET_CARD_TOTAL_DATA(data));
  }, []);
  const CARD_DATA = [
    {
      name: "Total Sale",
      icon: <AttachMoneyIcon style={{ color: "#fd6a01" }} />,
      total: `${CARD_TOTAL_DATA.order_total__sum / 1000}K`,
      background_color_code: "#fef6f0",
      text_color_code: "#fd6a01",
    },
    {
      name: "Total Order",
      icon: <LocalMallIcon style={{ color: "#6433fe" }} />,
      total: CARD_TOTAL_DATA.order_id__count,
      background_color_code: "#f0eefe",
      text_color_code: "#6433fe",
    },
    {
      name: "Total Product",
      icon: <InventoryIcon style={{ color: "#13bcfe" }} />,
      total: CARD_TOTAL_DATA.product_id__count,
      background_color_code: "#e6f8fe",
      text_color_code: "#13bcfe",
    },
    {
      name: "Total Store",
      icon: <StoreIcon style={{ color: "#fc3361" }} />,
      total: CARD_TOTAL_DATA.region_id__count,
      background_color_code: "#fceef7",
      text_color_code: "#fc3361",
    },
  ];
  return (
    <div className="Dashboard">
      <div className="DashboardHeader">
        <div className="DashboardHeaderLeftSection">
          <h3>Dashboard</h3>
          <p style={{ color: "#a3aac3" }}>
            Styleist is a unique cloth and footwear brand
          </p>
        </div>
        <div className="DashboardHeaderRightSection">
          <div className="align-self-center" style={{ marginRight: "50px" }}>
            <SearchOutlinedIcon
              style={{
                position: "absolute",
                marginLeft: "19",
                marginTop: "12px",
              }}
            />
            <input type="text" placeholder="search" />
          </div>
          <div className="align-self-center" style={{ marginRight: "20px" }}>
            <Badge badgeContent={4} color="error">
              <NotificationsNoneOutlinedIcon color="action" />
            </Badge>
          </div>
          <div>
            <CardHeader
              avatar={<Avatar alt="Dukul Howlader Mohin" src={profile} />}
              title="Dukul Howlader Mohin"
              subheader="Admin"
            />
          </div>
        </div>
      </div>

      <div className="DashboardCardSection">
        {CARD_DATA.map((card_item, index) => (
          <Card card_item={card_item} key={index} />
        ))}
      </div>

      <div className="ChartSection">
        <div className="ChartLeftSection">
          <LineChart />
          </div>
        <div className="ChartRightSection">
           <DoughnutChart />
        </div>
      </div>
      
      <div className="ChartSection mb-5">
        <div className="ChartLeftSection">
          <TopProductsTable />
          </div>
        <div className="ChartRightSection">
           <DoughnutChart/>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
}
