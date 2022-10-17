import React from 'react'
import LayoutAgent from '../../MainLayout/LayoutAgent'
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material'
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Avatar } from '@mui/material';
import { Fab } from '@mui/material';
import { InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles({

    chatSection: {

        height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    },
    Grid: {

        position: 'relative',
        top: '80px',
        width: '1200px',
        padding: '20px',

    },
});



function TicketDetails() {
    const classes = useStyles()
    return (

        <LayoutAgent>
            <Grid className={classes.Grid}>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant="h5" className="header-message">Chat</Typography><br></br>
                    </Grid>
                </Grid>
                <Paper>
                    <Grid container component={Paper} className={classes.chatSection}>
                        <Grid item xs={3} className={classes.borderRight500}>


                            <Grid item style={{ padding: '10px' }}>

                                <InputLabel variant='p'>Requester</InputLabel>
                                <TextField variant="outlined" id="outlined-basic-email" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ position: 'relative', right: '125px', bottom: '30px' }}>
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} size='small' placeholder='' value="     Name" contentEditable='false' />
                                <br></br><br></br>   <Typography variant='p'>Assignee</Typography>
                                <TextField id="outlined-basic-email" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ position: 'relative', right: '125px', bottom: '30px' }}>
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} size='small' variant="outlined" placeholder='' value="     Name" contentEditable='false' />
                                <br></br><br></br>
                                <Typography variant='p'>Problem</Typography>
                                <TextField id="outlined-basic-email" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ position: 'relative', right: '125px', bottom: '30px' }}>
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} size='small' variant="outlined" placeholder='' value="    Those who have issues in PrepInstaPortal(either login or completing modules) post your names in this group immediately. " contentEditable='false' />
                                <br></br><br></br>
                                <Typography variant='p'>Priority</Typography>
                                <TextField id="outlined-basic-email" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ position: 'relative', right: '125px', bottom: '30px' }}>
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }} size='small' variant="outlined" placeholder='' value="   High " contentEditable='false' />
                            </Grid>
                            <Divider />

                        </Grid>
                        <Grid item xs={9}>
                            <List className={classes.messageArea}>
                                <ListItem key="1">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText align="right" secondary="09:30"></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem key="2">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText align="left" secondary="09:31"></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem key="3">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText align="right" secondary="10:30"></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                            <Divider />
                            <Grid container style={{ padding: '20px' }}>
                                <Grid item xs={11}>
                                    <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                                </Grid>
                                <Grid xs={1} align="right">
                                    <Fab color="primary" aria-label="add"><SendIcon color='black' /></Fab>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>
        </LayoutAgent>
    );
}




export default TicketDetails