//import bgImage from '../../../public/assets/img/call_action/school_call2.jpg';

import bgImage from "../../assets/img/call_action/school_call2.jpg";

const CallToAction = () => {

  const bgImg = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div class="call-to-action" style={bgImg}>
      <div className="flex-container">
        <div className="flex-item">
          <h4>Begin your learning &amp; professional development today</h4>
          <p>
            Explore our rich curriculum of amazing courses to help your
            educational growth. Your kids are exposed to the required resources
            to equip them with the skills to face the future.
          </p>
          <div className="container btn">
            <div className="button">Pre-school Form</div>
            <div className="button">Primary School Form</div>
            <div className="button">High School Form</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
