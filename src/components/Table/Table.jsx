import React from "react";
import Table from "react-bootstrap/Table";
import "./TableStyle.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
function TableComponent(props) {
  var users = props.values;

  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="d-flex border-0">
              <div className="selectall bg-transparent">
                <IndeterminateCheckBoxIcon color="success"></IndeterminateCheckBoxIcon>
              </div>
              <p className="ml-3 text-muted">Name</p>
            </th>
            <th className="border-0">User Name</th>
            <th className="border-0">Email Address</th>
            <th className="border-0">Group</th>
            <th className="border-0">Status</th>
            <th className="border-0">Created On</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td className="d-flex border-0">
                <div className="unselect bg-transparent ">
                  <CheckBoxOutlineBlankIcon color="success"></CheckBoxOutlineBlankIcon>
                </div>
                <h6 className="p-2 d-inlin-block bg-light rounded-circle ml-1">
                  {user["name"]["firstname"][0].toUpperCase() +
                    user["name"]["lastname"][0].toUpperCase()}
                </h6>

                <p className="ml-3">
                  {user["name"]["firstname"] + " " + user["name"]["lastname"]}
                </p>
              </td>
              <td className="border-0">{user["username"]}</td>
              <td className="border-0">{user["email"]}</td>
              <td className="border-0">{user["id"]}</td>
              <td className="d-flex justify-content-between border-0">{user["address"]["city"]}
              <div className="iconTable">
                <ExpandMoreIcon></ExpandMoreIcon>
              </div>
              </td>
              <td className="border-0">@mdo</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
