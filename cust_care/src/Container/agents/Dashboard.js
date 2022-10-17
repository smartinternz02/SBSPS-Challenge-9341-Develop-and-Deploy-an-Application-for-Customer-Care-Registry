import React, { Component, useEffect, useState } from "react";
import LayoutAgent from "../../MainLayout/LayoutAgent";
import { Box } from "@mui/system";
import {
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Card } from "@mui/material";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import AppMain from "../../examples";
import Axios from "axios";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
const styles = makeStyles({
  Grid: {
    position: "relative",
    top: "100px",
    width: "100%",
    height: "650px",

    padding: "18px",
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
    borderRadius: "10px",
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
    backgroundColor: "#DD2567",
    borderRadius: "10px",
    position: "relative",
    top: "15px",
    left: "20px",
  },
  boxes: {
    display: "flex",
  },
  ChartGrid: {
    position: "relative",

    height: "460px",
    width: "100%",
    padding: "20px",
  },
});
function Dashboard() {
  const orgname = localStorage.getItem("AgentOrgname");
  const agentname = localStorage.getItem("agentname");

  const [raisedtickets, setraisedTickets] = useState(281);
  const [solvedTickets, setsolvedTickets] = useState(281);
  const [unSolvedTickets, setunSolvedTickets] = useState(281);

  useEffect(() => {
    Axios.post("http://localhost:8080/agent/dashboard/raisedtickets", {
      orgname,
    }).then((response) => {
      setraisedTickets(response.data.message.length);
    });

    Axios.post("http://localhost:8080/agent/dashboard/solvedtickets", {
      orgname,
      agentname,
    }).then((response) => {
      setsolvedTickets(response.data.message.length);
    });

    Axios.post("http://localhost:8080/agent/dashboard/unsolvedtickets", {
      orgname,
      agentname,
    }).then((response) => {
      setunSolvedTickets(response.data.message.length);
    });
  });

  const style = styles();

  return (
    <LayoutAgent>
      <Grid className={style.Grid}>
        <Grid container>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Paper>
              <Card sx={{ height: "110px" }}>
                <Box className={style.boxes}>
                  <Box className={style.boxIcon1}>
                    <AdUnitsIcon className={style.icon} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        position: "relative",
                        left: "50px",
                        top: "15px",
                        color: "black",
                      }}
                    >
                      Raised Tickets<br></br>
                      <Typography sx={{ color: "black" }}>
                        <strong>{raisedtickets}</strong>
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Divider />

                {/* <CardContent sx={{ marginTop: "25px" }}>
                  <Typography>55% than lask week</Typography>
                </CardContent> */}
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Paper>
              <Card sx={{ height: "110px" }}>
                <Box className={style.boxes}>
                  <Box className={style.boxIcon2}>
                    <DoneAllIcon className={style.icon} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        position: "relative",
                        left: "50px",
                        top: "15px",
                        color: "black",
                      }}
                    >
                      Solved Tickets<br></br>
                      <Typography sx={{ color: "black" }}>
                        <strong>{solvedTickets}</strong>
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Divider />

                {/* <CardContent sx={{ marginTop: "25px" }}>
                  <Typography>55% than lask week</Typography>
                </CardContent> */}
              </Card>
            </Paper>
          </Grid>

          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Paper>
              <Card sx={{ height: "110px" }}>
                <Box className={style.boxes}>
                  <Box className={style.boxIcon3}>
                    <HourglassTopIcon className={style.icon} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        position: "relative",
                        left: "50px",
                        top: "15px",
                        color: "black",
                      }}
                    >
                      Pending Tickets<br></br>
                      <Typography sx={{ color: "black" }}>
                        <strong>{unSolvedTickets}</strong>
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Divider />

                {/* <CardContent sx={{ marginTop: "25px" }}>
                  <Typography>55% than lask week</Typography>
                </CardContent> */}
              </Card>
            </Paper>
          </Grid>

          {/* <Grid item xs={3} sx={{ padding: "20px" }}>
            <Paper>
              <Card sx={{ height: "140px" }}>
                <Box className={style.boxes}>
                  <Box className={style.boxIcon4}>
                    <AdUnitsIcon className={style.icon} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        position: "relative",
                        left: "65px",
                        top: "15px",
                        color: "#9498AD",
                      }}
                    >
                      Suspended Tickets<br></br>
                      <Typography sx={{ color: "black" }}>
                        <strong>281</strong>
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Divider />

                <CardContent sx={{ marginTop: "25px" }}>
                  <Typography>55% than lask week</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid> */}
        </Grid>
        <Grid container>
          <Grid item className={style.ChartGrid}>
            <Paper>
              <Card>
                <Grid
                  item
                  xs={12}
                  sx={{ position: "relative", marginTop: "-220px" }}
                >
                  <Box>
                    <AppMain />
                  </Box>

                  <Divider></Divider>
                  <CardContent
                    sx={{ position: "relative", marginTop: "-220px" }}
                  >
                    <Typography sx={{ color: "black", fontWeight: "50px" }}>
                      <strong> Your activity over the days</strong>
                    </Typography>
                    <Divider></Divider>
                    <Typography sx={{ color: "#9498AD" }}>
                      Past 7 days
                    </Typography>
                  </CardContent>
                </Grid>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </LayoutAgent>
  );
}

export default Dashboard;
