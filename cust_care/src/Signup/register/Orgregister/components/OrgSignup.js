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

export const OrgSignup = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "1050px",
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
    organizationName: Yup.string()
      .min(3, "Organization name is too short")
      .max(20, "Organization is too long")
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
    street: Yup.string()
      .max(20, "Street address is too large")
      .required("Required"),
    city: Yup.string()
      .max(20, "City address is too large")
      .required("Required"),
    region: Yup.string().max(20, "Region address is too large"),
    zipcode: Yup.number().max(8, "Enter a valid zipcode"),
    website: Yup.string().url().required("Required"),
    gstin: Yup.number().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      organizationName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      street: "",
      city: "",
      region: "",
      zipcode: "",
      website: "",
      gstin: "",
    },
    validationSchema: validate,
  });
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword = () => setShowPassword1(!showPassword1);
  const handleMouseDownPassword = () => setShowPassword1(!showPassword1);
  const handleClickShowPasswordConfirm = () => setShowPassword2(!showPassword2);
  const handleMouseDownPasswordConfirm = () => setShowPassword2(!showPassword2);
  console.log(formik.errors);
  const navigate = useNavigate();
  const addOrg = () => {
    Axios.post("http://localhost:8080/signuporg", {
      orgname: formik.values.organizationName,
      email: formik.values.email,
      number: formik.values.phone,
      password: formik.values.password,
      confirmpassword: formik.values.confirmPassword,
      street: formik.values.street,
      city: formik.values.city,
      region: formik.values.region,
      zip: formik.values.zipcode,
      website: formik.values.website,
      gst: formik.values.gstin,
    }).then((response) => {
      navigate("/organization/login");
      navigate(0);

      localStorage.setItem("orgname", response.data.orgname);
    });
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Organization Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
          <br></br>
          <br></br>
        </Grid>
        <form>
          <TextField
            onChange={formik.handleChange}
            name="organizationName"
            value={formik.values.organizationName}
            fullWidth
            label="Organization name"
            placeholder="Enter Organization name"
          />
          <br></br>
          <br></br>
          {/* {formik.errors.organizationName ? (
            <Typography
              style={{
                color: "red",
                fontSize: "13px",

                padding: "0",
                margin: "0px 0px 20px 0px",
              }}
            >
              {formik.errors.organizationName}
            </Typography>
          ) : (
            ""
          )} */}
          <TextField
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter your email"
            className={
              formik.errors.email && formik.touched.organizationName
                ? "input-error"
                : ""
            }
          />
          <br></br>
          <br></br>
          {/* {formik.errors.email ? (
            <Typography
              style={{
                color: "red",
                fontSize: "13px",
                margin: "0",
                padding: "0",
              }}
            >
              {formik.errors.email}
            </Typography>
          ) : (
            ""
          )} */}
          <TextField
            onChange={formik.handleChange}
            value={formik.values.phone}
            name="phone"
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            className={
              formik.errors.phone && formik.touched.organizationName
                ? "input-error"
                : ""
            }
          />{" "}
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
              formik.errors.password && formik.touched.organizationName
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
            value={formik.values.confirmPassword}
            name="confirmPassword"
            fullWidth
            label="Confirm password"
            placeholder="Confirm your password"
            className={
              formik.errors.confirmPassword && formik.touched.organizationName
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
            value={formik.values.street}
            name="street"
            fullWidth
            label="Street"
            placeholder="Enter your street name"
            className={
              formik.errors.street && formik.touched.organizationName
                ? "input-error"
                : ""
            }
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.city}
            name="city"
            fullWidth
            label="City"
            placeholder="Enter your city name"
            className={
              formik.errors.city && formik.touched.organizationName
                ? "input-error"
                : ""
            }
          />
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
              formik.errors.region && formik.touched.organizationName
                ? "input-error"
                : ""
            }
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.zipcode}
            name="zipcode"
            fullWidth
            label="Zip code"
            placeholder="Enter Zip code"
            className={
              formik.errors.zipcode && formik.touched.organizationName
                ? "input-error"
                : ""
            }
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.website}
            name="website"
            fullWidth
            label="Website Link "
            placeholder="Enter your Website Link"
            className={
              formik.errors.website && formik.touched.organizationName
                ? "input-error"
                : ""
            }
          />
          <br></br>
          <br></br>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.gstin}
            name="gstin"
            fullWidth
            label="GSTIn"
            placeholder="Enter GSTIn"
            className={
              formik.errors.gstin && formik.touched.organizationName
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
          <Button onClick={addOrg} variant="contained" color="primary">
            <Link to="/"></Link>SignUp
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
