import React from 'react'
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import zIndex from '@mui/material/styles/zIndex';
import Skeleton from '@mui/material/Skeleton';
import { fontSize, height, width } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// import TelegramIcon from '@mui/icons-material/Telegram';
import bgbox1 from '../images/section-2/Bg_box1.svg'
import bgbox2 from '../images/section-2/Bg_box2.svg'
import kuss from '../images/section-2/kuss.svg'
import circle_orange from '../images/section-2/halfcircle_orange.svg'
import circle_white from '../images/section-2/halfcircle_white.svg'
import telegram from '../images/section-2/telegram.svg'
import discord from '../images/section-2/discord.svg'
import lines from '../images/section-2/dashboard_lines.svg'
import down from '../images/section-2/arrow_down.svg'
import location from '../images/section-2/location.svg'


const usestyles = makeStyles((theme)=>({

    Section_2:{
        height:"fit-content",
        marginBottom:"13rem",

        [theme.breakpoints.between('sm','lg')]:{
            marginBottom:"7rem",
        },
        [theme.breakpoints.between('xs','sm')]:{
            marginBottom:"5rem",
        },

    },
    Main_container:{
        display:"flex",
        flex:1,
        flexDirection:"row",

        [theme.breakpoints.between('xs','sm')]:{
            flexDirection:"column"
        }
    },
    Left_section:{
        display:"flex",
        flex:0.5,
        flexDirection:"column",
        margin:"2.5rem",

        [theme.breakpoints.between('md','lg')]:{
            marginLeft:"5rem",
        },
        [theme.breakpoints.between('sm','md')]:{
            flex:0.5,
            marginLeft:"0",
            marginRight:"0",
            marginLeft:"0",
            paddingRight:"2rem"
        },
        [theme.breakpoints.between('xs','sm')]:{
            alignItems:"center",
            margin:"0",
        },
    },
    Right_section:{
        display:"flex",
        flex:0.5,
        flexDirection:"column",

        [theme.breakpoints.between('sm','md')]:{
            marginLeft:"3rem",
        },
        [theme.breakpoints.between('xs','sm')]:{
            alignItems:"center"
        },
    },
    heading:{
        fontWeight:"900",

        [theme.breakpoints.between('sm','lg')]:{
            fontSize:"30px"
        },
        [theme.breakpoints.between('xs','sm')]:{
            textAlign:"center",
            fontSize:"30px",
            marginTop:"1rem"
        },
    },
    heading_text:{
        fontSize:"20px",
        color:"#8B93A7",
        paddingTop:"1rem",

        [theme.breakpoints.between('sm','lg')]:{
            fontSize:"15px",
        },
        [theme.breakpoints.between('xs','sm')]:{
            display:"none"
        },
    },
    breaktag:{
        [theme.breakpoints.between('sm','md')]:{
            display:"none"
        },
    },
    box_1:{
        height:"580px",
        width:"475px",
        backgroundColor:"#D4D5EB",
        marginTop:"2rem",
        borderRadius:"25px", 
        textAlign:"center",
        alignItems:"center",
        position:"relative",

        [theme.breakpoints.between('xs','lg')]:{
            height:"300px",
            width:"245px"
        },
        
    },
    box_2:{
        height:"580px",
        width:"475px",
        backgroundColor:"#9cffde",
        marginTop:"2rem",
        marginLeft:"2rem",
        borderRadius:"25px",
        textAlign:"center",
        position:"relative", 

        [theme.breakpoints.between('xs','lg')]:{
            height:"300px",
            width:"245px"
        },
        [theme.breakpoints.between('xs','sm')]:{
            marginLeft:"0"
        },
    },
    box_3:{
        height:"460px",
        width:"475px",
        backgroundColor:"#FFC0C7",
        marginTop:"5rem",
        borderRadius:"25px 25px 0px 0px",
        position:"relative", 

        [theme.breakpoints.between('sm','lg')]:{
            height:"240px",
            width:"245px",
        },
        [theme.breakpoints.between('xs','sm')]:{
            height:"240px",
            width:"245px",
            marginTop:"2rem"
        },
    },
    box1_bg:{
        position:"absolute",
        right:"-13%",

        [theme.breakpoints.between('xs','lg')]:{
            height:"320px",
            position:"absolute",
            right:"0%",
            left:"1%"
        },
    },
    box2_bg:{
        [theme.breakpoints.between('xs','lg')]:{
            height:"320px",
            
        },
    },
    smallbox_1:{
        width:"250px",
        height:"150px",
        backgroundColor:"white",
        borderRadius:"40px 40px 40px 0px",
        zIndex:"1",
        position:"absolute",
        left:"23%",
        top:"10%",

        [theme.breakpoints.between('xs','lg')]:{
            height:"75px",
            width:"130px",
            borderRadius:"20px 20px 20px 0px"
        },
        
    },
    smallbox_2:{
        height:"80px",
        width:"250px",
        backgroundColor:"#19BF6F",
        borderRadius:"15px",
        zIndex:"1",
        position:"absolute",
        top:"40%",
        left:"23%",

        [theme.breakpoints.between('xs','lg')]:{
            height:"40px",
            width:"130px",
            borderRadius:"10px"
        },
    },
    animation_lines1:{
        marginTop:"1.5rem !important",
        marginLeft:"2.5rem",
        height:"15px !important",
        width:"50% !important",

        [theme.breakpoints.between('xs','lg')]:{
            width:"50%",
            height:"8px !important",
            marginLeft:"1.5rem",
            marginTop:"1rem !important"
        },
    },
    animation_lines2:{
        marginTop:"1rem !important",
        marginLeft:"2.5rem",
        width:"70%",
        height:"15px !important",

        [theme.breakpoints.between('xs','lg')]:{
            width:"70%",
            height:"8px !important",
            marginLeft:"1.5rem",
            marginTop:"0.5rem !important"
        },
    },
    animation_lines3:{
        backgroundColor:"#FF7138 !important",
        marginTop:"2rem !important",
        width:"30%",
        height:"15px !important",

        [theme.breakpoints.between('xs','lg')]:{
            width:"20%",
            height:"8px !important",
            marginTop:"1rem !important",
            backgroundColor:"#FF7138 !important",
        },
    },
    img_person:{
        height:"44px",
        marginRight:"1rem",
        marginLeft:"2rem",
        marginTop:"1rem",

        [theme.breakpoints.between('xs','lg')]:{
            height:"22px",
            marginLeft:"1.5rem",
            marginTop:"0.5rem",
            marginRight:"0.5rem",
        },
    },
    img_down:{
        border:"1rem solid #ffff",
        borderRadius:"10px",
        marginRight:"1rem",

        [theme.breakpoints.between('xs','lg')]:{
            border:"5px solid #ffff",
            height:"20px",
            borderRadius:"5px",
            position:"absolute",
            top:"25%"
        },
    },
    animation_lines4:{
        backgroundColor:"white !important",
        marginTop:"1rem !important",
        width:"60%",
        height:"15px !important",

        [theme.breakpoints.between('xs','lg')]:{
            width:"60%",
            height:"8px !important",
            marginTop:"0rem !important",
            marginLeft:"2rem",
            backgroundColor:"white !important",
        },
    },
    smallbox_3:{
        height:"75px",
        width:"280px",
        borderRadius:"10px",
        backgroundColor:"white",
        position:"absolute",
        top:"20%",
        left:"15%",
        display:"flex",
        flexDirection:"row",
        padding:"1rem",

        [theme.breakpoints.between('xs','lg')]:{
            width:"145px",
            height:"40px",
            padding:"0.6rem",
        },
    },
    smallbox_4:{
        height:"75px",
        width:"280px",
        borderRadius:"10px",
        backgroundColor:"white",
        position:"absolute",
        top:"37%",
        left:"15%",
        display:"flex",
        flexDirection:"row",
        padding:"1rem",

        [theme.breakpoints.between('xs','lg')]:{
            width:"145px",
            height:"40px",
            padding:"0.6rem",
        },
    },
    box_heading:{
        fontWeight:"600",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"20px",
        },
    },
    box_text:{
        margin:"1.5rem",
        color:"#6D6D6D",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"10px",
            margin:"1rem"
        },
    },
    location_img:{
        height:"15px",
        marginTop:"1rem",

        [theme.breakpoints.between('xs','lg')]:{
            height:"8px",
            marginTop:"0.5rem"
        },
    },
    telegram_img:{
        height:"44px",

        [theme.breakpoints.between('xs','lg')]:{
            height:"20px",
        },
    },
    box_lines:{
        width:"80%",
        paddingTop:"8px",
        paddingLeft:"2.5rem",

        [theme.breakpoints.between('xs','lg')]:{
            width:"100%",
            paddingLeft:"1.3rem",
            paddingTop:"0.2rem"
        },
    },
    animation_lines5:{
        width:"40%",
        height:"15px !important",

        [theme.breakpoints.between('xs','lg')]:{
            height:"8px !important",
            width:"40%",
        },
    },
    animation_lines6:{
        width:"55%",
        height:"15px !important",

        [theme.breakpoints.between('xs','lg')]:{
            height:"8px !important",
            width:"55%",
        },
    },
    discord_img:{
        height:"44px",

        [theme.breakpoints.between('xs','lg')]:{
            height:"20px",
        },
    },
    smallbox_5:{
        height:"100px",
        width:"100px",
        position:"absolute",
        top:"5%",
        right:"13%",
        fontSize:"35px",
        fontWeight:"600",
        borderRadius:"20px",
        boxShadow: "-50px 50px 60px rgba(60, 80, 224, 0.15)",
        backgroundColor:"#7073BE",
        color:"white",
        padding:"1rem",
        paddingTop:"1.5rem",

        [theme.breakpoints.between('xs','lg')]:{
            height:"50px",
            width:"50px", 
            borderRadius:"10px",
            fontSize:"17px",
            paddingTop:"0.8rem",
            padding:"0.5rem" 
        },
    },
    text1:{
        position:"absolute",
        top:"0%",
        margin:"75% 13% 5% 13%",

        [theme.breakpoints.between('xs','lg')]:{
            margin:"75% 5% 5% 5%", 
        },
    },
    smallbox_6:{
        height:"360px",
        width:"330px",
        position:"absolute",
        top:"0",
        backgroundColor:"white",
        left:"15%",
        borderRadius:"0px 0px 15px 15px",

        [theme.breakpoints.between('xs','lg')]:{
            height:"180px",
            width:"170px" 
        },
    },
    smallbox_7:{
        height:"145px",
        width:"330px",
        position:"absolute",
        left:"15%",
        top:"85%",
        backgroundColor:"white",
        boxShadow: "0px 50px 80px rgba(0, 0, 0, 0.06)",
        borderRadius:"15px",
        textAlign:"center",
        paddingTop:"0.5rem",
        paddingLeft:"2rem",
        paddingRight:"2rem",

        [theme.breakpoints.between('xs','lg')]:{
            height:"75px",
            width:"170px",
            paddingLeft:"0.5rem",
            paddingRight:"0.5rem" 
        },
    },
    smallbox_8:{
        height:"150px",
        width:"125px",
        position:"absolute",
        backgroundColor:"#19233C",
        top:"35%",
        right:"2%",
        borderRadius:"15px",
        boxShadow: "-45px 33px 70px rgba(209, 209, 209, 0.6)",
        color:"white",
        textAlign:"center",
        paddingTop:"1rem",

        [theme.breakpoints.between('xs','lg')]:{
            height:"80px",
            width:"65px",
            borderRadius:"10px"
        },
    },
    box6_font:{
        color:"#A6A6A6",
        fontSize:"12px",
        fontWeight:"600",
        paddingLeft:"1rem",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"7px",
            paddingLeft:"1.5rem"
        },
    },
    box6_price:{
        fontSize:"20px",
        fontWeight:"600",
        marginBottom:"0rem",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"10px",
            marginLeft:"0rem"
        },
    },
    bullet_orange:{
        color:"#FF7138",
        paddingTop:"5px",

        [theme.breakpoints.between('xs','lg')]:{
            height:"5px !important",
            paddingTop:"0",
            marginTop:"5px",
        },
    },
    bullet_yellow:{
        color:"#FDB400",
        paddingTop:"5px",

        [theme.breakpoints.between('xs','lg')]:{
            height:"5px !important",
            paddingTop:"0",
            marginTop:"5px",
        },
    },
    smallbox6_box1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        paddingTop:"2rem"
    },
    halfcircle:{
        display:"flex",
        flexDirection:"row",
        position:"absolute",
        top:"35%",

        [theme.breakpoints.between('xs','lg')]:{
            top:"40%",
        },
    },
    Earning:{
        textAlign:"center",
        position:"absolute",
        top:"70%",
    },
    box6_price1:{
        fontSize:"35px",
        fontWeight:"600",
        marginBottom:"0",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"15px",
            marginTop:"0.5rem"
        },
    },
    box6_font1:{
        fontSize:"16px",
        color:"#A6A6A6",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"7px"
        },
    },
    smallbox7_heading:{
        fontSize:"25px",
        color:"#19233C",
        fontWeight:"700",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"14px",
            marginBottom:"0"
        },
    },
    smallbox7_text:{
        fontSize:"15px",
        color:"#6D6D6D",

        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"8px"
        },
    },
    circles:{
        [theme.breakpoints.between('xs','lg')]:{
            height:"55px",
        },
    },
    circles1:{
        marginTop:"1.5rem",

        [theme.breakpoints.between('xs','lg')]:{
            height:"55px",
            marginTop:"0.4rem"
        },
    },
    dashboard:{
        [theme.breakpoints.between('xs','lg')]:{
            fontSize:"7px"
        },
    },
    dashLines:{
        [theme.breakpoints.between('xs','lg')]:{
            height:"30px"
        },
    }
    

}))


