import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from  'react';
import Box from '@mui/material/Box';
import Cryptopunk from '../images/section-6/Cryptopunks.svg'
import Mutantclub from  '../images/section-6/Mutantclub.svg'
import BlackBored from  '../images/section-6/BlackBored.svg'
import  cool from  '../images/section-6/cool cats 1.svg'
import loot from  '../images/section-6/loot 1.svg'
import Orange from  '../images/section-6/Orangeball.svg'
import path from  '../images/section-6/path4 1.svg'
import Red from  '../images/section-6/R.svg'
import sand from  '../images/section-6/sandbox.svg'
import  Twodots from  '../images/section-6/Twodots.svg'


const useStyles=makeStyles((theme)=>({
    main:{
         height:'60vh',
             paddingTop:70,
             paddingBottom:140,
             marginBottom:50,
             marginTop:50
    },
    Picture_lists:{
        position:'relative',
        flex:0.60,
        
    },
    Content:{
        display:'flex',
        justifyContent:'space-between',
        flex:1,
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'column-reverse'
        }
    },
    headcontent:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
             display:'none'
        }
    },
    Trust:{
         marginTop:10,
         flex:0.40
    },
    side_content:{
         fontWeight:'bold',
         marginBottom:30
    },
    side_content_1:{
     color:theme.palette.primary.light
    },
    side_content_2:{
      color:'#7073BE'
    },
    images:{
    //  position:'absolute',
    //  zindex:'-1',
    //  top:100,
    //  left:100
    },
    crypto:{
        position:'absolute',
        top: 42,
        left: 185,
    },
mutant:{
    position:'absolute',
    top:-18,
    left:18
},
Bored:{
    position:'absolute',
    top:250,
    left:195
},
loot:{
    position:'absolute',
    top:50,
    left:490
},
cool :{
    position:'absolute',
    top:333,
    left:375
}, 
Red :{
    position:'absolute',
    top:355,
    left:42
},  
sand :{
    position:'absolute',
    top:217,
    left:80
}, 
Twodots:{
    position:'absolute',
    top:-56,
    left:391
},
Orange:{
    position:'absolute',
    top:107,
    left:385
},
path :{
    position:'absolute',
    top: 213,
    left: 386,
} 

}))


 export const PictureContent=()=>{
     const classes=useStyles();
     const [state,setState]=React.useState({
       sideHead:'Trusted by 1k+ Renowned.',
       sidehead_2:'At Besnik, we put our product, clients and culture first. Our goal is to win your business through.',
       learnmore:'Learn more  ->'
     })



return (

 <Container className={classes.main}>
     <Box className={classes.Content}>
     <Box className={classes.Picture_lists}>
         <h1 className={classes.headcontent}>
         At Besnik, we put our product, clients and culture first.
             
         </h1>
         <img src={Cryptopunk} className={classes.crypto}/>
         <img src={Mutantclub} className={classes.mutant}/>
         <img src={BlackBored} className={classes.Bored }/>
         <img src={loot}       className={classes.loot  }/>
         <img src={cool}       className={classes.cool  }/>
         <img src={Red}        className={classes.Red   }/>
         <img src={sand}       className={classes.sand  }/>
         <img src={Twodots}    className={classes.Twodots}/>
         <img src={Orange}     className={classes.Orange }/>
         <img src={path}       className={classes.path   }/>

     </Box>
     <Box className={classes.Trust}>
        <h1 className={classes.side_content}>{state.sideHead}</h1>
        <p  className={classes.side_content_1}>{state.sidehead_2}</p>
        <p  className={classes.side_content_2}>{state.learnmore}</p>
     </Box>
     </Box>
    
 </Container>

)

}