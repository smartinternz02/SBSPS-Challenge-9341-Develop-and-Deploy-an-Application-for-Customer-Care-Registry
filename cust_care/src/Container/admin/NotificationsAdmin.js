import { makeStyles } from '@material-ui/core'
import React, { Component } from 'react'
import LayoutAgent from '../../MainLayout/LayoutAgent'
import { Grid, ListItemText, Typography, List, ListItem, Paper, ListItemButton, IconButton, ListItemIcon } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import LayoutAdmin from '../../MainLayout/LayoutAdmin';
const colors = {
    success: '#59B15D',
    info: '#257EEA',
    warning: '#FC940B',
    error: '#E8413D'
}
const styles = makeStyles({

    Grid: {
        position: 'relative',
        top: '100px',
        width: '100%',
        height: '650px',

        padding: '18px',

    },
    list: {
        width: '700px',
        height: '390px'
    },
    listitem: {

        borderRadius: '10px',
        marginTop: '15px',
        position: 'relative',
        left: '25px'
    },
    listitemText: {
        textAlign: 'center',
        color: 'white'
    }
})
function NotificationsAdmin() {

    const style = styles()
    return (
        <LayoutAdmin>
            <Grid className={style.Grid}>
                <Typography sx={{ fontSize: '22px' }}>Notifications</Typography>
                <Paper sx={{ width: '750px', position: 'relative', left: '230px' }}>
                    <List className={style.list}>
                        <ListItem className={style.listitem} sx={{ backgroundColor: colors.success }}>
                            <ListItemText className={style.listitemText}>
                                A simple primary alert with an example link. Give it a click if you like
                            </ListItemText>
                            <ListItemButton sx={{ positon: 'relative', right: '70px', bottom: '30px', color: 'white' }}>
                                <CloseIcon />
                            </ListItemButton>
                        </ListItem>

                        <ListItem className={style.listitem} sx={{ backgroundColor: colors.error }}>
                            <ListItemText className={style.listitemText}>
                                A simple primary alert with an example link. Give it a click if you like
                            </ListItemText>
                            <ListItemButton sx={{ positon: 'relative', right: '70px', bottom: '30px', color: 'white' }}>
                                <CloseIcon />
                            </ListItemButton>
                        </ListItem>

                        <ListItem className={style.listitem} sx={{ backgroundColor: colors.info }}>
                            <ListItemText className={style.listitemText}>
                                A simple primary alert with an example link. Give it a click if you like
                            </ListItemText>
                            <ListItemButton sx={{ positon: 'relative', right: '70px', bottom: '30px', color: 'white' }}>
                                <CloseIcon />
                            </ListItemButton>
                        </ListItem>

                        <ListItem className={style.listitem} sx={{ backgroundColor: colors.warning }}>
                            <ListItemText className={style.listitemText}>
                                A simple primary alert with an example link. Give it a click if you like
                            </ListItemText>
                            <ListItemButton sx={{ positon: 'relative', right: '70px', bottom: '30px', color: 'white' }}>
                                <CloseIcon />
                            </ListItemButton>
                        </ListItem>

                        <ListItem className={style.listitem} sx={{ backgroundColor: colors.success }}>
                            <ListItemText className={style.listitemText}>
                                A simple primary alert with an example link. Give it a click if you like
                            </ListItemText>    <ListItemButton sx={{ positon: 'relative', right: '70px', bottom: '30px', color: 'white' }}>
                                <CloseIcon />
                            </ListItemButton>
                        </ListItem>


                    </List>
                </Paper>

            </Grid>
        </LayoutAdmin>
    )

}

export default NotificationsAdmin