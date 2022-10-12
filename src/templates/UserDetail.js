import "../styles/UserDatail.scss";
import { 
  ReservedBookList, 
  Chart 
} from "../components/Dashboard/index";
import { useDispatch, useSelector } from "react-redux";
import { getUserName, getUserEmail, getUserPhotoURL } from "../reducks/users/selectors";

const UserDetail = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const userName = getUserName(selector);
  const userEmail = getUserEmail(selector);
  const userIcon = getUserPhotoURL(selector);
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={userIcon}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userEmail}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">JAPAN</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Letest Booking</h1>
          <ReservedBookList />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
