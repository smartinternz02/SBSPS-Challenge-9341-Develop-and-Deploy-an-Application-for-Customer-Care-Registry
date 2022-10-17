import React, { Component, useEffect, useState } from "react";
import LayoutAdmin from "../../MainLayout/LayoutAdmin";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core";
import { Box, Icon, Button, Typography, SpeedDialIcon } from "@mui/material";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import Grid from "@mui/material/Grid";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Avatar } from "@mui/material";
import { TableFooter } from "@mui/material";
import { TablePagination } from "@mui/material";
import { Link } from "react-router-dom";
import Axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
  links: {
    textDecorationLine: "none",
  },
});

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    borderRadius: 15,

    width: "1200px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "#0D80D8",
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: "black",
    position: "relative",
    top: "8px",
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

function Tickets() {
  const style = styles();
  const [age, setAge] = React.useState("");
  const classes = useStyles();
  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const orgname = localStorage.getItem("orgname");

  useEffect(() => {
    Axios.post("http://localhost:8080/organization/admin/tickets", {
      orgname,
    }).then((response) => {
      if (response) {
        setTicketsData(response.data.message);
      } else {
        setTicketsData([
          {
            name: "Nishanth",
            email: "abc@gmail.com",
            query: "Phone",
            phonenumber: 8754933442,
            status: "pending",
          },
        ]);
      }
    });
  });

  const [ticketsData, setTicketsData] = useState([
    {
      name: "Nishanth",
      email: "abc@gmail.com",
      query: "Phone",
      phonenumber: 8754933442,
      status: "pending",
    },
  ]);

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
    <LayoutAdmin>
      <Grid className={style.Grid}>
        <Typography variant="h5">Tickets</Typography>
        <br></br>
        <TableContainer
          component={Paper}
          elevation={5}
          className={classes.tableContainer}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    User Info
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Email
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Number
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Problem Info
                  </Typography>
                </TableCell>

                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticketsData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar
                          alt={row.name}
                          src="."
                          className={classes.avatar}
                          sx={{ bgcolor: "#0D80D8" }}
                        >
                          {row.name.charAt(0)}
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        sx={{ position: "relative", left: "10px" }}
                        lg={10}
                      >
                        <Typography
                          style={{ position: "relative", left: "7px" }}
                          className={classes.name}
                        >
                          {row.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="black" variant="subtitle2">
                      {row.phonenumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="black" variant="subtitle2">
                      {row.query}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      className={classes.status}
                      sx={{ bgcolor: "#0D80D8" }}
                      variant="button"
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
    </LayoutAdmin>
  );
}

export default Tickets;
