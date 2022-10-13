import { useEffect, useState } from 'react';
import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// http/headerにtokenを入れるためのモジュール
import {apiUrl} from "../../../settings/ApiClient";
import { auth } from "../../../settings/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { PrimaryButton, FlashMessages } from '../../Index';

const ReservedBookList = () => {
  const [flashMessage, setFlashMessage] = useState({ message: '', status: '', open: false });
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      const idToken = await auth.currentUser.getIdToken()
      apiUrl.get('/dashboards/users/own', { headers: {"Authorization" : `Bearer ${idToken}`} }).then(response => {
        setUserInfo(response.data)
      })
    })
  }, [])

  const returnMyReservation = (reservedId) => {
    onAuthStateChanged(auth, async(user) => {
      const idToken = await auth.currentUser.getIdToken()
      apiUrl.post(`/reservations/${reservedId}/return`, { headers: {"Authorization" : `Bearer ${idToken}`} }).then(response => {
        console.log(response.data)
        setFlashMessage({ message: response.data['message'], status: response.data['status'], open: true })
      })
    })
  }

  return (
    <TableContainer component={Paper} className="list">
      {flashMessage.open && <FlashMessages {...flashMessage}/>}
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
                  <img src={process.env.REACT_APP_S3_ENDPOINT + row.reservedBookImg} alt="" className="image" />
                  {row.reservedBookName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.startDate}</TableCell>
              <TableCell className="tableCell">{row.returnDate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.isReturn}`}>{row.isReturn ? '返却済み' : '未返却'}</span>
              </TableCell>
              <TableCell className="tableCell">
                {!row.isReturn && <PrimaryButton 
                  label={"返却を完了する"}
                  onClick={() =>
                    returnMyReservation(row.reservedId)
                  }
                  />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservedBookList;
