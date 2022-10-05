import { useEffect, useState } from 'react';
import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// headerにtokenを入れるためのモジュール
import {apiUrl} from "../../../settings/ApiClient";
import { auth } from "../../../settings/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ReservedBookList = () => {
  const [userInfo, setUserInfo] = useState([])
  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      const idToken = await auth.currentUser.getIdToken()
      apiUrl.get('/dashboards/users/2', { headers: {"Authorization" : `Bearer ${idToken}`} }).then(response => {
        setUserInfo(response.data)
      })
    })
  }, [])

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Book</TableCell>
            <TableCell className="tableCell">start date</TableCell>
            <TableCell className="tableCell">return date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userInfo && userInfo.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.book}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.startDate}</TableCell>
              <TableCell className="tableCell">{row.returnDate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">返却を完了する</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservedBookList;
