import React, { Component } from 'react'
import { AppBar, Breadcrumbs, Grid, IconButton, Link, TextField, Toolbar, Typography } from '@mui/material'
import { Home } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const useStyles = makeStyles({
    profile: {
        position: 'relative', left: '550px', bottom: '30px'
    },
    textfield: {
        position: 'relative', left: '650px'
    }
});


function NavBar() {

    const style = useStyles()

    return (
        <Grid sm='10' >
            <AppBar position='fixed' sx={{ backgroundColor: 'white', height: '80px', width: '1260px' }}  >
                <Toolbar >
                    <Typography variant='h5' sx={{ color: '#0D80D8', fontWeight: 'bold' }}>CustCare</Typography>
                    <TextField label='Search here' size='small' className={style.textfield}>

                    </TextField>

                    <IconButton size='small' className={style.profile}>
                        <AccountCircleIcon color='black' />
                    </IconButton>
                    <IconButton size='small' className={style.profile} >
                        <SettingsIcon />
                    </IconButton>
                    <IconButton size='small' className={style.profile}>
                        <NotificationsIcon />
                    </IconButton>



                </Toolbar>
            </AppBar>
        </Grid>
    )

}

export default NavBar