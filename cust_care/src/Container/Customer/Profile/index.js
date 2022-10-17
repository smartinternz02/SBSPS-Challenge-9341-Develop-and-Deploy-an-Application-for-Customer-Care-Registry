import React, { Component, useState, useEffect, useFormik } from "react";
import { Formik, Form } from "formik";
import LayoutCustomer from "../../../MainLayout/LayoutCustomer";
import {
  Grid,
  Box,
  Avatar,
  Paper,
  Typography,
  FormLabel,
  FormControl,
  FormControlLabel,
  TextField,
  TextareaAutosize,
  Button,
  ButtonGroup,
  FormGroup,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { borderRadius } from "@mui/system";
import { CheckBox } from "@mui/icons-material";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import cover from "./img/cover.jpg";

const styles = makeStyles({
  Grid: {
    position: "relative",
    top: "60px",
    width: "100%",
    height: "7 50px",
    padding: "18px",
  },
  cover: {
    width: "1220px",
    height: "250px",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80)",
    borderRadius: "10px",
  },
  profileForms: {
    padding: "20px 50px",
    height: "650px",
  },
  formAlign: {
    margin: "20px",
  },
  TextField: {},
  label: {
    position: "relative",
    left: "100px",
    color: "black",
  },
});

function Profile() {
  const custemail = localStorage.getItem("custemail");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    Axios.post("http://localhost:8080/profile", {
      custemail,
    }).then((response) => {
      setFirstname(response.data.message[0].firstname);
      setLastname(response.data.message[0].lastname);
      setEmail(response.data.message[0].email);
      setPhonenumber(response.data.message[0].number);
      setRegion(response.data.message[0].region);
    });
  });

  console.log(firstname);

  const handleChange1 = (event) => {
    setFirstname(event.target.value);
  };

  const handleChange2 = (event) => {
    setLastname(event.target.value);
  };

  const handleChange3 = (event) => {
    setEmail(event.target.value);
  };

  const handleChange4 = (event) => {
    setPhonenumber(event.target.value);
  };

  const handleChange5 = (event) => {
    setRegion(event.target.value);
  };

  const updateProfileDB = () => {
    Axios.post("http://localhost:8080/updateprofile", {
      custemail,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      region: region,
    }).then((response) => {});
  };
  const navigate = useNavigate();
  const updateProfile = () => {
    navigate("/customer/login");
  };
  const style = styles();
  return (
    <LayoutCustomer>
      <Grid className={style.Grid}>
        <Paper sx={{ margin: "10px" }}>
          <Grid container>
            <Grid
              item
              sx={{ borderRadius: "10px", width: "1220px", height: "250px" }}
            >
              <Box>
                {" "}
                <img
                  src={cover}
                  style={{ width: "1220px", height: "250px" }}
                ></img>
              </Box>
            </Grid>

            <Avatar
              sx={{
                width: 140,
                height: 140,
                position: "relative",
                left: "40px",
                bottom: "80px",
              }}
              src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
              alt="Nishanth"
            ></Avatar>

            <Grid className={style.profileForms}>
              <FormControl
                sx={{ position: "relative", top: "50px", left: "50px" }}
              >
                <Box className={style.formAlign} sx={{ display: "flex" }}>
                  <FormLabel>
                    <Typography className={style.label} sx={{ width: "100px" }}>
                      First name
                    </Typography>{" "}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <TextField
                        sx={{
                          border: "1px solid black",
                          width: "400px",
                          position: "relative",
                          left: "315px",
                          borderradius: "35px",
                          border: "none",
                        }}
                        size="small"
                        onChange={handleChange1}
                        value={firstname}
                        name="firstname"
                      >
                        {" "}
                      </TextField>
                    }
                  ></FormControlLabel>
                </Box>

                <Box className={style.formAlign} sx={{ display: "flex" }}>
                  <FormLabel>
                    <Typography className={style.label} sx={{ width: "100px" }}>
                      Last name
                    </Typography>{" "}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <TextField
                        sx={{
                          border: "1px solid black",
                          width: "400px",
                          position: "relative",
                          left: "315px",
                          borderradius: "35px",
                          border: "none",
                        }}
                        size="small"
                        onChange={handleChange2}
                        value={lastname}
                        name="lastname"
                      />
                    }
                  ></FormControlLabel>
                </Box>

                <Box className={style.formAlign}>
                  <FormLabel>
                    <Typography className={style.label} sx={{ width: "100px" }}>
                      Email
                    </Typography>{" "}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <TextField
                        sx={{
                          border: "1px solid black",
                          width: "400px",
                          position: "relative",
                          left: "315px",
                          borderradius: "35px",
                          border: "none",
                        }}
                        size="small"
                        onChange={handleChange3}
                        value={email}
                        name="email"
                      />
                    }
                  ></FormControlLabel>
                </Box>

                <Box className={style.formAlign}>
                  <FormLabel>
                    <Typography className={style.label} sx={{ width: "100px" }}>
                      PhoneNumber
                    </Typography>{" "}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <TextField
                        sx={{
                          border: "1px solid black",
                          width: "400px",
                          position: "relative",
                          left: "315px",
                          borderradius: "35px",
                          border: "none",
                        }}
                        size="small"
                        onChange={handleChange4}
                        value={phonenumber}
                        name="phonenumber"
                      />
                    }
                  ></FormControlLabel>
                </Box>

                <Box className={style.formAlign}>
                  <FormLabel>
                    <Typography className={style.label} sx={{ width: "100px" }}>
                      Region
                    </Typography>{" "}
                  </FormLabel>
                  <FormControlLabel
                    control={
                      <TextField
                        sx={{
                          border: "1px solid black",
                          width: "400px",
                          position: "relative",
                          left: "315px",
                          borderradius: "35px",
                          border: "none",
                        }}
                        size="small"
                        onChange={handleChange5}
                        value={region}
                        name="region"
                      />
                    }
                  ></FormControlLabel>
                </Box>

                <FormGroup>
                  <ButtonGroup
                    sx={{
                      position: "relative",
                      left: "320px",
                      marginTop: "40px",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Button
                          sx={{
                            position: "relative",
                            right: "30px",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                          }}
                          variant="contained"
                          onClick={updateProfileDB}
                        >
                          Save
                        </Button>
                      }
                    ></FormControlLabel>

                    <FormControlLabel
                      control={
                        <Button variant="contained" onClick={updateProfile}>
                          ReLogin To update changes
                        </Button>
                      }
                    ></FormControlLabel>
                  </ButtonGroup>
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </LayoutCustomer>
  );
}

export default Profile;
