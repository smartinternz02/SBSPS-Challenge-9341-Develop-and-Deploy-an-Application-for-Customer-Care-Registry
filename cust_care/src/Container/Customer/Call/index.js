import { Box, Icon, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import LayoutAgent from '../../../MainLayout/LayoutCustomer'
import { styled } from '@mui/material/styles';




const styles = makeStyles({
    Grid: {
        position: 'relative',
        top: '100px',
        width: '100%',
        height: '650px',
        padding: '18px',

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    }

})


function Profile() {

    const style = styles()
    return (
        <LayoutAgent>

            <Box className={style.Grid} >
                <Grid container>

                    <Grid item sm={12}>
                        <Typography>MAke a Call</Typography><br></br>

                    </Grid>
                </Grid>


            </Box>
        </LayoutAgent >
    )
}

export default Profile