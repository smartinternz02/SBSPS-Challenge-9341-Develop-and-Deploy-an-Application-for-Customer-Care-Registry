import React, { Component, useEffect } from 'react'
import AppBar from '../layouts/customers/AppBar'
import NavBar from '../layouts/customers/NavBar'
import Dashboard from '../Container/agents/Dashboard'
import Tickets from '../Container/agents/Tickets'
import Customers from '../Container/agents/Customers'
import Notifications from '../Container/agents/Notifications'
import Profile from '../Container/agents/Profile'
import { Grid } from '@mui/material'
import Axios from 'axios'


function LayoutCustomers({ children }) {


    return (
        <div>
            <Grid container>
                <Grid item xs={2} sx={{ height: "100vh" }}>
                    <AppBar />
                </Grid>
                <Grid
                    sx={{
                        height: '100vh'
                    }}
                    item
                    xs={10}
                >
                    <NavBar />
                    {children}
                </Grid>
            </Grid>

        </div>
    )

}

export default LayoutCustomers