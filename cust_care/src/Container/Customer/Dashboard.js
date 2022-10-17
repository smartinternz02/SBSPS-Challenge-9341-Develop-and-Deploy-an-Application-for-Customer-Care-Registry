import React, { Component } from "react";
import LayoutAgent from "../../MainLayout/LayoutCustomer";
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
function CustomerDashboard() {
  const style = styles();

  return (
    <LayoutAgent>
      <Grid className={style.Grid}>
        <Grid container>
          <Grid item xs={3} sx={{ padding: "20px" }}>
            <Paper>
              <Card sx={{ height: "140px" }}>
                <Box className={style.boxes}>
                  <Box className={style.boxIcon1}>
                    <AdUnitsIcon className={style.icon} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        position: "relative",
                        left: "90px",
                        top: "15px",
                        color: "#9498AD",
                      }}
                    >
                      Raised Tickets<br></br>
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
          </Grid>

          <Grid item xs={3} sx={{ padding: "20px" }}>
            <Paper>
              <Card sx={{ height: "140px" }}>
                <Box className={style.boxes}>
                  <Box className={style.boxIcon2}>
                    <AdUnitsIcon className={style.icon} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        position: "relative",
                        left: "90px",
                        top: "15px",
                        color: "#9498AD",
                      }}
                    >
                      Solved Tickets<br></br>
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
          </Grid>

          <Grid item xs={3} sx={{ padding: "20px" }}>
            <Paper>
              <Card sx={{ height: "140px" }}>
                <Box className={style.boxes}>
                  <Box className={style.boxIcon3}>
                    <AdUnitsIcon className={style.icon} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        position: "relative",
                        left: "70px",
                        top: "15px",
                        color: "#9498AD",
                      }}
                    >
                      UnSolved Tickets<br></br>
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
          </Grid>

          <Grid item xs={3} sx={{ padding: "20px" }}>
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
          </Grid>
        </Grid>
        <Grid container>
          <Grid item className={style.ChartGrid}>
            <Paper>
              <Card>
                <Grid item xs={12}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/static/images/cards/paella.jpg"
                    alt="Chart"
                  />{" "}
                  <Divider></Divider>
                  <CardContent>
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

export default CustomerDashboard;
