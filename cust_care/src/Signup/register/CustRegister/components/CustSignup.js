import React, { useState } from "react";
import { Formik, Form, useFormik, ErrorMessage } from "formik";
// import { TextField } from './TextField';
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/rocket.png";
import { Grid, Paper, Avatar, Typography, Button } from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { InputAdornment, IconButton } from "@material-ui/core";

export const CustSignup = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "800px",
    width: 1000,
    margin: "30px auto",
  };

  const inputerrors = {};
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const [loginstatus, setLoginstatus] = useState("");
  const passwordrules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

  const validate = Yup.object({
    firstname: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastname: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string()
      .min(5)
      .matches(passwordrules, { message: "Please create a strong password" })
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password not match"
    ),
    phone: Yup.number()
      .min(10, "Please enter a valid number")
      .required("Required"),

    region: Yup.string().max(20, "Region address is too large"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      region: "",
    },
    validationSchema: { validate },
  });
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword = () => setShowPassword1(!showPassword1);
  const handleMouseDownPassword = () => setShowPassword1(!showPassword1);
  const handleClickShowPasswordConfirm = () => setShowPassword2(!showPassword2);
  const handleMouseDownPasswordConfirm = () => setShowPassword2(!showPassword2);
  console.log(formik.errors);
  const navigate = useNavigate();

  const addCustomer = () => {
    Axios.post("http://localhost:8080/signupcust", {
      firstname: formik.values.firstname,
      lastname: formik.values.lastname,
      email: formik.values.email,
      password: formik.values.password,
      confirmpassword: formik.values.confirmPassword,
      number: formik.values.phone,
      region: formik.values.region,
    }).then((response) => {
      navigate("/customer/login");
      navigate(0);
    });
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Customer Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
          <br></br>
          <br></br>
        </Grid>
        <form>
          <TextField
            onChange={formik.handleChange}
            name="firstname"
            value={formik.values.firstname}
            fullWidth
            label="First Name"
            placeholder="Enter your first name"
          />
          <br></br>
          <br></br>
          <TextField
            className={formik.errors}
            onChange={formik.handleChange}
            value={formik.values.lastname}
            name="lastname"
            fullWidth
            label="Last Name"
            placeholder="Enter your last name"
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter your email"
            className={
              formik.errors.email && formik.touched.firstname
                ? "input-error"
                : ""
            }
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.password}
            type={showPassword1 ? "text" : "password"}
            name="password"
            fullWidth
            label="Password"
            placeholder="Enter your password"
            className={
              formik.errors.password && formik.touched.firstname
                ? "input-error"
                : ""
            }
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
                    {showPassword1 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br></br>
          <br></br>
          <TextField
            type={showPassword2 ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.confirmPass}
            name="confirmPassword"
            fullWidth
            label="Confirm password"
            placeholder="Confirm your password"
            className={
              formik.errors.confirmPass && formik.touched.firstname
                ? "input-error"
                : ""
            }
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
                    onClick={handleClickShowPasswordConfirm}
                    onMouseDown={handleMouseDownPasswordConfirm}
                  >
                    {showPassword2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.phone}
            name="phone"
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            className={
              formik.errors.phone && formik.touched.firstname
                ? "input-error"
                : ""
            }
          />{" "}
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.region}
            name="region"
            fullWidth
            label="Region"
            placeholder="Enter your region name"
            className={
              formik.errors.region && formik.touched.firstname
                ? "input-error"
                : ""
            }
          />
          <br></br>
          <br></br>
          <h5 style={{ fontSize: "15px" }}>
            Already Have an Account{" "}
            <a style={{ textDecoration: "none" }}>
              {" "}
              {
                <Link
                  style={{ textDecoration: "none" }}
                  to="/organization/login"
                >
                  Click Here
                </Link>
              }
            </a>
          </h5>
          <br></br>
          <Button onClick={addCustomer} variant="contained" color="primary">
            <Link to="/"></Link>SignUp
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
