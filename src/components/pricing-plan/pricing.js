import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Container, ListItemSecondaryAction} from '@mui/material';
import Typography from '@mui/material/Typography';





  function Listinfo(props){
    return <li> {props}</li>;
  }


 const PricingContent=()=>{

  let card=[
     {
       HeaderContent:{  
         title:"Team" ,
         subtitle:"most",
         price:"100$",
         month:12                
       },
       information:[
         "user account",
         "user account",
         "user account",
         "user account",
         "user acc",
       ]
    },
    {
      HeaderContent:{  
        title:"Team2" ,
        subtitle:"most",
        price:"100$",
        month:12                
      },
      information:[
        "user account",
        "user account",
        "user account",
        "user account",
        "user account",
      ]
   }
  ];


  return(
   <Container>
   <h1>NithishKumar</h1>
   {card.map((item,index)=>{
     return(
       <>
           <h1>{item.HeaderContent.title}</h1>
           <ul>
           <Listinfo key={index}> {item.information }</Listinfo>
           </ul>
           {/* <ul>
             <li>{item.information.findIndex(1)}</li>
           </ul> */}
           <button>hdg</button>
           </>
     )
   })}
   </Container>
 

  )


}
export default PricingContent