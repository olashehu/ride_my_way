
import howitWorksData from '../../../staticData/landingPage/howItWorks';
import './HowItWorks.css'

const HowItWorks = () => (
  <div>
    <div className="how-it-works-header">
      <h1 className="how-it-works__header__header">How it works?</h1>
      <div className="underline" />
      <p className="how-it-works-para">Easy steps to get you started</p>
    </div>
    <section className="how-it-works-container">
      {howitWorksData.map((data, index) => {
        return (
          <div className="how-it-works-card__box" key={index}>
            <span>{data.id}</span>
            <h2 className="card-guide">{data.title}</h2>
            <p>{data.body}</p>
          </div>
        )
      })}
    </section>
  </div>
);
export default HowItWorks;
