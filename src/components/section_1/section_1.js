import React from 'react'
import { useMediaQuery } from 'beautiful-react-hooks';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { height } from '@mui/system';

const useStyles = makeStyles((theme)=>({
    Section_1:{
        height:"120vh",
        

        [theme.breakpoints.between('md','lg')]:{
            height:"50vh",
         }
    },

    start_btn:{
        backgroundColor:"#7073BE",
        borderRadius:"30px 0px 30px 30px",
        marginTop:"2rem",
        width:"230px",
        height:"55px",
        justifyContent:"center"
    },
    text_on:{
        fontSize:"20px",
         color:"#8B93A7",
         
    },
    heading:{
        fontWeight:"800",
        fontSize:"65px",
        
    [theme.breakpoints.between('md','lg')]:{
        fontSize:"45px"
     }
    },
    img_content:{
        display:"flex",
        flexDirection:"row",
        marginTop:"10rem",
        justifyContent:"space-between"
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
        paddingTop:"2rem"
        
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
        backgroundColor:"#7073BE",
        alignItems:"center",
        color:"white",
        marginLeft:"13rem",
        position:"absolute",
        top:"70%"
    },
    Loading_msg:{
        position:"absolute",
        top:"-60%",
        paddingLeft:"1.5rem",

        [theme.breakpoints.between('md','lg')]:{
            height:"100px"
        }
    },
    Any_box:{
        height:"1.5rem",
        width:"4.5rem",
        color:"white",
        backgroundColor:"#FFC623",
        textAlign:"center",
        marginRight:"6rem",
        marginLeft:"3rem"
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
        }
    },
    head_sec:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    msg_img:{
        position:"absolute",
        left:"15%",
        paddingTop:"1rem"
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
         }
        
    },
    img_glasses:{
        [theme.breakpoints.between('md','lg')]:{
            height:"165px",
            paddingLeft:"2.5rem"
         }
    },
    img_SkellyApe:{
        [theme.breakpoints.between('md','lg')]:{
            height:"115px"
         }
    },
    img_Skeleton:{
        [theme.breakpoints.between('md','lg')]:{
            height:"90px"
         }
    },
    glasses_text:{
        marginLeft:"20rem",
        position:"absolute",
        top:"110%",

        [theme.breakpoints.between('md','lg')]:{
            top:"50%",
            marginLeft:"13rem"
        }
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
            
         }
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
            
         }
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
         }
    },
    play_img:{
        [theme.breakpoints.between('md','lg')]:{
            height:"15px"
         }
    },
    calls:{
        paddingTop:"12px"
    },
    img_ape_section:{
        position:"absolute",
        right:"30%"
    },
    img_skeleton_section:{
        position:"absolute",
        top:"80%",
        right:"10%",

        [theme.breakpoints.between('md','lg')]:{
            top:"40%",
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
        justifyContent:"space-evenly"
    },
    img_list:{
        height:"23px"
    }



}))

const Section_1Component = () => {

    const classes = useStyles()


    return (
        <Container fixed className={classes.Section_1}>
            <Box sx={{textAlign:"center"}}>
              <Box className={classes.head_sec}  sx={{ marginTop:"5rem",}}>
                  <img className={classes.msg_img} src='./assets/images/Section_1/Message.svg'/>
                  <h1 className={classes.heading}>Access control based on user's<br/> NFT holding, for anything.</h1>
              </Box>
              <Box className={classes.para_sec}  sx={{ marginTop:"1rem",}}>
                  <p className={classes.text_on}>NFT Passort dridiging the NFT with online, offline<br/> and virtual world.</p>
                  <img className={classes.S_img} src='./assets/images/Section_1/S-section1.svg'/>
              </Box>
              <Box className={classes.btn_row}>
                  <Box className={classes.left_btn_img}>
                      <img className={classes.Loading_msg} src='./assets/images/Section_1/Loading-msg.svg'/>
                      <img src='./assets/images/Section_1/Arrow-orange.svg'/>
                      <Box className={classes.Any_box}>Any NFT</Box>
                  </Box>
                  <Button className={classes.start_btn} variant="contained">Start integrate it</Button>
                  <Box className={classes.right_btn_img}>
                      <img src='./assets/images/Section_1/Curved-lines.svg'/>
                      <img src='./assets/images/Section_1/Arrow-purple.svg'/>
                  <Box className={classes.ENS_box}>ENS Domains</Box>
                  </Box>
              </Box>
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
