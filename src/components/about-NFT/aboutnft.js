import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import './aboutnft.css'
import {Container,Card,ListGroup} from 'react-bootstrap';
import { useMediaQuery } from 'beautiful-react-hooks';

const About_Nft=()=>{
    const isTablet=useMediaQuery('(max-width:780px)');
    console.log(isTablet,"istab")
    return(
        <Container style={{padding:"50px 20px",marginBottom:"20px"}}>
        <div className="row cards_row">
  <div className="col-lg-6 col-md-6" >
  <div className="Violwt_box" ><p><span className="d-block pb-3"><img src="assets/images/quotation.svg"/></span>Well-explained presentation for a rooftop solar project very impressive.<br></br><strong className="">Craig Hunter, CEO</strong>
</p><img src='assets/images/violetHat.svg' width={70} height={100} /></div>
  <Card className="cards" style={{ width: '30rem',paddingTop:"20px" }}>
  <ListGroup variant="flush" className='cards-items'>
    <ListGroup.Item style={{display: isTablet ? "none" : "flex"}}><p>I did a significant amount of research on the top 10 solar companies.<br></br><strong>Mike Hardson, Director</strong></p><img src='assets/images/blackhat.svg'/> </ListGroup.Item>
    <ListGroup.Item><p></p></ListGroup.Item>
    
    <ListGroup.Item style={{display:"flex"}}><p>This was, far and away, the most thorough well-thought-out.<br></br><strong>Sara Doe, Chairman</strong></p><img src='assets/images/whiteHat.svg'/></ListGroup.Item>
  </ListGroup>
</Card>
  </div>
  <div className="col-lg-6 col-md-6 pt-5 people-About" style={{paddingLeft:"60px"}}>
      <h1>What peopel says about <br/> NFT Passport </h1>
      <p>Capital created quality local jobs, and brought more <br/>reliable local clean energy to our energy system.</p>
      <button type="button" className="btn_style" >Read more</button>
  </div>
  </div>
        </Container>
    )
}
export default About_Nft;