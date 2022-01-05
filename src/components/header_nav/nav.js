import React from 'react'
import Button from '@mui/material/Button';


const HeaderComponent = () => {
    return (
        <div style={{display:"flex", flex:1, margin:"1.5rem",alignItems:"center"}}>
            <div style={{flex:0.3, paddingLeft:"9rem",paddingTop:"5px"}}>
                <h4 style={{fontWeight:"700",color:"#19233C"}}>NFT PASSPORT</h4>
            </div>
            <div style={{flex:0.5, justifyContent:"space-between",alignItems:"center", textDecoration:"none"}}>
                <a style={{textDecoration:"none",paddingLeft:"4rem", color:"#6D6D6D"}} href='Home'>Home</a>
                <a style={{textDecoration:"none",paddingLeft:"2rem", color:"#6D6D6D"}} href='Home'>Services</a>
                <a style={{textDecoration:"none",paddingLeft:"2rem", color:"#6D6D6D"}} href='Home'>Project</a>
                <a style={{textDecoration:"none",paddingLeft:"2rem", color:"#6D6D6D"}} href='Home'>Review</a>
            </div>
            <div style={{flex:0.3}}>
                 <a style={{textDecoration:"none",paddingRight:"2rem", color:"#6D6D6D"}} href='Home'>Log in</a>
                 <Button style={{backgroundColor:"#7073BE",borderRadius:"20px 0px 20px 20px"}} variant="contained">Sign Up</Button>
            </div>
        </div>
    )
}

export default HeaderComponent;