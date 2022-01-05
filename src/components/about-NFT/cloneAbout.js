import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'; 
// import {Container,Card,ListGroup} from 'react-bootstrap';
// import { useMediaQuery } from 'beautiful-react-hooks';
import { makeStyles } from '@mui/styles';
import { Container} from '@mui/material';
import Typography from '@mui/material/Typography';

const useStyles=makeStyles((theme)=>({
    Wrapper:{
        marginTop:"20px",
        marginBottom:"100px",
        marginLeft:"auto",
        marginRight:"auto",
        position:"relative",
        height:"fit-content",
        fontFamily: "Times New Roman",

    },
    para:{
        lineHeight:"1.8",
        
        [theme.breakpoints.up('xs')]:{
            color: theme.palette.primary.light,   
        },
        
    },
    darklet:{
        fontSize:"17px",
        paddingTop:"30px",        
        [theme.breakpoints.up('xs')]:{
            color:theme.palette.primary.dark,
        },
        
        
    } ,
    H1:{
        fontSize:36,
        fontWeight:"bold",
        marginBottom:20,
       [theme.breakpoints.down('md')]:{
           fontSize:25, 
       },
       [theme.breakpoints.down('sm')]:{
        fontSize:32,
        
    },
    },
    captial:{
      fontSize:18,
      lineHeight:1.8,
      color:theme.palette.primary.light,
      [theme.breakpoints.down('md')]:{
        fontSize:15,  
    },
      [theme.breakpoints.down('sm')]:{
        fontSize:17
    },
    },
    break:{
      [theme.breakpoints.down('md')]:{
          display:'none'
      }
    },    
    blackhat: {
        [theme.breakpoints.down('sm')]:{
                 height:68,
                 width:65
        }
    },
     Whitehat:{
        [theme.breakpoints.down('sm')]:{
                 height:68,
                 width:65
        }
    },
     box_1:{
        maxwidth: 150,
        width:"30rem",
        [theme.breakpoints.between('xs','sm')]:{
            width:"100%"
        },
        height: 140,
        backgroundColor: '#F6F9FF',
        [theme.breakpoints.down('sm')]:{
        margin:"auto",
        },
        borderTopLeftRadius:10,
        borderTopRightRadius:10, 
        display:"flex",
        padding:"15px"   ,
        [theme.breakpoints.between('sm','md')]:{
            width:"24rem"
        }  
    },
    box_2:{
        maxwidth: 150,
        width:"30rem",
        [theme.breakpoints.between('xs','sm')]:{
            width:"100%"
            },
        height: 140,
        backgroundColor: '#F6F9FF',
        [theme.breakpoints.down('sm')]:{
            margin:"auto"
            },
            [theme.breakpoints.between('sm','md')]:{
            width:"24rem"
            }
    },
    box_3:{
        maxwidth: 150,
        width:"30rem",
        [theme.breakpoints.between('xs','sm')]:{
            width:"100%"
            },
        height: 140,
        backgroundColor: '#F6F9FF',
        [theme.breakpoints.down('sm')]:{
            margin:"auto"
            },
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10,
            display:"flex",
        padding:"15px",
        [theme.breakpoints.between('sm','md')]:{
            width:"24rem",
            
        }  
         
    },
    Wrapper_class:{
        display:"flex",
        justifyContent:"space-between",
        height:"100%",
        [theme.breakpoints.down('sm')]:{
            display:"flex",
            flexDirection:"column-reverse",
            width:"100%"
            },
    },
    about_nft:{
        paddingLeft:"60px",
        paddingTop:50,
        [theme.breakpoints.up('lg')]:{
            paddingRight: "73px",
        },
        [theme.breakpoints.down('sm')]:{
          paddingLeft:"0px!important",
          textAlign:"center",
          paddingBottom:40
        },
        
    },
    btn_style:{
        borderRadius: "10px",
        backgroundColor:"#7073BE",
        padding:"10px 17px",
        color:"white",
        outline:"none",
        border:"0px solid",
        marginTop:"28px",
        [theme.breakpoints.down('sm')]:{
            position:"absolute",
            bottom: "-70px",
            display:"flex",
            textAlign:"center",
            marginLeft: "30%",
            marginRight: "30%"
        }
    },
    Violet_box:{
        display:"flex",
        boxShadow: "-10.6667px 21.3333px 42.6667px -8.53333px rgba(0, 0, 0, 0.05)",
        position:"absolute",
        top:"134px",
        left:"130px",
        zIndex: 1,
        height:"9.3rem",
        borderRadius: "10px",
        padding:"0px 10px!important",
        backgroundColor:"white",
        width:"28rem",
        alignItems:"center",
        maxwidth: 10,
        width:"30rem",
        height: 140,
        [theme.breakpoints.between('md','lg')]:{
            left:"60px",
          },
    //     [theme.breakpoints.down("md")]:{
    //       width:"24rem",
    //       left:"60px",
    //       top:120
    //     },
    //     [theme.breakpoints.between('xs','sm')]:{
    //         width:"90%",
    //         left:23,
    //         top:400,
    //     }
     }
    
  }))
 const Cloneabout=()=>{
     const classes=useStyles()
     return(
  <>
<Container className={classes.Wrapper} maxwidth="sm" style={{}}>
    <div className={classes.Wrapper_class}>
    
    <div> 
    <div className={classes.box_1}>
    <Typography className={classes.para}>I did a significant amount of research on the top 10 solar companies.<br></br><strong className={classes.darklet}>Mike Hardson, Director</strong></Typography>
    <img src='assets/images/section-12/blackHat.svg' className={classes.blackhat}/> </div>
    <div className={classes.box_2}>
    </div>
    <div className={classes.Violet_box} >
       <Typography className='mb-0' className={classes.para}><span className="d-block pb-1"><img src="assets/images/section-12/quotation.svg" alt="Quatation"/></span>Well-explained presentation for a rooftop solar project very impressive.<br></br><strong className={classes.darklet}>Craig Hunter, CEO</strong>
       </Typography><img src='assets/images/section-12/violetHat.svg' alt="Violethat" width={70} height={100} /></div>
       <div className={classes.box_3}>
       <Typography className={classes.para}>This was, far and away, the most thorough well-thought-out.<br></br><strong className={classes.darklet}>Sara Doe, Chairman</strong></Typography>
       <img src='assets/images/section-12/whiteHat.svg'className={classes.Whitehat}/>
       </div>
       </div>
       <div className={classes.about_nft}>
       <h1 className={classes.H1}>What peopel says about <br/> NFT Passport </h1>
       <Typography className={classes.captial}>Capital created quality local jobs, and brought more <br className={classes.break}/> reliable local clean energy to our energy system.</Typography>
       <button type="button" className={classes.btn_style} >Read more</button>
  </div>
  
  </div>
    </Container>  
    </>
)
}
export default Cloneabout;



