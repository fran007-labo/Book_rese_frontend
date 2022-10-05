import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const UserList = (props) => {
  const rows = props.usersList.data
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Users</TableCell>
            <TableCell className="tableCell">lending books</TableCell>
            <TableCell className="tableCell">start date</TableCell>
            <TableCell className="tableCell">return date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.userName}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.bookCount}</TableCell>
              <TableCell className="tableCell">{row.startDate}</TableCell>
              <TableCell className="tableCell">{row.returnDate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
