import React, { Component, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { Avatar } from "@mui/material";
import { makeStyles, styled } from "@material-ui/core";
import LayoutAgent from "../../MainLayout/LayoutAgent";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LayoutAdmin from "../../MainLayout/LayoutAdmin";
import Axios from "axios";

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

function CustomersAdmin() {
  const style = styles();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [customerdata, setCustomerData] = useState([
    {
      name: "Empty",
      email: "Empty@gmail.com",
      phonenumber: "Empty",
      region: "Empty",
    },
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const orgname = localStorage.getItem("orgname");

  useEffect(() => {
    Axios.post("http://localhost:8080/admin/customers", {
      orgname,
    }).then((response) => {
      setCustomerData(response.data.message);
    });
  });

  return (
    <LayoutAdmin>
      <Grid className={style.Grid}>
        <Typography variant="h5">Customers</Typography>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  UserName
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>Email</TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Phone Number
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Region
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerdata.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar
                          alt={row.name}
                          src="."
                          sx={{ bgcolor: "#0D80D8" }}
                        >
                          {row.name.charAt(0)}
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        lg={10}
                        sx={{ position: "relative", left: "10px" }}
                      >
                        <Typography
                          variant="subtitle2"
                          style={{ color: "black", fontWeight: "100" }}
                          className={classes.name}
                        >
                          {row.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography style={{ color: "black" }} variant="subtitle2">
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography style={{ color: "black" }} variant="subtitle2">
                      {row.phonenumber}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LayoutAdmin>
  );
}

export default CustomersAdmin;
