import React, { Component, useEffect,useState } from 'react'
import chatbot from '../../Customer/assets/chat.png'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Avatar,
    Button,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core'
import LayoutCustomer from '../../../MainLayout/LayoutCustomer'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Search } from '@mui/icons-material';
import { Link} from 'react-router-dom'
import Axios  from 'axios';


const customer = localStorage.getItem("custname");

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        width: '1220px'
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#0D80D8',
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));



const styles = makeStyles({
    Grid: {
        position: 'relative',
        top: '80px',

        width: '100%',
        height: '650px',

        padding: '18px',

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    text:{
        position:"relative",top:"5px"
    }
});

function Customers() {
    const style = styles();
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const [data,setData] = useState([
        {
            org_name:"Kishor",
            region:"India"
        }
    ]);

    useEffect (()=>{
        Axios.post("http://localhost:8080/organizations").then((response) => {
          
            setData(response.data.message);
          });
        },[]);
      
    function local (){
        localStorage.setItem("botorg_name","kishorkumarr")
    }

    return (
        <LayoutCustomer>
            <Grid className={style.Grid}>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeaderCell}>Companies</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Region</TableCell>
                                <TableCell className={classes.tableHeaderCell}>Chatbot</TableCell>
                               
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           
                            {/* {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => ( */}
                            {data.map((row) => (
                           
                                <TableRow key={row.name}>
                                    <TableCell>
                                        <Grid container>
                                        <Grid item lg={2}>
                        <Avatar
                          alt={row.org_name}
                          src=""
                          className={classes.avatar}
                          sx={{ bgcolor: "#0D80D8" }}
                        >
                          {row.org_name.charAt(0)}
                        </Avatar>
                      </Grid>
                                            <Grid item lg={10} className={style.text}>
                                                <Typography className={classes.content}  >{row.org_name} </Typography>
                                                
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    
                                    <TableCell>
                                    <Grid container>
                                           
                                           <Grid item lg={10}>
                                               <Typography className={classes.content}>{row.region}</Typography>
                                               
                                           </Grid>
                                       </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Link to={`/customer/${customer}/organizations/${row.org_name}/chatbot`}> <Box
                                                        component="img"
                                                       
                                                        alt="chatbot"
                                                        src={chatbot}
                                                        onClick={() => {
                                                            console.log("clicked");
                                                            localStorage.setItem("botorg_name",row.org_name)
                                                          }}
                                                    />
                                        </Link>
                                      
                                    </TableCell>
                                    
                                </TableRow>
                                
                            ))}
                        </TableBody>
                    
                    </Table>
                </TableContainer>
            </Grid>
        </LayoutCustomer>

    );       
}
export default Customers;
