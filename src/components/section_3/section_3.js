import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Image } from 'react-bootstrap';
import Image1 from "../images/section_3 img/image.svg"
import Circle from "../images/section_3 img/circle.svg"
import Bar from "../images/section_3 img/bar.svg"
import Curve1 from "../images/section_3 img/curve1.svg"
import Curve2 from "../images/section_3 img/curve2.svg"
import Folder from "../images/section_3 img/folder.svg" 
import Bar2 from "../images/section_3 img/bar2.svg"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { width } from '@mui/system';
import Background_lines from "../images/section_3 img/line.svg"
import CloseIcon from '@mui/icons-material/Close';


const useStyle = makeStyles((theme)=>({

    section_3:{
        height:"fit-content",
        marginBottom:"7rem",

        [theme.breakpoints.between('sm','md')]:{
            maxWidth:"680px"
        },
    },
  heading:{
      color:"#19233C",
      fontWeight:"900",
      textAlign:"center",
      marginBottom:"4rem",

      [theme.breakpoints.between('xs','sm')]:{
        marginBottom:"0rem",
        paddingTop:"2rem"
    },
  },
  top_section:{
      display:"flex",
      flexDirection:"row",
      flex:1,
      marginLeft:"2rem",

      [theme.breakpoints.between('sm','md')]:{
        marginLeft:"0rem"
    },
    [theme.breakpoints.between('xs','sm')]:{
        flexDirection:"column"
    },
  },
  middle_section:{
    display:"flex",
    flexDirection:"row",
    flex:1,
    marginLeft:"2rem",

    [theme.breakpoints.between('sm','md')]:{
        marginLeft:"0rem"
    },
    [theme.breakpoints.between('xs','sm')]:{
        flexDirection:"column-reverse"
    },
},
bottom_section:{
    display:"flex",
    flexDirection:"row",
    flex:1,
    marginLeft:"2rem",

    [theme.breakpoints.between('sm','md')]:{
        marginLeft:"0rem"
    },
    [theme.breakpoints.between('xs','sm')]:{
        flexDirection:"column"
    },
},
  top_left:{
      display:"flex",
      flex:0.5,
      flexDirection:"column",

      [theme.breakpoints.between('xs','sm')]:{
        flex:1,
        marginTop:"-5rem"
    },
  },
  top_right:{
    display:"flex",
    flex:0.5,
    position:"relative",

    [theme.breakpoints.between('xs','sm')]:{
        marginTop:"2rem",
        alignItems:"center",
        flex:1
    },
},
middle_left:{
    display:"flex",
    flex:0.5,
    position:"relative",
    marginTop:"4rem",

    [theme.breakpoints.between('sm','lg')]:{
        marginTop:"6rem"
    },
    [theme.breakpoints.between('xs','sm')]:{
        flex:1,
        marginTop:"3rem",
        marginLeft:"1rem"
    },
},
middle_right:{
  display:"flex",
  flex:0.5,
  flexDirection:"column",

  [theme.breakpoints.between('sm','lg')]:{
    marginLeft:"3rem"
},
[theme.breakpoints.between('xs','sm')]:{
    marginLeft:"0rem",
    flex:1,
    marginTop:"-2rem"
},

},
bottom_left:{
    display:"flex",
    flex:0.5,
    flexDirection:"column",
    marginTop:"3rem",

    [theme.breakpoints.between('sm','lg')]:{
        marginTop:"0rem"
    },
    [theme.breakpoints.between('xs','sm')]:{
        marginTop:"0rem",
        flex:1,
        marginTop:"-2rem"
    },
},
bottom_right:{
  display:"flex",
  flex:0.5,
  marginTop:"10rem",
  position:"relative",

  [theme.breakpoints.between('xs','sm')]:{
    flex:1,
    marginTop:"5rem"
},
},
box1_bg:{
    marginTop:"2.5rem",

    [theme.breakpoints.between('xs','lg')]:{
        height:"222px",
        marginTop:"1.5rem"
    },
},
right_contents:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:"3rem",

    [theme.breakpoints.between('xs','lg')]:{
        marginTop:"2rem"
    },
},
right_contents2:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:"2rem",

    [theme.breakpoints.between('xs','lg')]:{
        marginTop:"1rem"
    },
},
right_Box:{
    position:"absolute",
    height:"360px",
    width:"360px",
    backgroundColor:"white",
    left:"10%",
    borderRadius:"5px",
    boxShadow: "0px 44px 74px rgba(189, 189, 189, 0.25)",

    [theme.breakpoints.between('xs','lg')]:{
        height:"225px",
        width:"225px"
    },
},
folder:{
    position:"absolute",
    top:"20%",
    left:"17%",

    [theme.breakpoints.between('xs','lg')]:{
        height:"13px",
        top:"21%"
    },
},
folder2:{
    position:"absolute",
    left:"17%",
    top:"46.5%",

    [theme.breakpoints.between('xs','lg')]:{
        height:"13px",
        top:"48%"
    },
},
circle:{
    paddingTop:"0.5rem",

    [theme.breakpoints.between('xs','lg')]:{
        height:"35px"
    },
},
line:{
    [theme.breakpoints.between('xs','lg')]:{
        width:"100px"
    },
},
right_text2:{
    marginBottom:"0rem",
    fontSize:"8px",
    color:"#19233C",

    [theme.breakpoints.between('xs','lg')]:{
        fontSize:"6px"
    },
},
right_text1:{
    marginBottom:"0.5rem",
    fontSize:"12px",
    color:"#19233C",

    [theme.breakpoints.between('xs','lg')]:{
        fontSize:"8px",
        marginBottom:"0"
    },
},
button:{
    width:"160px",
    height:"60px",
    backgroundColor:"#7073BE !important",
    fontSize:"16px !important",
    color:"white",
    marginTop:"4rem !important",
    marginLeft:"6rem !important",

    [theme.breakpoints.between('xs','lg')]:{
        height:"30px",
        width:"100px",
        fontSize:"10px !important",
        marginTop:"2rem !important",
        marginLeft:"4rem !important",
        backgroundColor:"#7073BE !important",
    },
},
top_heading:{
    fontSize:"35px",
    fontWeight:"900",
    color:"#19233C",
    marginTop:"8rem",

    [theme.breakpoints.between('xs','lg')]:{
        fontSize:"18px"
    },
},
top_text:{
    fontSize:"18px",
    fontWeight:"600",
    color:"#8B93A7",

    [theme.breakpoints.between('xs','lg')]:{
        fontSize:"14px"
    },
},
textfiled:{
    height:"32px",
    width:"235px",
    display:"flex",
    border:"1px solid black",
    justifyContent:"space-between",
    marginLeft:"2rem",

    [theme.breakpoints.between('xs','lg')]:{
        height:"20px",
        width:"150px",
        marginLeft:"1.5rem"
    },
},
textfiled_text:{
    fontSize:"9px",
    color:"#626675",
    paddingTop:"0.5rem",
    paddingLeft:"0.5rem",

    [theme.breakpoints.between('xs','lg')]:{
        fontSize:"6px",
        paddingTop:"0.2rem",
        paddingLeft:"0.2rem"
    },
},
middle_button:{
    width:"85px",
    height:"32px",
    fontSize:"9px !important",
    color:"white",
    borderRadius:"2px",
    backgroundColor:"#7073BE !important",

    [theme.breakpoints.between('xs','lg')]:{
        height:"20px",
        width:"40px !important",
        fontSize:"5px !important",
        backgroundColor:"#7073BE !important",
    },
},
left_box:{
    width:"360px",
    height:"160px",
    backgroundColor:"white",
    padding:"2rem",
    position:"absolute",
    boxShadow: "0px 0px 74px rgba(189, 189, 189, 0.25)",
    left:"9%",
    borderRadius:"5px",
    [theme.breakpoints.between('md','lg')]:{
     width:"300px",
     height:"100px",
     padding:"1rem"
    },
    [theme.breakpoints.down('md')]:{
        height:"100px",
        width:"230px",
        padding:"1rem"
    },
},
left_heading:{
    fontSize:"20px",
    fontWeight:"700",
    color:"#19233C",
    textAlign:"center",
    marginBottom:"1.5rem",

    [theme.breakpoints.between('xs','lg')]:{
        fontSize:"12px"
    },
},
curve1:{
    marginTop:"5rem",

    [theme.breakpoints.between('sm','lg')]:{
        height:"55px",
        marginTop:"4rem",
        marginLeft:"1rem"
    },
    [theme.breakpoints.between('xs','sm')]:{
        height:"55px",
        marginTop:"4rem",
        marginLeft:"0rem"
    },
},
right_Box1:{
    width:"320px",
    height:"140px",
    boxShadow: "0px 0px 74px rgba(189, 189, 189, 0.25)",
    padding:"1rem",
    paddingRight:"2rem",
    backgroundColor:"white",
    position:"absolute",
    right:"30%",

    [theme.breakpoints.between('xs','lg')]:{
        height:"90px",
        width:"200px",
        top:"-30%",
    },
    [theme.breakpoints.between('sm','md')]:{
        right:"15%"
    },
},
bottom_text:{
    fontSize:"13px",
    fontWeight:"500",
    color:"#626675",
    marginBottom:"2rem",

    [theme.breakpoints.between('xs','lg')]:{
        fontSize:"9px",
        marginBottom:"0.5rem"
    },
},
bottom_button:{
    fontSize:"9px !important",
    color:"white",
    backgroundColor:"#7073BE !important",
    height:"30px",
    width:"65px",

    [theme.breakpoints.between('xs','lg')]:{
        height:"20px",
        width:"40px",
        fontSize:"6px !important",
        backgroundColor:"#7073BE !important",
    },
},
close:{
    position:"absolute",
    right:"2%",
    top:"2%"
},
box1_bg1:{
    display:"none",

    [theme.breakpoints.between('xs','sm')]:{
        display:"flex",
        position:"absolute",
        left:"0%",
    }
},
Curve2:{
    marginLeft:"18rem",
    marginTop:"1.5rem",

    [theme.breakpoints.between('sm','lg')]:{
        height:"85px",
        marginTop:"0.5rem",
        marginLeft:"15.5rem"
    },
    [theme.breakpoints.between('xs','sm')]:{
        marginLeft:"10rem",
        height:"85px",
        marginTop:"0.5rem",
    },
},
Input:{
  width:"185px",
  border:" 0.5px solid #BABECB",
  opacity:"0.4",
  background:"#FDFDFD",
  borderRadius:"3px",
  height:"31px",
   '&::placeholder':{
       paddingLeft:"20px",
       fontSize:"10px",
       fontWeight:"500",
       color:"black",
   },
   [theme.breakpoints.between('md','lg')]:{
      width:"170px",
   },
   [theme.breakpoints.down('md')]:{
      width:"110px" ,
      '&::placeholder':{
        paddingLeft:"6px",
        fontSize:"7px",
        fontWeight:"700",
        color:"black",
    },
   }
}


}))


