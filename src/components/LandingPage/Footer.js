import "./Footer.css"

function Footer() {
    return (
        <>
            <main>
                <section className="footer-parent">
                    <section className="footer-parent2">
                        <div className="webinar-parent">
                            <div className="main-webinar">
                                What are you waiting for?
                                <a href="./">Get Started</a>
                            </div>
                        </div>
                        <div>
                            <p id="let-start" href="//#region ">
                                Get yourself a ride to any destination
                            </p>
                        </div>

                        <div className="container1">
                            <div className="account-container">
                                <h3>Your Account</h3>
                                <p>Sign up</p>
                                <p>Log in</p>
                            </div>
                            <div className="account-container">
                                <h3>Organise</h3>
                                <p>Overview</p>
                                <p>Pricing</p>
                                <p>Blog</p>
                            </div>
                            <div className='account-container'>
                                <h3>Services</h3>
                                <p>How it works</p>
                                <p>What does it cost to create an account?</p>
                                <p>How to contact us</p>
                            </div>
                        </div>
                        <div>
                            <h4>Follow Us</h4>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/">
                                <span>
                                    <i className="fab fa-facebook"></i>
                                </span>
                            </a>
                            <a href="https://twitter.com/home">
                                <span>
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                            <a href="https://www.youtube.com/">
                                <span>
                                    <i className="fab fa-youtube"></i>
                                </span>
                            </a>
                            <a  href="https://www.instagram.com/?hl=en">
                                <span>
                                    <i className="fab fa-instagram-square"></i>
                                </span>
                            </a>
                        </div>
                        <div className="privacy-page">
                            <li>Copyright © RMW, 2021 All rights reserved </li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Footer
