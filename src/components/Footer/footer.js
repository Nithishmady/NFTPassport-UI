import React from 'react'
import '../Footer/footer.css'
import 'bootstrap/dist/css/bootstrap.css'; 

const Footer=()=> {
  return (
    <section className="footer " style={{backgroundColor:"rgba(25, 35, 60, 1)",height:"fit-content"}}>
    <div className=" container mt-5 container_footer " >
        <div className="footer-collection ">
            {/* <!-- style="display: flex;justify-content: space-between; " --> */}
            <div className="row">
                <div className="col-xl col-lg col-md-4 col-sm-12">
                    <div className="footer-links col-xl col-xl ">
                        <div className="row">
                            <div className="col-xl-7 col-lg-8 col-md-3 col-sm-3 col-5 ml-2 mx-md-0" style={{paddingLeft:0}}>
                                <ul>
                                    <li>
                                        <a className="navbar-brand " href="# "/>
                                        <img  src="assets/images/section-13/NFT Passport..svg" />
                                        {/* <Image src="/assets/images/logo.svg" className="Change_logo" alt="logo" /> */}
                                    </li>
                                    <li>
                                        <a href="#" style={{color:"rgb(148, 143, 143)"}}>Yourproject@paywall.oi</a>
                                    </li>
                                    
                                    <div className="logo d-flex mt-4 mb-5 ">
                                        <img src="assets/images/section-13/Telegram (1).svg"/>
                                        <img src="assets/images/section-13/Discord.svg " alt=" " className="pl-5 " style={{paddingLeft:"20px"}}/>
                                        <img src="assets/images/section-13/Vector (5).svg " alt=" " className="pl-5 "style={{paddingLeft:"20px"}}/>
                                        <img src="assets/images/section-13/Github.svg " alt=" " className="pl-5 "style={{paddingLeft:"20px"}}/>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-3 col-6 mx-auto">
                    <div className="footer-links Whysellwall col-xl col-xl ">

                        <h4>WHY NFT Passport?</h4>
                        <ul style={{paddingLeft:"0px"}}>
                            <li><a href="# ">Paywall Finance</a></li>
                            <li><a href="# ">Channels</a></li>
                            <li><a href="# ">Engagement</a></li>
                            <li><a href="# ">Scale</a></li>
                            <li><a href="# " className="mb- ">Watch The Demo</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-3 col-sm-12 col-6">
                    <div className="footer-links Products ">
                        <h4>PRODUCTS</h4>
                        <ul style={{paddingLeft:"0px"}}>
                            <li><a href="# ">Features</a></li>
                            <li><a href="# ">Integrations</a></li>
                            <li><a href="# ">Enterprice</a></li>
                            <li><a href="# " className="mb-3 ">Solutions</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-2 col-sm-12 col-6">
                    <div className="footer-links Pricing ">
                        <h4>PRICING</h4>
                        <ul style={{paddingLeft:"0px"}}>
                            <li><a href="# ">Plans</a></li>
                            <li><a href="# " className="mb-3 ">Paid Vs Free</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl col-lg col-md-6 col-sm-12 col-6 mx-auto" >
                    <div className="footer-links Resources ">

                        <ul style={{paddingLeft:"0px"}} >
                            <h4>RESOURCES</h4>
                            <li><a href="# ">Partners</a></li>
                            <li>
                                <a href="# ">Developers</a>
                            </li>
                            <li><a href="# ">Apps</a></li>
                            <li>
                                <a href="# ">Blog</a>
                            </li>
                            <li><a href="# ">Help center</a></li>
                           
                            
                </ul>
            </div>
                </div>
                <div className="col-xl col-lg col-md-6 col-sm-12">
            <div className="footer-links Company ">
                
                <ul style={{paddingLeft:"0px"}}>
                    <h4 className="mb-4 ">COMPANY</h4>
                    <li><a href="# ">About Us</a></li>
                            <li>
                                <a href="# ">Leadership</a>
                            </li>
                            <li><a href="# ">Apps</a></li>
                            <li>
                                <a href="# ">News</a>
                            </li>
                            <li>
                                <a href="# ">Media Kit</a>
                            </li>
                           
                            <li style={{color:"white"}}>
                                <a href="# "/>Careers</li>
                </ul>
            </div> 
                </div>
            </div>
       
        </div>
        <div className="newline ">
            <div className="footers row " style={{ marginTop:"20px",paddingLeft:"20px"}}>
                <div className="TermsandCondition col-12 " style={{width:"75%",display:"flex"}}>
                    <h6 className="b1">Status</h6>
                    <h6 className="b2">Privacy</h6>
                    <h6 className="b3">Terms</h6>
                    <h6 className="b4">Cookie</h6>
                    <h6 className="b5">Preference</h6>
                    <h6 className="b6">Contact Us </h6>
                    <h6 className="b7"> Change Region</h6>
                </div>
                <div className="findus col-12 "style={{width:"25%"}}> 
                    <h6 className="d-inline ">Find Us On</h6>
                    <img src="assets/images/section-13/Telegram.svg " alt=" " className="pl-3" style={{paddingLeft:"15px"}}/>
                    <img src="assets/images/section-13/Discord.svg " alt=" " className="pl-3 " style={{paddingLeft:"15px"}}/>
                    <img src="assets/images/section-13/Twitter.svg " alt=" " className="pl-3 " style={{paddingLeft:"15px"}}/>
                    <img src="assets/images/section-13/Github.svg " alt=" " className="pl-3 "  style={{paddingLeft:"15px"}}/>
                
                </div>
                </div>
                </div>
            </div>
</section>

  );
}

export default Footer;
