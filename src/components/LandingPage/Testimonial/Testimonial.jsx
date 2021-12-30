
import './Testimonial.css'

const Testimonials = () => {
    return (
      <div className="testimonial_container">
        <div className="testimonial-header-container">
          <h1 className="testimonial-header-page">Testimonials</h1>
          <p className="testimonial-para">lorem ipsum dolor</p>
        </div>
        <div className="testimonial__flex-container">
          <div className="testimonial-flex-content">
            <div className="testimonial-flex-content__2">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <div></div>
              <p className="testimonial__para2">
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non
              </p>
              <img src="/avatar.png" alt="" className="testimonial-image" />
              <h2>Daina Rose</h2>
              <h4>- Co-Founder</h4>
              <h4>Team-Phixit</h4>
            </div>
          </div>

          <div className="testimonial-flex-content">
            <div className="testimonial-flex-content__2">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <div></div>
              <p className="testimonial__para2">
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non
              </p>
              <img src="/avatar.png" alt="" className="testimonial-image" />
              <h2>Michael javascripto</h2>
              <h4>- Co-Founder</h4>
              <h4>Team-Phixit</h4>
            </div>
          </div>

          <div className="testimonial-flex-content">
            <div className="testimonial-flex-content__2">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
              <div></div>
              <p className="testimonial__para2">
                enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non
              </p>
              <img src="/avatar.png" alt="" className="testimonial-image" />
              <h2>Jenifar Lopez</h2>
              <h4>- CEO</h4>
              <h4>Brand-Stylist</h4>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Testimonials
