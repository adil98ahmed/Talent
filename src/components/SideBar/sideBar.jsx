import React, { Component, useEffect } from "react";
import "./sideBar.css";
import SearchIcon from "@material-ui/icons/Search";
import DashboardIcon from "@material-ui/icons/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { render } from "react-dom";
import AccordionComponent from '../Accordion/Accordion';
function SideBar() {
  
  return (
    <div className="SideBar">
      <h1 class="overflow-hidden">LOGO</h1>
      <div className="seachDiv">
        <input
          className="inputSearch"
          placeholder="          Quick access"
          type="text"
        ></input>
        <SearchIcon fontSize="large" className="searchIcon"></SearchIcon>
      </div>
      <div className="sideBarContent mt-3 mr-3 ml-2">
        <div className="titleDashBoard ">
          <DashboardIcon
            fontSize="large"
            className="dashBoardIcon"
          ></DashboardIcon>
          <h5 className="pl-3 overflow-hidden">DashBoard</h5>
        </div>
        <h6 className="mt-5 overflow-hidden">SETTINGS</h6>
        <AccordionComponent></AccordionComponent>
         </div>
    </div>
  );
}

export default SideBar;
