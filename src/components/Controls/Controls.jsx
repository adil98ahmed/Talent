import { React, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import LockIcon from "@material-ui/icons/Lock";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GetAppIcon from "@material-ui/icons/GetApp";
import "bootstrap";
import "./ControlsStyle.css";
import "popper.js";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
function Controls(props) {
  var check = false;
  const [searchValue, setsearchValue] = useState("");
  function searchUser() {
    var users = props.values;
    for (var i = 0; i < users.length; i++) {
      if (users[i]["email"] == searchValue.trim()) {
        users = [users[i]];
        props.setValue(users);
        break;
      }
    }
  }
  return (
    <>
      <div className="d-flex  mx-2 ">
        <Form>
          <div className="search mr-2 d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={(event) => {
                console.log(searchValue);
                setsearchValue(event.target.value);
              }}
            />

            <Button size="sm ml-1" onClick={searchUser}>
              Search
            </Button>
          </div>
        </Form>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div class="icons d-flex">
          <h5 className="d-inline-block overflow-hidden ">
            1 selected
            <span className="px-2">|</span>
          </h5>
          <div className="px-2 rounded mr-2 ml-1  icon">
            <EditIcon></EditIcon>
          </div>
          <div className="px-2 py-0 rounded mr-2 ml-1  icon">
            <NotInterestedIcon></NotInterestedIcon>
          </div>
          <div className="px-2 py-0 rounded mr-2 ml-1  icon">
            <LockIcon></LockIcon>
          </div>
          <div className="px-2 text-center rounded mr-2 ml-1  icon">
            <p className="mt-auto pb-0">Assign to Profile</p>
          </div>
          <div className="px-2 text-center rounded mr-2 ml-1 icon">
            <p className="mt-auto pb-0">Assign to Group</p>
          </div>
          <div className="px-2 py-0 rounded mr-2 ml-1  icon">
            <MoreVertIcon></MoreVertIcon>
          </div>
          <a className="pt-2 text-muted unselect" href="#">
            <abbr> Unselect all</abbr>
          </a>
        </div>
        <div className="px-2 py-0 rounded mr-3 ml-1  icon">
          <GetAppIcon></GetAppIcon>
        </div>
      </div>
    </>
  );
}

export default Controls;
