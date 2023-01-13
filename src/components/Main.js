import MainAbout from "./Section/Main/MainAbout";
import MainAdmissions from "./Section/Main/MainAdmissions";
import MainCalendar from "./Section/Main/MainCalendar";
import BlogNews from "./Section/BlogNews";
import MainContact from "./Section/Main/MainContact";
import MainFacilities from "./Section/Main/MainFacilities";
import MainHome from "./Section/Main/MainHome";
import MainSchoolLife from "./Section/Main/MainSchoolLife";

const Main = () => {
  let url = window.location.pathname;
  let main;
  switch (url) {
    case "":
      main = <MainCalendar />
      break;
    case "/index":
      main = <MainHome />;
      break;
      case "/about":
      main = <MainAbout />
      break;
    case "/admissions":
      main = <MainAdmissions />;
      break;
    case "/school-life":
      main = <MainSchoolLife />;
      break;
    case "/facilities":
      main = <MainFacilities />;
      break;
    case "/calendar":
      main = <MainCalendar />;
      break;
    case "/contact":
      main = <MainContact />;
      break;
    case "/blog":
      main = <BlogNews />
  }

  return (
    <div class="container">
      {/* url == '/index'? <MainHome /> : <MainContact /> */}
      {main}
    </div>
  );
};

export default Main;
