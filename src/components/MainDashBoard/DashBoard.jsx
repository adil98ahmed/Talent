import { React, useEffect, useState } from "react";
import Header from "../Header/Header";
import "../Header/HeaderStyle.css";
import Controls from "../Controls/Controls";
import TableComponent from "../Table/Table";
import { Spinner } from "react-bootstrap";
function DashBoard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchData = async () => {
    const url = "https://fakestoreapi.com/users";
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data);
    setLoading(true);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="border p-3 m-3">
        <Controls setValue={(x) => setUsers(x)} values={users}></Controls>
        {isLoading ? (
          <TableComponent values={users}></TableComponent>
        ) : (
          <div className="mt-5 text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
