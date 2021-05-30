import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Header/HeaderStyle.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ModalComponent from '../Modal/ModalComponent'
function Header() {
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var today = new Date();
  var currentDate = new String();
  var AmPm = today.getHours() >= 12 ? "PM" : "AM";
  var hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
  currentDate =
    days[today.getDay() + 1] +
    ", " +
    monthNames[today.getMonth() + 1] +
    ", " +
    today.getDate() +
    ", " +
    today.getFullYear() +
    ", " +
    hour +
    ": " +
    today.getMinutes() +
    " " +
    AmPm;
  return (
    <>
    <div className="header d-flex justify-content-between w-100 pt-2 ">
      <div className="date ml-4 d-flex">
        <p className="font-weight-bold ">Good morning </p>
        <p className="pl-2  text-muted"> {currentDate} </p>
      </div>
      <div className="notification d-flex justify-content-arround">
        <div className="icons">
          <HelpOutlineIcon></HelpOutlineIcon>
        </div>
        <div className="icons">
          <div className="notificationRed">
            <NotificationsIcon></NotificationsIcon>
          </div>
        </div>
        <h6>Nader Amer</h6>
        <h6 className="bg-light rounded-circle p-1 mx-3">NA</h6>
      </div>
    </div>
    <div className="d-flex justify-content-between mx-2 my-2 pt-2">
        <h4 class="overflow-hidden">User Management</h4>
        <ModalComponent></ModalComponent>
    </div>
    </>
  );
}

export default Header;
