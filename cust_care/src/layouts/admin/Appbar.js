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
import { Link, useNavigate, NavLink } from "react-router-dom";
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
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const admin = localStorage.getItem("orgname");

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

    borderRadius: "10px",
    position: "relative",
    width: "200px",
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
  const [color1, setColor1] = React.useState("");
  const [color2, setColor2] = React.useState("");
  const [color3, setColor3] = React.useState("");
  const [color4, setColor4] = React.useState("");
  const [color5, setColor5] = React.useState("");
  const [color6, setColor6] = React.useState("");
  const [color7, setColor7] = React.useState("");
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ClickHandler = () => {
    localStorage.removeItem("orgname");
    navigate("/organization/login");
  };

  const style = useStyles();
  const admin = localStorage.getItem("orgname");

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
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/organization/${admin}/admin/dashboard`}
                  >
                    <DashboardOutlinedIcon className={style.icon} />
                  </Link>
                </li>
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/organization/${admin}/admin/dashboard`}
                  >
                    Dashboard
                  </Link>
                </li>
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
                <li>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/organization/${admin}/admin/tickets/`}
                  >
                    <AodOutlinedIcon className={style.icon} />
                  </Link>
                </li>
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/tickets/`}
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
              // onClick={() =>
              //   setColor3("#338CED") &&
              //   setColor2("") &&
              //   setColor1("") &&
              //   setColor4("") &&
              //   setColor5("") &&
              //   setColor6("") &&
              //   setColor7("")
              // }
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/customers/`}
                >
                  <SportsKabaddiOutlinedIcon className={style.icon} />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/customers/`}
                >
                  Customers
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
              // onClick={() =>
              //   setColor4("#338CED") &&
              //   setColor2("") &&
              //   setColor1("") &&
              //   setColor3("") &&
              //   setColor5("") &&
              //   setColor6("") &&
              //   setColor7("")
              // }
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/agents/`}
                >
                  <SupportAgentIcon className={style.icon} />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/agents/`}
                >
                  Agents
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
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/addagents/`}
                >
                  <PersonAddAltIcon className={style.icon} />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/addagents/`}
                >
                  Add Agents
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
              // onClick={() => {
              //   setColor6("#338CED") &&
              //     setColor3("") &&
              //     setColor2("") &&
              //     setColor1("") &&
              //     setColor4("") &&
              //     setColor5("") &&
              //     setColor7("");
              // }}
            >
              <ListItemIcon className={style.icons}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/notifications/`}
                >
                  <NotificationsNoneOutlinedIcon className={style.icon} />
                </Link>
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/organization/${admin}/admin/notifications/`}
                >
                  Notifications
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* <ListItem className={style.list}>

                        <ListItemButton sx={{ color: 'white', position: 'relative', right: '10px', padding: '0px' }}>
                            <ListItemIcon className={style.icons}> <PeopleAltOutlinedIcon className={style.icon} /></ListItemIcon>
                            <ListItemText sx={{ color: 'white' }}> <Link style={{ color: 'white', textDecoration: 'none' }} to='/organization/admin/profile/'>Organization Profile</Link></ListItemText></ListItemButton>
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
