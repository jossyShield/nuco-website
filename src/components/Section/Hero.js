
import HeroContact from "./Hero/HeroContact";
import HeroIndex from "./Hero/HeroIndex";
import HeroMini from "./Hero/HeroMini";

const Rollover = () => {
  /* const bgImg = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImage})`,
  }; */

  let url = window.location.pathname;
  let rollover,description;

  switch (url) {
    case "":
    case "/index":
      rollover = <HeroIndex />;
      break;
      case "/about":
        description = "At Nuco Schools, we help your child develop high self-esteem by"
        + "providing self-help skills in a safe and nurturing environment"
        + "that will foster love of learning and intelligence while relating"
        + "with other individuals."

      rollover = <HeroMini title='About Us' description={description} />
      
      break;
      case "/calendar":
      rollover = <HeroMini title='Calendar' description='Our Calendar' />
      break;
      case "/admissions":
      rollover = <HeroMini title='Admissions' description='Our admissions' />;
      break;
      case "/school-life":
      rollover = <HeroMini title='School Life' description='Our school Life' />;
      break;
      case "/facilities":
      rollover = <HeroMini title='Our Facilities' description='Our facilities' />;
      break;
      case "/calendar":
      rollover = <HeroMini title='Calendar' description='Our calendar' />;
      break;
    case "/contact":
      rollover = <HeroMini title='Our Contact' description='You can contact us here' />
      break;
  }

  return (
    <>
    {rollover}
    </>
    
  );
};

export default Rollover;