function Section_3() {
    const classes = useStyle()
    return (
        <Container fixed className={classes.section_3}>
            <h1 className={classes.heading}>How It Works</h1>
            <Box className={classes.top_section}>
                <Box className={classes.top_left}>
                    <p className={classes.top_heading}>Select the NFT project(s)</p>
                    <p className={classes.top_text}>Select one or more NFT project or add your NFT project.</p>
                </Box>
                <Box className={classes.top_right}>
                  <Image src={Image1} className={classes.box1_bg} />
                  <Image src={Background_lines} className={classes.box1_bg1}  />
                  <Box className={classes.right_Box}>
                      <Box className={classes.right_contents}>
                         <Box className={classes.images}>
                             <Image src={Circle} className={classes.circle} />
                             <Image src={Folder} className={classes.folder} />
                         </Box>
                         <Box className={classes.right_text}>
                             <p className={classes.right_text1}>Shokhi valobasha kare koy.mp4</p>
                             <p className={classes.right_text2}>Upload Completed</p>
                             <Image src={Bar} className={classes.line} />
                         </Box>
                       </Box>
                         <Box className={classes.right_contents2}>
                              <Box className={classes.images}>
                                  <Image src={Circle} className={classes.circle} />
                                  <Image src={Folder} className={classes.folder2} />
                              </Box>
                              <Box className={classes.right_text}>
                                  <p className={classes.right_text1}>Ore mon kota shon jabi.mkv</p>
                                  <p style={{fontWeight:"900"}} className={classes.right_text2}>Uploading...</p>
                                  <Image src={Bar2} className={classes.line} />
                              </Box>
                         </Box>
                         <Button variant="contained" className={classes.button}>Continue</Button>
                     </Box>
                  </Box>
              </Box>
              <Box className={classes.middle_section}>
                  <Box className={classes.middle_left}>
                     <Image src={Curve1} className={classes.curve1} />
                     <Box className={classes.left_box}>
                         <p className={classes.left_heading}>Share Workspace</p>
                        <Box component="div" style={{display:"flex",flex:1,flexDirection:"row",position:"relative",left:"19px"}}>
                              <input  placeholder='https://share.ly/F!aDZjjKAK!q' className={classes.Input}></input>
                              <Box component="div" style={{width:"69px",height:"31px",background:"#7073BE",borderRadius:"3px",justifyContent:"center"}}>
                                   <p style={{textAlign:"center",color:"#FDFDFD",fontSize:"10px",fontWeight:"600",position:"relative",top:"8px"}}>Copy Link</p>
                              </Box>
                        </Box>
                      
                     </Box>
                  </Box>
                  <Box className={classes.middle_right}>
                      <p className={classes.top_heading}>Select the Channels</p>
                      <p className={classes.top_text}>Select one or more supported channels from the list. Example Telegram Wordpress, Shopify.</p>
                  </Box>
              </Box>
              <Box className={classes.bottom_section}>
                  <Box className={classes.bottom_left}>
                     <p className={classes.top_heading}>Select the Access type</p>
                     <p className={classes.top_text}>Based on channels, select the access type like Discount for Shopify, Comment role for wordpress, Read access for Google Sheet</p>
                  </Box>
                  <Box className={classes.bottom_right}>
                      <Box className={classes.right_Box1}>
                          <Box style={{display:"flex"}}>
                             <p className={classes.bottom_text}>Love the orange tone. Could you tweak that header a bit please.</p>
                             <CloseIcon className={classes.close}/>
                          </Box>
                          <Button variant="contained" className={classes.bottom_button}>send</Button>
                      </Box>
                      <Image src={Curve2} className={classes.Curve2} />
                  </Box>
              </Box>
        </Container>
    )
}

export default Section_3
