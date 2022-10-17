import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, useFormik } from "formik";
// import { TextField } from './TextField';
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid, Paper, Avatar, Typography, Button } from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { InputAdornment, IconButton } from "@material-ui/core";
import Axios from "axios";

export default function AgentLogin() {
  const paperStyle = {
    padding: "30px 20px",
    height: "400px",
    width: 1000,
    margin: "150px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const [loginstatus, setLoginstatus] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpass: "",
    },
  });
  const navigate = useNavigate();
  console.log(formik.values);

  const loginagent = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8080/loginagent", {
      email: formik.values.email,
      password: formik.values.password,
    }).then((response) => {
      if (response.data.message == "Correct") {
        localStorage.setItem("agentname", response.data.name);
        localStorage.setItem("AgentOrgname", response.data.orgname);
        const agentname = localStorage.getItem("agentname");
        const agentOrgname = localStorage.getItem("AgentOrgname");
        navigate(`/${agentOrgname}/agent/${agentname}/dashboard`);
        navigate(0);
      } else if (response.data.message == []) {
        console.log("not connected");
      }
      if (response.data.message) {
        setLoginstatus(response.data.message);
      }
      if (loginstatus == "Correct") {
        setRedirect(true);
      }
    });
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Agent Login</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
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
            label="Email "
            placeholder="Enter your Email "
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.password}
            type={showPassword ? "text" : "password"}
            name="password"
            fullWidth
            label="Password"
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
          <br></br>
          <br></br>
          <p style={{ color: "red" }}>{loginstatus}</p>
          <Button
            onClick={loginagent}
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
              to={redirect == true ? "/customer/dashboard" : ""}
            >
              Login
            </Link>
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
