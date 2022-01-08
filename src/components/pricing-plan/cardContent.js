import React from "react"
import { Button, Card, Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';


const useStyles=makeStyles((theme)=>({ 
    
    card_spacing:{
      padding:20,
      width:"20rem",
      boxShadow:'none',
      background:theme.palette.secondary.light,
      [theme.breakpoints.down('md')]:{
        width:"14rem"
      },
      [theme.breakpoints.between('xs','sm')]:{
        width:"18rem",
        margin:'auto',
        marginBottom:40 
      }
    },
    Headerlist:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
    },
    price_box:{
       border:'0px solid',
       borderRadius:10,
       padding:4,
       paddingLeft:20,
       paddingRight:20,
       background:theme.palette.primary.lightgray,
    },
    listing_order:{
     display:'flex!important',
     flexDirection:'column!important',
     background:theme.palette.primary.lightgray,
     display:'block!important'
    },
    btn_styles:{
      display:'flex',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      
    },
    inside_btn:{
     width:'100%',
     padding:12,
     textTransform: 'capitalize',
     background:'#7073BE!important'
    },
    lables:{
       lineHeight:2.4,
       color:theme.palette.primary.light
    },
    listitems:{
      display:'flex',
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-start'
    }
    
  }));

function CardContentComponent({item}){
    const classes = useStyles()
    return (
        <Card className={classes.card_spacing} style={{ backgroundColor:item.backgroundColor,height:item.height} }  > 
        <Box className={classes.changecard}>
        <Box className={classes.Headerlist}>
        <Box>
        <h5>{item.HeaderContent.title}</h5>
        <Typography>{item.HeaderContent.subtitle}</Typography>
        </Box>
        <Box className={classes.price_box}>
          <h3>{item.HeaderContent.price}</h3>
          <Typography>{item.HeaderContent.month}</Typography>
        </Box>
        </Box>
        <hr/>
        {item.information.map((item,index)=>{
              return(
               <Box className={classes.listitems} style={{}}>
               <lable className={classes.lables}>{item.key}</lable>
             </Box>
              )
            })}
        <Box className={classes.btn_styles}>
        <Button  variant="contained" className={classes.inside_btn}>Get started</Button>
        </Box>
        </Box>
        </Card>   
    )
}

export default CardContentComponent