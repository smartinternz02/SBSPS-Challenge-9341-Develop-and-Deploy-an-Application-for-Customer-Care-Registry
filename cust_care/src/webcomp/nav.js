import React from "react";

// import { AiFillCaretDown } from 'react-icons/ai'
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
//import { Button } from '@mui/material'
import { Link } from "react-router-dom";
function Nav() {
  const [anchorEl, setAnchorEl] = useState("null");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="cont">
      <header className="navbar">
        <div className="logo">CustCare</div>
        <ul className="nav-links">
          <input
            style={{ cursor: "pointer" }}
            type="checkbox"
            id="checkbox_toggle"
          />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/a">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>

            <li>
              <a href="/">Contact</a>
            </li>

            <div className="dropdown">
              <Button
                sx={{
                  backgroundColor: "#3187E4",
                  "&:hover": { backgroundColor: "#3187E4" },
                }}
                variant="contained"
              >
                Login/SignUp
              </Button>
              <div className="dropdown-content">
                <di classname="dropbtn">
                  <Link
                    className="links"
                    target="_blank"
                    to="/organization/login"
                  >
                    Organization
                  </Link>
                  <Link
                    className="links"
                    target="_blank"
                    to="/organization/agent/login/"
                  >
                    Organization Agent
                  </Link>
                </di>

                <Link className="links" target="_blank" to="/customer/login">
                  Customer
                </Link>
              </div>
            </div>
            {/* <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Login/Signup
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button"
                }}
              >
                <MenuItem onClick={handleClose}><Button><Link target='_blank' to='/organization/register'>Organization</Link></Button></MenuItem>
                <MenuItem onClick={handleClose}><Button><Link target='_blank' to='/customer/register'>Customer</Link></Button></MenuItem>
              </Menu>
            </div> */}
          </div>
        </ul>
      </header>
    </div>
  );
}

export default Nav;
