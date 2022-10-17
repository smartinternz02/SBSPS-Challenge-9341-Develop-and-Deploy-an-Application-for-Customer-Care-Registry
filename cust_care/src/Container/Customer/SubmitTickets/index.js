import React, { useEffect, useState } from "react";
import { Formik, Form, useFormik } from "formik";
// import { TextField } from './TextField';
import LayoutCustomer from "../../../MainLayout/LayoutCustomer";
import { makeStyles, TextField } from "@material-ui/core";
import * as Yup from "yup";
 
import { FormControl, FormControlLabel, FormLabel, Radio } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/rocket.png";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Axios from "axios";

export const CustLogin = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "550px",
    position: "relative",
    top: "70px",
    width: 1000,
    margin: "60px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const buttonStyle = { display: "flex", justifyContent: "center" };

  const [loginstatus, setLoginstatus] = useState("");

  const [redirect, setRedirect] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [clear,setClear]=useState(false)
  const formik = useFormik({
    initialValues: {
      email: "",
      orgname: "",
      query: "",
      phonenumber: "",
      region: "",
    },

  });

 

  const name = localStorage.getItem("custname");

  const submitquery = () => {

    Axios.post("http://localhost:8080/submitquerycust", {
      name,
      email: formik.values.email,
      orgname: formik.values.orgname,
      query: formik.values.query,
     phonenumber: formik.values.phonenumber,
      region: formik.values.region,
      status: "pending",
      taken: "NOT_TAKEN",
    }).then((response) => {
     
       setClear(true)
      localStorage.setItem("submitquerycust", response.data.name);
     

    });



  };

 
 

  return (
    <LayoutCustomer>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
          
            <h2 style={headerStyle}>Submit Tickets</h2>
          </Grid>
          
           

          <form onSubmit={formik.handleSubmit}>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "":formik.values.email }
              
              name="email"
              fullWidth
              label="Email "
              placeholder="Enter your Email "
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "":formik.values.orgname }
              name="orgname"
              fullWidth
              label="OrgName"
              placeholder="Enter your orgname"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "":formik.values.query}
              name="query"
              fullWidth
              label="Query"
              placeholder="Enter your Query"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "":formik.values.phonenumber}
              name="phonenumber"
              fullWidth
              label="Number"
              placeholder="Enter your Phone Number"
            />
            <br></br>
            <br></br>
            <TextField
              onChange={formik.handleChange}
              value={clear ? "":formik.values.region}
              name="region"
              fullWidth
              label="Region"
              placeholder="Enter your Region"
            />
            <br></br>
            <br></br>
            <br></br>
            <Box style={buttonStyle}>
              {" "}
              <Button
                variant="contained"
                color="primary"
                style={buttonStyle}
                onClick={submitquery}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
             
         
        </Paper>
      </Grid>
    </LayoutCustomer>
  );
};

export default CustLogin;
