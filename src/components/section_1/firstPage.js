import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"
import React from "react"
import { Container, Image } from "react-bootstrap"
import Image1 from "../images/initalpage/image.svg"
import Image2 from "../images/initalpage/image3.svg"
import Icon from "../images/initalpage/icon.svg"
import Image3 from "../images/initalpage/image2.svg"
import Image4 from "../images/initalpage/image1.svg"
import Image5 from "../images/initalpage/image4.svg"
import VideoIcon from "../images/initalpage/video.svg"

const useStyle = makeStyles((theme)=>({
   root:{
       display:"none",
       [theme.breakpoints.down('sm')]:{
         display:"flex",
         flex:1,
         flexDirection:"column" ,

       }
   },
   imageBox1:{
       display:"flex",
       flex:1,
       justifyContent:"flex-end"
   },
   imageBox2:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  subComponent:{
      flex:0.3,
      paddingTop:"20px",
      height:"35px",
      borderRadius:"16.3px",
      boxShadow:" 0px 5.16667px 10.3333px rgba(0, 0, 0, 0.05)",
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      flexDirection:"row"

  },
  Box3:{
    display:"flex",
    flex:1,
    justifyContent:"flex-start",
    flexDirection:"column"
  },
  Box4:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    flexDirection:"row",
    position:"relative",
    left:"92px"
  },
  Box5:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    flexDirection:'row',
    marginTop:"30px"
  },
  subComponent1:{
    flex:0.4,
    paddingTop:"20px",
    height:"35px",
    borderRadius:"16.3px",
    boxShadow:" 0px 5.16667px 10.3333px rgba(0, 0, 0, 0.05)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"flex-start",

},

}))


export const FirstPageComponent = ()=>{
    const classes = useStyle()
     return (
       <Container>
           <Box component="div" className={classes.root}>
                <Box component="div" className={classes.imageBox1}>
                     <Image src={Image1}/>
                </Box>
                <Box component="div" style={{flex:1,display:"flex",flexDirection:"column"}}>
                    <Box component="image" className={classes.imageBox2}>
                        <Image src={Image2} width="50px"/>
                    </Box>
                    <Box component="div" style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",}}>
                        <Box component="div" className={classes.subComponent}>
                            
                            <Box component="image">
                                  <Image src={Icon} width="15px" height="15px" style={{position:"relative",bottom:"13px",left:"10px"}}></Image>
                             </Box>
                          
                             <Box component="div">
                                  <Box component="div">
                                     <p style={{fontSize:"10px",color:"#27333F",position:"relative",bottom:"7px",left:"20px"}}>News feed</p>
                                  </Box>
                             </Box>
                        </Box>
                    </Box>
                    
                </Box>
                <Box component="div" className={classes.Box3}>
                     <Box component="image">
                         <Image src={Image3}/> 
                     </Box>
                     <Box component="div" style={{display:"flex",flex:1,justifyContent:"flex-start",alignItems:"center",}}>
                        <Box component="div" className={classes.subComponent1}>
                             <Box component="div">
                                  <Box component="div">
                                     <p style={{fontSize:"10px",color:"#4F5360",position:"relative",top:"-8px",left:"20px",fontWeight:"500"}}>I am fine, How are you?</p>
                                  </Box>
                             </Box>
                        </Box>
                    </Box>
                </Box>

                <Box component="div" style={{display:"flex",flex:1,flexDirection:"row"}}>
                   <Box component="image" className={classes.Box4}>
                       <Image src={Image4}/>
                   </Box>
                   <Box component="div" style={{display:"flex",flex:0.4, paddingTop:"20px", height:"35px",  borderRadius:"16.3px",boxShadow:" 0px 5.16667px 10.3333px rgba(0, 0, 0, 0.05)"}}>
                              <Box component="image">
                                  <Image src={VideoIcon} width="15px" height="15px" style={{position:"relative",bottom:"15px",left:"10px"}}></Image>
                             </Box>
                          
                             <Box component="div">
                                  <Box component="div">
                                     <p style={{fontSize:"10px",color:"#27333F",position:"relative",bottom:"7px",left:"20px"}}>Video Calls</p>
                                  </Box>
                             </Box> 
                   </Box>
                </Box>

                <Box component="div" className={classes.Box5}>
                    <Box component="image" className={classes.Box5}>
                         <Image src={Image5} width={80} style={{position:"relative",bottom:"40px"}}/>
                    </Box>
                    <div style={{width:"44%",position:"relative",right:"40px",top:"18px"}}>
                    <Box component="div" style={{display:"flex",flex:0.7, paddingTop:"20px", height:"35px",  borderRadius:"16.3px",boxShadow:" 0px 5.16667px 10.3333px rgba(0, 0, 0, 0.05)"}}>
                            <Box component="div">
                                  <Box component="div">
                                     <p style={{fontSize:"10px",color:"#27333F",position:"relative",bottom:"10px",left:"20px"}}>Hey Bill, nice to meet you!</p>
                                  </Box>
                             </Box> 
                   </Box>
                   <Box component="div" style={{display:"flex",flex:0.7, paddingTop:"20px", height:"35px",  borderRadius:"16.3px",boxShadow:" 0px 5.16667px 10.3333px rgba(0, 0, 0, 0.05)",marginTop:"15px"}}>
                            <Box component="div">
                                  <Box component="div">
                                     <p style={{fontSize:"10px",color:"#27333F",position:"relative",bottom:"10px",left:"20px"}}>Hope you’re doing fine.</p>
                                  </Box>
                             </Box> 
                   </Box>
                    </div>
                </Box>
           </Box>
       </Container>
     )
}