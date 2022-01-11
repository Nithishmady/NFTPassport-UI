import React from 'react'
import { useMediaQuery } from 'beautiful-react-hooks';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { height } from '@mui/system';
import { FirstPageComponent } from './firstPage';

const useStyles = makeStyles((theme)=>({
    Section_1:{
        height:"fit-content",
        marginBottom:"10rem",

        [theme.breakpoints.between('xs','sm')]:{
            marginBottom:"6rem"
        }
    },

    start_btn:{
        backgroundColor:"#7073BE !important",
        borderRadius:"30px 0px 30px 30px !important" ,
        marginTop:"2rem",
        width:"230px",
        height:"55px",
        justifyContent:"center",

        [theme.breakpoints.between('md','lg')]:{
            width:"180px",
            height:"35px",
            fontSize:"13px !important",
            fontWeight:"600 !important"
        },
        [theme.breakpoints.between('sm','md')]:{
            width:"180px",
            height:"35px",
            fontSize:"13px !important",
            fontWeight:"600 !important"
        },

        [theme.breakpoints.between('xs','sm')]:{
            width:"175px",
            height:"35px",
            fontWeight:"600 !important",
            fontSize:"13px !important",
            marginTop:"1rem" 
        }
    },
    text_on:{
        fontSize:"20px",
         color:"#8B93A7",

         [theme.breakpoints.between('md','lg')]:{
            fontSize:"15px"
        },
        [theme.breakpoints.between('sm','md')]:{
            fontSize:"15px"
        },
        [theme.breakpoints.between('xs','sm')]:{
            fontSize:"18px",
         }
         
    },
    heading:{
        fontWeight:"900",
        fontSize:"65px",
        
    [theme.breakpoints.between('md','lg')]:{
        fontSize:"45px",
        paddingTop:"0rem"
     },

     [theme.breakpoints.between('sm','md')]:{
        fontSize:"35px"
     },
     [theme.breakpoints.between('xs','sm')]:{
        fontSize:"29px",
        margin:"0",
        padding:"0",
        paddingTop:"7rem"
     },
     
    },
    img_content:{
        display:"flex",
        flexDirection:"row",
        marginTop:"10rem",
        justifyContent:"space-between",

        [theme.breakpoints.between('xs','sm')]:{
            display:"none"
         },
        
    },
    btn_row:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    left_btn_img:{
        flexDirection:"column",
        position:"absolute",
        left:"10%",
        paddingTop:"2rem",
        
        [theme.breakpoints.between('xs','sm')]:{
            position:"absolute",
            top:"17%"
        },
    },
    right_btn_img:{
        flexDirection:"column",
        position:"absolute",
        right:"20%",
        paddingTop:"2rem"
    },
    ENS_box:{
        height:"1.5rem",
        width:"6.5rem",
        backgroundColor:"#696B9B",
        alignItems:"center",
        color:"white",
        marginLeft:"13rem",
        position:"absolute",
        top:"70%",

        [theme.breakpoints.between('md','lg')]:{
            fontSize:"13px",
            width:"6rem",
            marginLeft:"6.5rem",
            marginTop:"0.2rem",
            padding:"3px"
        },

        [theme.breakpoints.between('sm','md')]:{
            fontSize:"10px",
            width:"4rem",
            marginLeft:"5rem",
            marginTop:"0.6rem",
            padding:"2px",
            height:"1rem"
        },

        [theme.breakpoints.between('xs','sm')]:{
            display:"none"
         },
    },
    Loading_msg:{
        position:"absolute",
        top:"-60%",
        paddingLeft:"1.5rem",

        [theme.breakpoints.between('md','lg')]:{
            height:"80px",
            paddingLeft:"1rem",
            top:"-30%"
        },

        [theme.breakpoints.between('sm','md')]:{
            height:"70px",
            position:"absolute",
            top:"-17%",
            left:"40%"
        },

        [theme.breakpoints.between('xs','sm')]:{
            height:"50px",
            position:"absolute",
            top:"-1rem",
            left:"40%"
        }
    },
    Any_box:{
        height:"1.5rem",
        width:"4.5rem",
        color:"white",
        backgroundColor:"#FFC623",
        textAlign:"center",
        marginRight:"6rem",
        marginLeft:"3rem",
        fontWeight:"600",

        [theme.breakpoints.between('md','lg')]:{
            fontSize:"13px",
            width:"4rem",
            padding:"3px"
        },

        [theme.breakpoints.between('sm','md')]:{
            fontSize:"10px",
            width:"3rem",
            padding:"2px",
            height:"1rem",
            position:"absolute",
            left:"-3rem"
        },

        [theme.breakpoints.between('xs','sm')]:{
            fontSize:"10px",
            width:"3rem",
            height:"1rem",
            padding:"1px",
            marginLeft:"4rem"
        }

    },
    Arrow_orange:{
        [theme.breakpoints.between('md','lg')]:{
            height:"12px"
        },
        [theme.breakpoints.between('sm','md')]:{
            height:"12px",
            paddingLeft:"1.5rem"
        },
        [theme.breakpoints.between('xs','sm')]:{
            height:"10px",
            position:"absolute",
            top:"1.5rem",
            left:"6rem"
        }
    },
    Arrow_purple:{
        [theme.breakpoints.between('md','lg')]:{
            height:"12px",
            marginRight:"3rem"
        },

        [theme.breakpoints.between('sm','md')]:{
            height:"12px",  
        },
        [theme.breakpoints.between('xs','sm')]:{
            display:"none"
         },
    },
    img_lines:{
        [theme.breakpoints.between('md','lg')]:{
            height:"40px", 
        },

        [theme.breakpoints.between('sm','md')]:{
            height:"30px", 
        },

        [theme.breakpoints.between('xs','sm')]:{
            display:"none"
         },
    },
    para_sec:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    S_img:{
        position:"absolute",
        top:"35%",
        right:"15%",

        [theme.breakpoints.between('md','lg')]:{
            top:"16%",
            height:"70px", 
            right:"16%" 
        },

        [theme.breakpoints.between('sm','md')]:{
            top:"22%",
            height:"50px", 
            right:"15%" 
        },

        [theme.breakpoints.between('xs','sm')]:{
            height:"3rem",
            top:"9rem",
            right:"1rem"
        },
    },
    head_sec:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    msg_img:{
        position:"absolute",
        left:"15%",
        paddingTop:"1rem",

        [theme.breakpoints.between('sm','md')]:{
            left:"14%",
            height:"25px", 
            paddingTop:"0.5rem"
             
        },

        [theme.breakpoints.between('xs','sm')]:{
            height:"2rem",
            left:"7%",
            top:"9rem"
        },
    },
    images_left:{
        flexDirection:"row",
    },
    img_pyramid:{
        position:"absolute",
        top:"80%",
        left:"35%",

        [theme.breakpoints.between('md','lg')]:{
            height:"80px",
            top:"40%",
            left:"34%"
         },

         [theme.breakpoints.between('sm','md')]:{
            height:"60px",
            top:"45%",
            left:"36%"
         },

         [theme.breakpoints.between('xs','sm')]:{
            height:"50px",
            position:"absolute",
            left:"50%",
            top:"95%"
         },
        
    },
    img_glasses:{
        [theme.breakpoints.between('md','lg')]:{
            height:"165px",
            paddingLeft:"2.5rem",
            marginTop:"2rem",
         },

         [theme.breakpoints.between('sm','md')]:{
            height:"145px",
            position:"absolute",
            top:"50%"
         },

         [theme.breakpoints.between('xs','sm')]:{
            height:"70px",
            position:"absolute",
            top:"106%",
            left:"20%"
         },

    },
    img_SkellyApe:{
        [theme.breakpoints.between('md','lg')]:{
            height:"115px"
         },

         [theme.breakpoints.between('sm','md')]:{
            height:"95px"
         },

         [theme.breakpoints.between('xs','sm')]:{
            height:"60px",
            position:"absolute",
            bottom:"200%",
            right:"150%"
         },
    },
    img_Skeleton:{
        [theme.breakpoints.between('md','lg')]:{
            height:"90px"
         },

         [theme.breakpoints.between('sm','md')]:{
            height:"70px"
         },

         [theme.breakpoints.between('xs','sm')]:{
            height:"50px",
            position:"absolute",
         },
    },
    glasses_text:{
        marginLeft:"20rem",
        position:"absolute",
        top:"110%",
        color:"#4F5360",

        [theme.breakpoints.between('md','lg')]:{
            top:"50%",
            marginLeft:"13rem"
        },

        [theme.breakpoints.between('sm','md')]:{
            top:"56%",
            marginLeft:"10rem"
        },

        [theme.breakpoints.between('xs','sm')]:{
            right:"20%",
            fontSize:"8px",
            top:"110%",
         },
    },
    bill_glasses:{
        width:"12rem",
        height:"2rem",
        borderRadius:"20px",
        backgroundColor:"White",
        textAlign:"center",
        paddingLeft:"6px",
        paddingTop:"3px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",

        [theme.breakpoints.between('md','lg')]:{
            fontSize:"13px",
            width:"10rem", 
            paddingTop:"5px"
         },

         [theme.breakpoints.between('sm','md')]:{
            fontSize:"10px",
            width:"8rem", 
            height:"1.5rem",
            paddingTop:"5px"
         },

         [theme.breakpoints.between('xs','sm')]:{
            width:"7rem", 
            height:"1rem",
            paddingTop:"1.5px"
         },
    },
    hope_glasses:{
        width:"11rem",
        height:"2rem",
        marginTop:"1.5rem",
        borderRadius:"20px",
        backgroundColor:"white",
        marginLeft:"3px",
        paddingTop:"3px",
        paddingLeft:"6px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",

        [theme.breakpoints.between('md','lg')]:{
            fontSize:"13px",
            width:"9rem", 
            paddingTop:"5px",
            marginTop:"1rem"
         },

         [theme.breakpoints.between('sm','md')]:{
            fontSize:"10px",
            width:"7rem", 
            height:"1.5rem",
            marginTop:"1rem"
         },
         [theme.breakpoints.between('xs','sm')]:{
            width:"6rem", 
            height:"1rem",
            paddingTop:"1.5px",
            marginTop:"1rem"
         },
    },
    pyramid_box:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:"3rem",
        width:"10rem",
        position:"absolute",
        top:"83%",
        left:"43%",
        backgroundColor:"white",
        justifyContent:"space-evenly",
        borderRadius:"30px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",

        [theme.breakpoints.between('md','lg')]:{
            top:"41%",
            fontSize:"13px",
            fontWeight:"600",
            height:"1.5rem",
            width:"5.5rem"
         },

         [theme.breakpoints.between('sm','md')]:{
            top:"46%",
            fontSize:"10px",
            fontWeight:"600",
            height:"1.5rem",
            width:"5.5rem",
            padding:"5px",
            paddingTop:"6px",
            marginLeft:"1rem"
         },

         [theme.breakpoints.between('xs','sm')]:{
            width:"4rem", 
            height:"1.5rem",
            paddingTop:"1.5px",
            fontSize:"8px",
            top:"97%",
            left:"70%"
         },
    },
    play_img:{
        [theme.breakpoints.between('md','lg')]:{
            height:"15px"
         },

         [theme.breakpoints.between('sm','md')]:{
            height:"10px"
         },

         [theme.breakpoints.between('xs','sm')]:{
            height:"10px"
         }
    },
    calls:{
        paddingTop:"12px"
    },
    img_ape_section:{
        position:"absolute",
        right:"30%",

        [theme.breakpoints.between('sm','md')]:{
            top:"51%",
            right:"25%"
        }
    },
    img_skeleton_section:{
        position:"absolute",
        top:"80%",
        right:"10%",

        [theme.breakpoints.between('md','lg')]:{
            top:"40%",
        },

        [theme.breakpoints.between('sm','md')]:{
            top:"45%",
        }
    },
    ape_text:{
        marginTop:"2rem",
        height:"2rem",
        width:"11rem",
        backgroundColor:"white",
        textAlign:"center",
        borderRadius:"30px",
        paddingTop:"3px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
        color:"#4F5360",

        [theme.breakpoints.between('md','lg')]:{
            fontSize:"13px",
            height:"2rem",
            width:"8.5rem",
            paddingTop:"5px",
            marginTop:"1rem"
        },

        [theme.breakpoints.between('sm','md')]:{
            fontSize:"10px",
            height:"1.5rem",
            width:"7rem",
            paddingTop:"5px",
            marginTop:"1rem"
        },

        [theme.breakpoints.between('xs','sm')]:{
            fontSize:"8px",
            height:"1rem",
            width:"5.5rem",
            paddingTop:"2px",
            marginTop:"1rem"
        }
    },
    skelly_text:{
        marginTop:"2rem",
        height:"3rem",
        width:"10rem",
        backgroundColor:"white",
        textAlign:"center",
        borderRadius:"30px",
        paddingTop:"10px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
        flexDirection:"row",
        display:"flex",
        justifyContent:"space-evenly",
        fontWeight:"600",

        [theme.breakpoints.between('md','lg')]:{
            fontSize:"13px",
            height:"2rem",
            paddingTop:"5px",
            width:"7rem"
        },

        [theme.breakpoints.between('sm','md')]:{
            fontSize:"10px",
            height:"1.5rem",
            paddingTop:"5px",
            width:"6rem"
        },

        [theme.breakpoints.between('xs','sm')]:{
            fontSize:"8px",
            height:"1rem",
            width:"5.5rem",
            paddingTop:"2px",
            marginTop:"1rem"
        }
    },
    img_list:{
        height:"23px",

        [theme.breakpoints.between('md','lg')]:{
            height:"15px",
            marginTop:"3px"
        },

        [theme.breakpoints.between('sm','md')]:{
            height:"10px",
            marginTop:"3px"
        },

        [theme.breakpoints.between('xs','sm')]:{
            height:"10px",
            marginTop:"3px"
        }
    },
    break:{
        [theme.breakpoints.between('xs','sm')]:{
            display:"none",
        }
    }



}))

