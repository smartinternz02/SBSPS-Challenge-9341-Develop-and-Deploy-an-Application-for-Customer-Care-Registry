
import React, { Component } from 'react'
import LayoutAgent from '../../MainLayout/LayoutAgent'
import { Grid, Box, Avatar, Paper, Typography, FormLabel, FormControl, FormControlLabel, TextField, TextareaAutosize, Button, ButtonGroup, FormGroup } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { borderRadius } from '@mui/system'
import { CheckBox } from '@mui/icons-material'



const styles = makeStyles({
    Grid: {
        position: 'relative',
        top: '60px',
        width: '100%',
        height: '650px',

        padding: '18px',
    },
    cover: {
        width: '1220px',
        height: '300px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHw%3D&w=1000&q=80)',
        borderRadius: '10px',
    },
    profileForms: {
        padding: '20px 50px'
    },
    formAlign: {
        margin: '20px'
    },
    TextField: {

    },
    label: {
        position: 'relative',
        left: '100px',
        color: 'black',

    }
})

function Profile() {
    const style = styles()
    return (
        <LayoutAgent>
            <Grid className={style.Grid}>
                <Paper sx={{ margin: '10px' }}>
                    <Grid container>
                        <Grid item className={style.cover}>

                        </Grid>

                        <Avatar sx={{ width: 150, height: 150, position: 'relative', left: '40px', bottom: '80px' }} src='https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png' alt='Nishanth'></Avatar>
                        <Typography variant='h4' sx={{ position: 'relative', left: '60px', top: '20px', }}>Nishanth Sebastin
                            <br></br><Typography variant='body1'>I am Working as a Agent since 2020</Typography></Typography>

                    </Grid>
                    <Grid className={style.profileForms}>
                        <FormControl>
                            <Box className={style.formAlign}>
                                <FormLabel >
                                    <Typography className={style.label}>Username</Typography> </FormLabel>
                                <FormControlLabel control={<TextField sx={{
                                    border: '1px solid #757575', width: '400px', position: 'relative',
                                    left: '400px',
                                }} size='small' />}></FormControlLabel>
                            </Box>
                            <Box className={style.formAlign}>
                                <FormLabel >
                                    <Typography className={style.label}>Website</Typography> </FormLabel>
                                <FormControlLabel control={<TextField sx={{
                                    border: '1px solid #757575', width: '400px', position: 'relative',
                                    left: '415px',
                                }} size='small' />}></FormControlLabel>

                            </Box>

                            <Box className={style.formAlign}>
                                <FormLabel >
                                    <Typography className={style.label}>Your Bio</Typography> </FormLabel>
                                <FormControlLabel control={<TextField sx={{
                                    border: '1px solid #757575', width: '400px', position: 'relative',
                                    left: '415px',
                                }} size='small' />}></FormControlLabel>
                            </Box>
                            <Box className={style.formAlign}>
                                <FormLabel >
                                    <Typography className={style.label}>Job title</Typography> </FormLabel>
                                <FormControlLabel control={<TextField sx={{
                                    border: '1px solid #757575', width: '400px', position: 'relative',
                                    left: '415px',
                                }} size='small' />}></FormControlLabel></Box>
                            <Box className={style.formAlign}>
                                <FormLabel >
                                    <Typography className={style.label}>Email</Typography> </FormLabel>
                                <FormControlLabel control={<TextField sx={{
                                    border: '1px solid #757575', width: '400px', position: 'relative',
                                    left: '430px',
                                }} size='small' />}></FormControlLabel></Box>
                            <FormGroup>
                                <ButtonGroup sx={{ position: 'relative', left: '350px', marginTop: '20px' }}>

                                    <FormControlLabel control={<Button variant='contained'>Cancel</Button>}></FormControlLabel>
                                    <FormControlLabel control={<Button variant='contained'>Save</Button>}></FormControlLabel>
                                </ButtonGroup>
                            </FormGroup>

                        </FormControl>
                    </Grid>



                </Paper>
            </Grid>
        </LayoutAgent>
    )

}

export default Profile