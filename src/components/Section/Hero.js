
import HeroAbout from "./Hero/HeroAbout";
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
        description = "NUCO is the home for academic excellence."
        + "With thousands of students of different age brackets who have passed through"
        + "our educational system, NUCO remains the go-to for parents who are concerned "
        + "about the educational quality of their ward(s). We utilize both the Nierian & Int'l curriculum."

      rollover = <HeroAbout title='About NUCO School' description={description} />
      
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
