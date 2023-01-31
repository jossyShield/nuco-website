import bgImage from "../../../assets/img/hero/schoolsp2.avif";

const HeroAbout = (props) => {

    const bgImg = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bgImage})`,
      };

  return (
    <section class="rollover" style={bgImg}>
      <div className="flex-container">
        <div className="flex-item ">
          <div className="rollover-content-1 hero-about">
            <h1>{props.title}</h1>
            
          </div>
        </div>
        <div className="flex-item">
          <div className="rollover-content-2 hero-about">
            {/* <div className="hero-about">
                {props.description}
            </div> */}
            <p>
            {props.description}
            </p>
              
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroAbout
