import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Card, CardContent, Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import UseSwitchesBasic from '../style-components/switch-component';
import cards from './card-properties';
import { FaCheckCircle } from "react-icons/fa";
import CardContentComponent from './cardContent';



const useStyles=makeStyles((theme)=>({ 
    choose:{
      textAlign:'center'
    },
    header:{
     display:'flex',
     justifyContent:'space-around',
     margin:'auto',
     [theme.breakpoints.between('xs','sm')]:{
      display:'flex',
      flexDirection:'column',
      marginBottom:20,
    }
    },
    sub_header:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:8
     },
    
  }));

  function PricingHeader({item}){
    const classes=useStyles();
    return(
        <>
        <h1 className={classes.choose}> Choose Your Pricing Plan</h1>
        <div className={classes.sub_header}>
          <Typography>  permonth &nbsp;&nbsp; </Typography>
          <UseSwitchesBasic/>
          <Typography> &nbsp;&nbsp;peryear </Typography>
          <img src='images/section-11/Save.svg'></img>
           {/* <FaCheckCircle/> */}
          </div> 
          </>

    )
  }
  export default PricingHeader;