const Section_1Component = () => {

    const classes = useStyles()


    return (
        <Container fixed className={classes.Section_1}>
            <Box sx={{textAlign:"center"}}>
              <Box className={classes.head_sec}  sx={{ marginTop:"5rem",}}>
                  <img className={classes.msg_img} src='./assets/images/Section_1/Message.svg'/>
                  <h1 className={classes.heading}>Access control based on user's<br className={classes.break}/> NFT holding, for anything.</h1>
              </Box>
              <Box className={classes.para_sec}  sx={{ marginTop:"1rem",}}>
                  <p className={classes.text_on}>NFT Passort dridiging the NFT with online, offline<br className={classes.break}/> and virtual world.</p>
                  <img className={classes.S_img} src='./assets/images/Section_1/S-section1.svg'/>
              </Box>
              <Box className={classes.btn_row}>
                  <Box className={classes.left_btn_img}>
                      <img className={classes.Loading_msg} src='./assets/images/Section_1/Loading-msg.svg'/>
                      <img className={classes.Arrow_orange} src='./assets/images/Section_1/Arrow-orange.svg'/>
                      <Box className={classes.Any_box}>Any NFT</Box>
                  </Box>
                  <Button className={classes.start_btn} variant="contained">Start integrate it</Button>
                  <Box className={classes.right_btn_img}>
                      <img className={classes.img_lines} src='./assets/images/Section_1/Curved-lines.svg'/>
                      <img className={classes.Arrow_purple} src='./assets/images/Section_1/Arrow-purple.svg'/>
                  <Box className={classes.ENS_box}>ENS Domains</Box>
                  </Box>
              </Box>
            </Box>
            <Box component="div" style={{marginTop:"10px"}}>
                <FirstPageComponent/>
            </Box>
            <Box className={classes.img_content}>
                <Box className={classes.images_left}>
                  <Box>
                   <img className={classes.img_glasses} src='./assets/images/Section_1/Glasses.svg'/>
                    <Box className={classes.glasses_text}>
                     <p className={classes.bill_glasses}>Hey Bill, nice to meet you!</p>
                     <p className={classes.hope_glasses}>Hope you're doing fine.</p>
                    </Box>
                  </Box>
                  <Box>
                      <img className={classes.img_pyramid} src='./assets/images/Section_1/pyramid.svg'/>
                      <Box className={classes.pyramid_box}>
                         <img className={classes.play_img} src='./assets/images/Section_1/play_btn.svg'/>
                         <p className={classes.calls}>Video calls</p>
                      </Box>
                  </Box>
                </Box>
                <Box className={classes.images_right}>
                  <Box className={classes.img_ape_section}>
                     <img className={classes.img_SkellyApe} src='./assets/images/Section_1/skelly-ape.svg'/>
                     <Box className={classes.ape_text}>I am fine,How are you?</Box>
                  </Box>
                  <Box className={classes.img_skeleton_section}>
                     <img className={classes.img_Skeleton} src='./assets/images/Section_1/skeleton.svg'/>
                     <Box className={classes.skelly_text}>  
                         <img className={classes.img_list} src='./assets/images/Section_1/list.svg'/>
                         <p>News Feed</p>
                     </Box>
                  </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Section_1Component
