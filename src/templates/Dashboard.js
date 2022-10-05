import React, { useEffect, useState } from "react";
import "../styles/Dashboard.scss";
import { UserList, Widget } from "../components/Dashboard/index";
import { apiUrl } from "../settings/ApiClient";

const Dashboard = () => {
  const [usersList, setUsersList] = useState([])
  useEffect(() => {
    apiUrl.get('/dashboards').then(response => {
      setUsersList(response)
    })
  }, [])

  return (
    <div className="dashboard">
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="book" />
          <Widget type="lend" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Now lending Users</div>
          <UserList usersList={usersList}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
