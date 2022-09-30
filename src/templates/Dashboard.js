import "../styles/Dashboard.scss";
import { UserList, Sidebar, Navbar, Widget } from "../components/Dashboard/index";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="book" />
          <Widget type="lend" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
