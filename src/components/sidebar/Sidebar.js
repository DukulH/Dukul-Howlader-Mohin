import React, { useState } from "react";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import { Link } from "@mui/material";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

  const [IS_SIDEBAR_OPEN, SET_IS_SIDEBAR_OPEN] = useState(false);
  const toggle_sidebar = () => SET_IS_SIDEBAR_OPEN(!IS_SIDEBAR_OPEN);
  const Sidebar_Menu_Item = [
    {
      name: "Dashboard",
      path: "/",
      icon: <DashboardIcon/>,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <AnalyticsOutlinedIcon/>,
    },
    {
      name: "Orders",
      path: "/order",
      icon: <ShoppingBasketIcon/>,
    },
    {
      name: "Product",
      path: "/product",
      icon: <InventoryIcon/>,
    },
    {
      name: "Category",
      path: "/category",
      icon: <CategoryIcon/>,
    },
    {
      name: "Region",
      path: "/region",
      icon: <MapOutlinedIcon/>,
    },
  ];

  return (
    <div
      className="Sidebar"
      style={{ width: IS_SIDEBAR_OPEN ? "230px" : "50px" }}
    >
      <div className="LogoSection">
        <h1
          className="Logo"
          style={{ display: IS_SIDEBAR_OPEN ? "block" : "none" }}
        >
          STYLEIST
        </h1>
        <div
          className="ToggleBar"
          style={{ marginLeft: IS_SIDEBAR_OPEN ? "40px" : "0px" }}
        >
          <MenuIcon style={{ fontSize: "30" }} onClick={toggle_sidebar} />
        </div>
      </div>

      <>
        {Sidebar_Menu_Item.map((menu_item, index) => (
          <NavLink
            to={menu_item.path}
            key={index}
            className="NavigationLink"
            activeClassName="active"
          >
            <div className="NavigationMenuIcon">{menu_item.icon}</div>
            <div
            className="NavigationMenuText"
              style={{ display: IS_SIDEBAR_OPEN? "block" : "none"}}
            >
              {menu_item.name}
            </div>
          </NavLink>
        ))}
      </>
    </div>
  );
}
