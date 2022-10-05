import React, { useEffect, useState } from "react";
import "../styles/Dashboard.scss";
import { UserList, Widget } from "../components/Dashboard/index";

// headerにtokenを入れるためのモジュール
import { apiUrl } from "../settings/ApiClient";
import { auth } from "../settings/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const [usersList, setUsersList] = useState([])
  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      const idToken = await auth.currentUser.getIdToken()
      apiUrl.get('/dashboards', { headers: {"Authorization" : `Bearer ${idToken}`} }).then(response => {
        setUsersList(response)
      })
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
