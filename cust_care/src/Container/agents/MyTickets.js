import React, { Component, useEffect, useState } from "react";
import LayoutAgent from "../../MainLayout/LayoutAgent";
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
import { toast, ToastContainer } from "react-toastify";
import CallIcon from "@mui/icons-material/Call";

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
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
    fontWeight: "bold",
    color: "black",
    position: "relative",
    left: "15px",
    top: "10px",
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
  STATUSES = ["Low", "Medium", "High"];
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

function MyTickets() {
  const style = styles();
  const [age, setAge] = React.useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [ticketsData, setTicketsData] = useState([
    {
      name: "Nishanth",
      email: "abc@gmail.com",
      query: "Phone",
      phonenumber: 8754933442,
      status: "pending",
      taken: "NOT_TAKEN",
    },
  ]);
  const AgentOrgName = localStorage.getItem("AgentOrgname");
  const agent = localStorage.getItem("agentname");

  useEffect(() => {
    Axios.post("http://localhost:8080/organization/agent/mytickets", {
      agentname: agent,
      orgname: AgentOrgName,
    }).then((response) => {
      console.log(
        response.data.message.map((row) => {
          return row.id;
        })
      );
      setTicketsData(response.data.message);
    });
  }, []);

  // const takeHandler = () => {
  //   Axios.post("http://localhost:8080/organization/agent/tickets/takenupdate",{

  //   });
  // };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <LayoutAgent>
      <ToastContainer />
      <Grid className={style.Grid}>
        <Typography variant="h5">Tickets</Typography>
        <br></br>
        <TableContainer component={Paper} className={classes.tableContainer}>
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
                    Number{" "}
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Problem Info
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Call
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Status Update
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Solve
                  </Typography>
                </TableCell>
                {/* <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Status
                  </Typography>
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  <Typography style={{ color: "white", fontWeight: "bold" }}>
                    Taken
                  </Typography>
                </TableCell> */}
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
                          src=""
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
                        <Typography className={classes.name}>
                          {row.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Typography color="black" variant="subtitle2">
                      {row.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="black" variant="subtitle2">
                      {row.phonenumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {/* {" "}
                    <Link
                      to={`/${AgentOrgName}/agent/${agent}/tickets/${row.id}`}
                      target="_blank"
                      className={style.links}
                    >
                     
                    </Link> */}
                    {row.query}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      disableRipple
                      style={{
                        position: "relative",
                        right: "135px",
                        bottom: "30px",
                      }}
                      onClick={async () => {
                        await Axios.post("http://localhost:8080/call/", {
                          number: row.phonenumber,
                        });
                      }}
                    >
                      <CallIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={async () => {
                        await Axios.post(
                          "http://localhost:8080/organization/agent/mytickets/statusupdate",
                          {
                            id: row.id,
                            agentname: agent,
                            orgname: AgentOrgName,
                          }
                        ).then((response) => {
                          alert("Success");
                          console.log(response);
                        });
                      }}
                      variant="contained"
                    >
                      In Progress
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={async () => {
                        await Axios.post(
                          "http://localhost:8080/organization/agent/mytickets/solveupdate",
                          {
                            id: row.id,
                          }
                        );
                        await Axios.post(
                          "http://localhost:8080/organization/agent/tickets/solvedemailupdate",
                          {
                            id: row.id,
                            agentname: agent,
                          }
                        ).then((response) => {
                          alert(response.data.message);
                          console.log(response.data.message);
                        });
                      }}
                      variant="contained"
                    >
                      Click to Solve
                    </Button>
                  </TableCell>

                  {/* <TableCell>
                    <Typography
                      className={classes.status}
                      style={{
                        backgroundColor:
                          (row.status === "Low" && "green") ||
                          (row.status === "Medium" && "blue") ||
                          (row.status === "High" && "orange"),
                      }}
                    >
                      {row.status}
                    </Typography>
                  </TableCell> */}
                  {/* <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.taken}
                    </Typography>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LayoutAgent>
  );
}

export default MyTickets;
