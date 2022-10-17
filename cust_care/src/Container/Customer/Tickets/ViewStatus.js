import { Step, StepLabel, Stepper} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import LayoutAgent from '../../../MainLayout/LayoutAgent';
import LayoutCustomer from '../../../MainLayout/LayoutCustomer';
import { AppBar, makeStyles } from '@material-ui/core';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Box,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';
import { flexbox } from '@mui/system';

const styles = makeStyles({
    container: {
        position: 'relative',
        top: '100px',
        width: '100%',
        height: '100%',       
        padding: '18px',

    },
    boxes:{
        width: '1130px',
        height: '100%',
        boxshadow:"5px 10px",
        border:"1px solid gray",
        backgroundcolor:"yellow",
        borderRadius: '10px',
        position: 'relative',
        top: '125px',
        left: '70px',
        padding:"15px",
        color:"black"
       

    },
    status:{
        width: '1130px',
        height: '100%', 
        position: 'relative',
        top: '225px',
        left: '90px',
        padding:"15px",
    
    },
    statusFont :{
        fontSize:"30px",
        color:"gray"
    },
   span: {
      paddingLeft:"30px"
    },
  
})

const TrackStepper = () => {
var style = styles();

    return (
        <LayoutCustomer>
            <Grid>
               
            <div className={style.container}>
                <h2>Tickets Status</h2>
            </div>
            {/* //<AppBar className={style.boxes} sx={{ backgroundColor : 'white' }} > I didn t receive any amount</AppBar> */}
            <Box className={style.boxes} ><h5>I didn't receive any amount</h5></Box>


            
            </Grid>

            <Grid container className={style.status}>
                <Grid >
                    <p className={style.statusFont}>Pending <span className={style.span}  ></span> ----------     <span className={style.span}  ></span>  </p>
                </Grid>
                <Grid>
                    <p className={style.statusFont}> Sended  <span className={style.span}  ></span>  ----------     <span className={style.span}  ></span>  </p>
                </Grid>
                <Grid>
                    <p className={style.statusFont}>In Progress  <span className={style.span}  ></span> ----------    <span className={style.span}  ></span>  </p>
                </Grid>
                <Grid>
                    <p className={style.statusFont}>Finished</p>
                </Grid>
            </Grid>
            
       
        </LayoutCustomer>
    );
};

export default TrackStepper;