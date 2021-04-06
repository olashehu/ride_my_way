import React from 'react'
import BannerImg from "../../assest/jonas-zurcher-yhxanIx21aQ-unsplash.jpg"
const HowItWorks = () => {
    return (
        <div>
            <div className="how-it-works-header">
            <h1 className="card-guide">How it works?</h1>
            <div className="underline"></div>
            <p className="card-guide">Easy steps to get you started</p>
            </div>
            <section className="how-it-works-container">
            <div className="first-child">
            <span style={{color:"#0090FF", fontWeight:"bold", marginBottom:"1.5rem"}}>01.</span>
            <h2 className="card-guide" style={{marginBottom:'2.2rem'}}>Sign up</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="second-child">
            <span style={{color:"#0090FF", fontWeight:"bold", marginBottom:"1.5rem"}}>02.</span>
            <h2 className="card-guide" style={{marginBottom:'2.2rem'}}>Select a car</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="third-child">
            <span style={{color:"#0090FF", fontWeight:"bold", marginBottom:"1.5rem"}}>03.</span>
            <h2 className="card-guide" style={{marginBottom:'2.2rem'}}>Make a request</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            <div className="fourth-child">
            <span style={{color:"#0090FF", fontWeight:"bold", marginBottom:"1.5rem"}}>04.</span>
            <h2 className="card-guide" style={{marginBottom:'2.2rem'}}>Make a payment</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
            </div>
            </section>
            <div style={{ marginTop:"4rem"}} className="img-container">
            <img src={BannerImg} alt="Logo" width= "100%" style={{justifyItems:'center'}} className="heading-primary-main" />
            </div>
        </div>
    )
}

export default HowItWorks;
