import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core";
import LayoutAgent from "../../MainLayout/LayoutAgent";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    width: "1220px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#0D80D8",
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

let USERS = [],
  STATUSES = ["Active", "Pending", "Blocked"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    name: " Nishanth",
    email: "whitedevil",
    phone: 8754954543,
    probleminfo: "My mobile phone",
    jobTitle: "Web Designer",
    company: "tech phantoms",
    joinDate: "22-02-2003",
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

const styles = makeStyles({
  Grid: {
    position: "relative",
    top: "100px",
    width: "100%",
    height: "650px",

    padding: "18px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
});

function Customers() {
  const style = styles();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <LayoutAgent>
      <Grid className={style.Grid}>
        <Typography variant="h5">Customers</Typography>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  User Info
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Problem Info
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Job Info
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Joining Date
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {USERS.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar
                          alt={row.name}
                          src="."
                          className={classes.avatar}
                        >
                          N
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        lg={10}
                        sx={{ position: "relative", left: "10px" }}
                      >
                        <Typography className={classes.name}>
                          {row.name}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {row.email}
                        </Typography>
                        <Typography color="textSecondary" variant="body2">
                          {row.phone}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.probleminfo}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.jobTitle}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.company}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.joinDate}</TableCell>
                  <TableCell>
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor:
                          (row.status === "Active" && "green") ||
                          (row.status === "Pending" && "blue") ||
                          (row.status === "Blocked" && "orange"),
                      }}
                    >
                      {row.status}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LayoutAgent>
  );
}

export default Customers;
