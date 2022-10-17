import React, { Component, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import { Card } from "@mui/material";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { Box } from "@mui/system";
import {
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Icon,
} from "@mui/material";
import { makeStyles, styled } from "@material-ui/core";
import LayoutCustomer from "../../../MainLayout/LayoutCustomer";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  STATUSES = ["View Status"];
for (let i = 0; i < 14; i++) {
  USERS[i] = {
    content: "I don't receive my amount",
    date: "22-02-2003",
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
  };
}

const styles = makeStyles({
  content: {
    position: "relative",
    top: "100px",
    width: "1200px",
    padding: "18px",
    display: "flex",
    left: "22px",
  },

  container: {
    position: "relative",
    left: "29px",
  },

  icon: {
    color: "white",
    position: "relative",
    left: "18px",
    top: "15px",
  },
  boxIcon1: {
    width: "60px",
    height: "60px",
    backgroundColor: "#323237",
    borderRadius: "60px",
    position: "relative",
    top: "15px",
    left: "20px",
  },
  boxIcon2: {
    width: "60px",
    height: "60px",
    backgroundColor: "#348EED",
    borderRadius: "10px",
    position: "relative",
    top: "15px",
    left: "20px",
  },
  boxIcon3: {
    width: "60px",
    height: "60px",
    backgroundColor: "#58B05C",
    borderRadius: "10px",
    position: "relative",
    top: "15px",
    left: "20px",
  },
  boxIcon4: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    position: "relative",
    top: "15px",
    left: "20px",
  },
  boxes: {
    display: "flex",
  },

  Grid1: {
    position: "relative",
    top: "100px",
    width: "1200px",
    height: "650px",
    left: "15px",
  },

  link: {
    textDecoration: "none",
    color: "black",
  },

  tickets: {
    position: "relative",
    left: "100px",
    top: "15px",
    color: "#9498AD",
  },

  tickets_count: {
    color: "black",
  },
});

function Customers() {
  const style = styles();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const customername = localStorage.getItem("custname");
  const [ticketData, setTicketData] = useState([
    {
      query: "Phone Problem",
      timestamp: "",
    },
  ]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    Axios.post("http://localhost:8080/customer/tickets", {
      customername,
    }).then((response) => {
      setTicketData(response.data.message);
    });
  });
  const custname = localStorage.getItem("custname");

  const [raisedtickets, setraisedTickets] = useState(281);
  const [solvedTickets, setsolvedTickets] = useState(281);
  const [unSolvedTickets, setunSolvedTickets] = useState(281);

  useEffect(() => {
    Axios.post("http://localhost:8080/customer/dashboard/raisedtickets", {
      custname,
    }).then((response) => {
      setraisedTickets(response.data.message.length);
    });

    Axios.post("http://localhost:8080/customer/dashboard/solvedtickets", {
      custname,
    }).then((response) => {
      setsolvedTickets(response.data.message.length);
    });

    Axios.post("http://localhost:8080/customer/dashboard/unsolvedtickets", {
      custname,
    }).then((response) => {
      setunSolvedTickets(response.data.message.length);
    });
  }, []);

  return (
    <LayoutCustomer>
      <Grid className={style.content}>
        <Grid container className={style.container}>
          <Grid item xs={4} sx={{ padding: "0px" }}>
            <Card sx={{ height: "100px", width: "350px" }}>
              <Box className={style.boxes}>
                <Box className={style.boxIcon1}>
                  <AdUnitsIcon className={style.icon} />
                </Box>
                <Box>
                  <Typography className={style.tickets}>
                    Raised Tickets<br></br>
                    <Typography className={style.tickets_count}>
                      <strong>{raisedtickets}</strong>
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Card>
          </Grid>

          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ height: "100px", width: "350px" }}>
              <Box className={style.boxes}>
                <Box className={style.boxIcon2}>
                  <AdUnitsIcon className={style.icon} />
                </Box>
                <Box>
                  <Typography className={style.tickets}>
                    Solved Tickets<br></br>
                    <Typography className={style.tickets_count}>
                      <strong>{solvedTickets}</strong>
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Card>
          </Grid>

          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ height: "100px", width: "350px" }}>
              <Box className={style.boxes}>
                <Box className={style.boxIcon3}>
                  <AdUnitsIcon className={style.icon} />
                </Box>
                <Box>
                  <Typography className={style.tickets}>
                    UnSolved Tickets<br></br>
                    <Typography className={style.tickets_count}>
                      <strong>{unSolvedTickets}</strong>
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Divider />
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid className={style.Grid1}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  Tickets
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Issued Date
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticketData.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={10}>
                        <Typography className={classes.content}>
                          {row.query}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>{row.timestamp}</TableCell>
                  <TableCell>
                    <Button
                      className={classes.status}
                      style={{
                        backgroundColor: "blue",
                      }}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </LayoutCustomer>
  );
}

export default Customers;
