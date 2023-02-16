import React from "react";
import "./Dashboard.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Badge, CardHeader } from "@mui/material";
import profile from "../../assets/profile.jpg";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Card from "../card/Card";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
export default function Dashboard() {

  const CARD_DATA = [
    {
      name:"Total Sale",
      icon:<AttachMoneyIcon style={{color:'#fd6a01'}} />,
      total:"255.55k",
      background_color_code:'#fef6f0',
      text_color_code:'#fd6a01'
    },
    {
      name:"Total Order",
      icon:<LocalMallIcon style={{color:'#6433fe'}}/>,
      total:"90",
      background_color_code:'#f0eefe',
      text_color_code:'#6433fe'
    },
    {
      name:"Total Product",
      icon:<InventoryIcon style={{color:"#13bcfe"}} />,
      total:"200",
      background_color_code:'#e6f8fe',
      text_color_code:'#13bcfe'
    },
    {
      name:"Total Store",
      icon:<StoreIcon style={{color:"#fc3361"}}/>,
      total:"12",
      background_color_code:'#fceef7',
      text_color_code:'#fc3361'
    },
  ]
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
            {
              CARD_DATA.map((card_item, index) => (
                <Card card_item={card_item} key={index}/>
              ))
            }
      </div>
    </div>
  );
}
