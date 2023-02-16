import React from "react";
import "./Dashboard.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Badge, CardHeader, IconButton } from "@mui/material";
import profile from "../../assets/profile.jpg";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { deepPurple } from "@mui/material/colors";
import Card from "../card/Card";
export default function Dashboard() {
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
          <div className="align-self-center" style={{marginRight:'50px'}}>
            <SearchOutlinedIcon
              style={{
                position: "absolute",
                marginLeft: "19",
                marginTop: "12px",
              }}
            />
            <input type="text" placeholder="search" />
          </div>
          <div className="align-self-center" style={{marginRight:'20px'}}>
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
            <Card />
            <Card />
            <Card />
            <Card />
      </div>
    </div>
  );
}
