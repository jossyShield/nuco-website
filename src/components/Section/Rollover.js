import bgImage from "../../assets/img/hero/schoolsp2.avif";

const Rollover = () => {
  const bgImg = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <section class="rollover" style={bgImg}>
      <div className="flex-container">
        <div className="flex-item">
          <div className="rollover-content-1">
            <h1>At NUCO Schools</h1>
            <div className="middle" id="middle">
              <h1>We deliver quality</h1>
              <h1>We build capacity</h1>
              <h1>We empower</h1>
            </div>
            <div className="bottom">
              <button>Pre-School</button>
              <button>Primary School</button>
              <button>High School</button>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="rollover-content-2">
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
  );
};

export default Rollover;