const Section_2 = () => {

    const classes = usestyles()
    return (
        <Container fixed className={classes.Section_2}>
            <Box className={classes.Main_container}>
                <Box className={classes.Left_section}>
                    <Box>
                        <h1 className={classes.heading}>Most commonly<br/> Used cases</h1>
                        <p className={classes.heading_text}>Determining which technique to use in any given<br className={classes.breaktag}/> situation rests with the skill of the analyst.</p>
                    </Box>
                    <Box className={classes.box_1}>
                            <img className={classes.box1_bg} src={bgbox1}></img>
                            <Box className={classes.smallbox_1}>
                                 <Skeleton className={classes.animation_lines1}
                                   animation="none"
                                 />
                                 <Skeleton className={classes.animation_lines2}
                                   animation="none"
                                 />
                                 <Box style={{display:"flex",flexDirection:"row", justifyContent:"left"}}>
                                     <img className={classes.img_person} src={kuss}></img>
                                     <Skeleton className={classes.animation_lines3}
                                       animation="none"
                                     />
                                 </Box>
                            </Box> 
                            <Box className={classes.smallbox_2}>
                                <Box style={{display:"flex",flexDirection:"row",margin:"1rem"}}>
                                  <img className={classes.img_down} src={down}></img>
                                    <Skeleton className={classes.animation_lines4}
                                       animation="none"
                                    />
                                </Box>
                            </Box>
                            <Box className={classes.text1}>
                                <h2 className={classes.box_heading}>Onboard Contibutors</h2>
                                <p className={classes.box_text}>Onboarding Contributors who can, code, provide liquidity, write content, design memes is secret of web3 project success.</p>
                            </Box>
                    </Box>
                </Box>
                <Box className={classes.Right_section}>
                    <Box className={classes.box_2}>
                         <img className={classes.box2_bg} src={bgbox2}></img>
                         <Box className={classes.smallbox_3}>
                             <img className={classes.telegram_img} src={telegram}></img>
                                <Box className={classes.box_lines}>
                                <Skeleton className={classes.animation_lines5}
                                   animation="none"
                                 />
                                 <Skeleton className={classes.animation_lines6}
                                   animation="none"
                                 />
                                </Box>
                              <img className={classes.location_img} src={location}></img>
                         </Box> 
                         <Box className={classes.smallbox_4}>
                             <img className={classes.discord_img} src={discord}></img>
                                <Box className={classes.box_lines}>
                                <Skeleton className={classes.animation_lines5}
                                   animation="none"
                                 />
                                 <Skeleton className={classes.animation_lines6}
                                   animation="none"
                                 />
                                </Box>
                              <img className={classes.location_img} src={location}></img>
                         </Box>
                         <Box className={classes.smallbox_5}>$5K</Box>
                         <Box className={classes.text1}>
                             <h2 className={classes.box_heading}>Marketing</h2>
                             <p className={classes.box_text}>Marketing intelligence is necessary when entering a foreign market. determines the intelligence needed</p>
                         </Box>
                    </Box>
                    <Box className={classes.box_3}>
                      <img className={classes.box2_bg} src={bgbox2}></img>
                      <Box className={classes.smallbox_6}>
                          <Box className={classes.smallbox6_box1}>
                             <Box>
                                <Box style={{display:"flex",flexDirection:"row"}}>
                                  <FiberManualRecordIcon className={classes.bullet_orange}/>
                                  <p className={classes.box6_price}>$500+</p>
                                </Box>
                                <p className={classes.box6_font}>Earn per day</p>
                             </Box>
                                <Box>
                                  <Box style={{display:"flex",flexDirection:"row"}}>
                                    <FiberManualRecordIcon className={classes.bullet_yellow}/>
                                    <p className={classes.box6_price}>$50</p>
                                  </Box>
                                  <p className={classes.box6_font} >Pay Us</p>
                                </Box>
                                <Box className={classes.halfcircle}>
                                  <img className={classes.circles} src={circle_orange}></img>
                                  <img className={classes.circles1} src={circle_white}></img>
                                </Box>
                                <Box className={classes.Earning}>
                                  <p className={classes.box6_price1}>$15,000+</p>
                                  <p className={classes.box6_font1}>Earning</p>
                                </Box>
                          </Box>
                      </Box>
                      <Box className={classes.smallbox_7}>
                          <Box>
                              <p className={classes.smallbox7_heading}>Increase Numbers</p>
                              <p className={classes.smallbox7_text}>Weather Fund raising, Bootstraping Liquidity or increase trade volume, its all easy with NFT rich as Company.</p>
                          </Box>
                      </Box>
                      <Box className={classes.smallbox_8}>
                          <p className={classes.dashboard}>Dashboard</p>
                          <img className={classes.dashLines} src={lines}></img>
                      </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Section_2
