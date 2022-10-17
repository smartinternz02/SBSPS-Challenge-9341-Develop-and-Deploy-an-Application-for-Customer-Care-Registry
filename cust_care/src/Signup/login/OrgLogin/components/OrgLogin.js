import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, useFormik } from "formik";
// import { TextField } from './TextField';
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/rocket.png";
import { Grid, Paper, Avatar, Typography, Button } from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Checkbox } from "@mui/material";
import Axios from "axios";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { InputAdornment, IconButton } from "@material-ui/core";

export const OrgLogin = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "420px",
    width: 1000,
    margin: "150px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const [loginstatus, setLoginstatus] = useState("");
  const [redirect, setRedirect] = useState(false);

  const formik = useFormik({
    initialValues: {
      organizationName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gstin: "",
    },
  });

  const navigate = useNavigate();

  const orglogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/loginorg", {
      email: formik.values.email,
      password: formik.values.password,
    }).then((response) => {
      if (response.data.message == "Correct") {
        localStorage.setItem("orgname", response.data.orgname);
        const admin = localStorage.getItem("orgname");
        navigate(`/organization/${admin}/admin/dashboard`);
        navigate(0);
      } else if (response.data.message == []) {
        console.log("not connected");
      }
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  // useEffect(() => {
  //   Axios.get("http://localhost:8080/loginorg").then((response) => {
  //     console.log(response)
  //   })
  // }, [])

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Organization Login</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form !
          </Typography>
          <br></br>
          <br></br>
        </Grid>
        <form>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />

          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    position: "relative",
                    right: "130px",
                    bottom: "35px",
                  }}
                >
                  <IconButton
                    disableRipple
                    style={{ boxShadow: "none" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* <Checkbox
            sx={{
              position: "relative",
              bottom: "10px",
              right: "30px",
            }}
          /> */}
          <br></br>
          <br></br>
          {/* <p style={{ color: 'red' }}>{loginstatus}</p> */}
          <h5 style={{ fontSize: "15px" }}>
            Create a new account{" "}
            <a style={{ textDecoration: "none" }}>
              {" "}
              {
                <Link
                  style={{ textDecoration: "none" }}
                  to="/organization/register"
                >
                  Click Here
                </Link>
              }
            </a>
          </h5>
          <br></br>
          <Button
            onClick={orglogin}
            type="submit"
            variant="contained"
            color="primary"
          >
            {/* {
              redirect === true ? <Link style={{ color: 'white' }} to="/organization/admin/">Login</Link> : <>Login</>
            } */}
            <Link
              target="_blank"
              style={{ color: "white", textDecoration: "none" }}
              to={redirect == true ? "/organization/admin/" : ""}
            >
              Login
            </Link>
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
