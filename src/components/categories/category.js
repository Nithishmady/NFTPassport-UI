import React from 'react';
import {  makeStyles } from '@mui/styles'
import { Container,Card, Typography,Button } from '@mui/material';
import Box from '@mui/material/Box';
import GlassMen1 from '../images/section-6/Ellipse 1.svg'
import GlassMen2 from '../images/section-6/Ellipse 2.svg'
import GlassMen3 from '../images/section-6/Ellipse 3.svg'
import GlassMen4 from '../images/section-6/Ellipse 4.svg'
import GlassMen5 from '../images/section-6/Ellipse 5.svg'
import GlassMen6 from '../images/section-6/Ellipse 6.svg'
import GlassMen7 from '../images/section-6/Ellipse 7.svg'
import GlassMen8 from '../images/section-6/Ellipse 8.svg'
import GlassMen9 from '../images/section-6/Ellipse 9.svg'
import GlassMen10 from '../images/section-6/Ellipse 10.svg'
import GlassMen11 from '../images/section-6/Ellipse 11.svg'
import GlassMen12 from '../images/section-6/Ellipse 12.svg'
// import Icon1 from "material-ui/icons"
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// import { SvgIcon } from "@material-ui/core";

const useStyels=makeStyles((theme)=>({
    
    Main:{
      paddingTop:50,
      paddingBottom:50
    },
    head_content:{
        fontWeight:'bold',
        textAlign:'center',
        lineHeight:'1.5',
        marginBottom:30,
    },
    head_subcontent:{
        textAlign:'center',
        lineHeight:'1.4',
        color:theme.palette.primary.light,
        marginBottom:70,
    },
    list_boxes:{
       width:300,
       height:50,
       background: '#F4F4F4',
       marginBottom:70,
       borderRadius:5,
       display:'flex',
       padding:10,
       paddingTop:10,
       alignItems:'center',
       justifyContent:'space-between',
       [theme.breakpoints.down('sm')]:{
             width:161,
             
       }
       
       
    },
    taghead:{
        fontWeight:'bold',
        paddingTop:10,
        [theme.breakpoints.down('sm')]:{
          fontSize:12
            
      }
    },
    images:{
        width:35,
        height:35,
        [theme.breakpoints.down('sm')]:{
           width:25,
           height:25
              
        },
    },
        breaks:{
           
            [theme.breakpoints.down('sm')]:{
                display:'none',
             },
        }
    
}))


const list=[

  {
      headinginfo:{
           image:GlassMen1,
           content:'Cryptopunks',
        //    icon:ChevronRightIcon

      },
     
  },
  {
    headinginfo:{
         image:GlassMen2,
         content:'Bored Ape Yacht Club',

    },
   
}, {
    headinginfo:{
         image:GlassMen3,
         content:'Decentraland',

    },
   
}, {
    headinginfo:{
         image:GlassMen4,
         content:'Cool Cats NFT',

    },
   
},
{
    headinginfo:{
         image:GlassMen5,
         content:'Mutant Ape Yacht Club',

    },
   
},{
    headinginfo:{
         image:GlassMen6,
         content:'Rarible',

    },
   
},{
    headinginfo:{
         image:GlassMen7,
         content:'Parallel alpha',

    },
   
},{
    headinginfo:{
         image:GlassMen8,
         content:'The Sandbox',

    },
   
},{
    headinginfo:{
         image:GlassMen9,
         content:'Clone X',

    },
   
},{
    headinginfo:{
         image:GlassMen10,
         content:'Ape Kids Club',

    },
   
},{
    headinginfo:{
         image:GlassMen11,
         content:'PUNKS Comics',

    },
   
},{
    headinginfo:{
         image:GlassMen12,
         content:'Crypto Bull Society',

    },
   
},

];
   

const Categories_list=()=>{
   const classes=useStyels();
    const [state,setState]=React.useState({
        Heading:' Support Both ERC721, ERC1155 NFTs from top ',
        subheading:'EVM blockchains and from non EVM blockchains',
        head:'Millions of people around the globe successfully used Flowa',
        subhead:'and they have had a lot of nice things to say about us'
    });

    return (
         <>
          <Container className={classes.Main}>
              <h1 className={classes.head_content}>{state.Heading} <br /> {state.subheading}</h1>
              <p className={classes.head_subcontent}>
                  {state.head} <br className={classes.breaks} />{state.subhead}
              </p>
              <Box sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}} component="div">
                  {list.map((item)=>{
                      return(
                       <div className={classes.list_boxes}>
                  <img  className={classes.images}  src={item.headinginfo.image} ></img>
                  <h6 className={classes.taghead}>{item.headinginfo.content}</h6>
                  {/* <SvgIcon component={item.icon} className="whateverclassyouwant"/>  */}
                  </div>
                  )
                })}
                </Box>
              
          </Container>
         
         </>
    )
}
export default Categories_list;