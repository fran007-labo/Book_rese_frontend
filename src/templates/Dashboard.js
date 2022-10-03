import React, { useEffect } from "react";
import "../styles/Dashboard.scss";
import { UserList, Widget } from "../components/Dashboard/index";

import { apiUrl } from "../settings/ApiClient";

const Dashboard = () => {
  useEffect(() => {
    apiUrl.get('/dashboards').then(response => {
      console.log(response)
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
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
