import bgImage from "../../../assets/img/hero/schoolsp2.avif";

const HeroContact = () => {
    const bgImg = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bgImage})`,
      };

  return (
    <section class="rollover" style={bgImg}>
      <div className="flex-container">
        <div className="flex-item">
          <div className="rollover-content-1 hero-mini">
            <h1>Contact Us</h1>
            
          </div>
        </div>
        <div className="flex-item">
          <div className="rollover-content-2 hero-mini">
            <p>
            At Nuco Schools, we help your child develop high self-esteem by
              providing self-help skills in a safe and nurturing environment
              that will foster love of learning and intelligence while relating
              with other individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroContact
