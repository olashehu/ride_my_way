// import img1 from "../../assest/rasheed.jpg"
// import img2 from "../../assest/Shukurah.jpg"
// import img3 from "../../assest/paul.jpg"

const Testimonials = () => {
    return (
        <div>
            <div className="how-it-works-header">
            <h1 className="card-guide">Testimonials</h1>
            <div className="underline"></div>
            <p className="card-guide">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <section className="how-it-works-container">
            <div className="first-child" style={{position:"relative",borderBottom:"4px solid #007BFF"}}>
            {/* <span style={{color:"#0090FF", fontWeight:"bold", marginBottom:"1.5rem"}}>01.</span> */}
            <p>RMW is cool ride application. I love the user interface made with several functionalities. Great app!</p>
            <div className="img-section-name">
            <img src='./olashehu.jpg' alt="" className="card-guide avartar" width="60px" />
            <div style = {{marginLeft: 10}}>
                <p style={{marginBottom:"4px"}}>Rasheed</p>
                <span>Frontend React Developer</span>
            </div>
            </div>
            </div>
            <div className="second-child" style={{position:"relative",borderBottom:"4px solid #007BFF"}}>
            {/* <span style={{color:"#0090FF", fontWeight:"bold", marginBottom:"1.5rem"}}>01.</span> */}
            <p>No doubt!. The web application of RMW is a great solution to myself and a lot of people out there.</p>
            <div className="img-section-name">
            <img src='./olashehu.jpg' alt="" className="card-guide avartar" width="60px" />
            <div style = {{marginLeft: 10}}>
                <p style={{marginBottom:"4px"}}>Shukurah</p>
                <span>Full Stack Developer</span>
            </div>
            </div>
            </div>
            <div className="fourth-child" style={{position:"relative",borderBottom:"4px solid #007BFF", marginBottom:"2rem"}}>
            {/* <span style={{color:"#0090FF", fontWeight:"bold", marginBottom:"1.5rem"}}>01.</span> */}
            <p>The exprience I had using this application is great.Responsiveness, web-accessibility, scalablity is top-notch. Kudos to the creator</p>
            <div className="img-section-name">
            <img src='./olashehu.jpg' alt="" className="card-guide avartar" width="60px" />
            <div style = {{marginLeft: 10}}>
                <p style={{marginBottom:"4px"}}>Paul</p>
                <span>MERN Stack Developer</span>
            </div>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Testimonials
