import React from 'react'
import NavigationBar from './NavigationBar'
import Banner1 from "./Banner1"
import Footer from './Footer'
import HowItWorks from "./HowItWorks"
import CarListing from './CarListing'

  const LandingPage = () => {
     return (
         <div>
              <NavigationBar/>
              <Banner1/>
              <HowItWorks />
              <CarListing/>
              <Footer/>
         </div>
    )
 }
 export default LandingPage;