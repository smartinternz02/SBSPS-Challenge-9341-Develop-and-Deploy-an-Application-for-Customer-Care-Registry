import {
  Drawer,
  Grid,
  Typography,
  List,
  ListItem,
  Toolbar,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inbox from "@mui/icons-material/Inbox";
import { Link, useNavigate } from "react-router-dom";
import SportsKabaddiOutlinedIcon from "@mui/icons-material/SportsKabaddiOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AodOutlinedIcon from "@mui/icons-material/AodOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const useStyles = makeStyles({
  drawer: {
    width: 240,
  },
  drawerPaper: {
    "&&": {
      width: 240,
      backgroundColor: "#222223",
    },
    marginTop: "20px",
    marginLeft: "20px",
  },

  list: {
    marginBottom: "20px",

    "&:hover": {
      backgroundColor: "#338CED",
      borderRadius: "10px",
      position: "relative",
      width: "200px",
    },
  },
  icon: {
    color: "white",
  },
  icons: {
    position: "relative",
    right: "120px",
    bottom: "30px",
  },
  hover: {
    backgroundColor: "#222223",
    "&:hover": {
      backgroundColor: "#38383E",
    },
  },
});

function AppBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const ClickHandler = () => {
    localStorage.removeItem("AgentOrgname");
    localStorage.removeItem("agentname");
    navigate("/organization/agent/login/");
  };
  const agent = localStorage.getItem("agentname");
  const AgentOrgName = localStorage.getItem("AgentOrgname");

  const style = useStyles();
  return (
    <Grid>
      <Drawer
        classes={{ paper: style.drawerPaper }}
        sx={{
          width: 240,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            height: " 740px",
            borderRadius: "15px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List sx={{ marginLeft: "20px" }}>
          <ListItem className={style.list}>
            <ListItemButton
              sx={{
                color: "white",
                position: "relative",
                right: "10px",
                padding: "0px",
              }}
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <DashboardOutlinedIcon className={style.icon} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/${AgentOrgName}/agent/${agent}/dashboard/`}
                >
                  Dashboard
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem className={style.list}>
            <ListItemButton
              sx={{
                color: "white",
                position: "relative",
                right: "10px",
                padding: "0px",
              }}
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <AodOutlinedIcon className={style.icon} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/${AgentOrgName}/agent/${agent}/tickets/`}
                >
                  Tickets
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem className={style.list}>
            <ListItemButton
              sx={{
                color: "white",
                position: "relative",
                right: "10px",
                padding: "0px",
              }}
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <AodOutlinedIcon className={style.icon} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/${AgentOrgName}/agent/${agent}/mytickets/`}
                >
                  My Tickets
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem className={style.list}>
            <ListItemButton
              sx={{
                color: "white",
                position: "relative",
                right: "10px",
                padding: "0px",
              }}
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <NotificationsNoneOutlinedIcon className={style.icon} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/${AgentOrgName}/agent/${agent}/notifications/`}
                >
                  Notifications
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* <ListItem className={style.list}>
            <ListItemButton
              sx={{
                color: "white",
                position: "relative",
                right: "10px",
                padding: "0px",
              }}
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <PeopleAltOutlinedIcon className={style.icon} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/${AgentOrgName}/agent/${agent}/profile/`}
                >
                  Profile
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem> */}
          <ListItem className={style.list}>
            <ListItemButton
              onClick={handleClickOpen}
              sx={{
                color: "white",
                position: "relative",
                right: "10px",
                padding: "0px",
              }}
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <LogoutOutlinedIcon className={style.icon} />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>Sign Out </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Sign out ? "}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You can always access your content by signing back in
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={ClickHandler} autoFocus>
              Sign Out
            </Button>
          </DialogActions>
        </Dialog>
      </Drawer>
    </Grid>
  );
}

export default AppBar;
