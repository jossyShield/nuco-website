import BlogNews from "./Section/BlogNews";
import MainContact from "./Section/Main/MainContact";
import MainHome from "./Section/Main/MainHome";

const Main = () => {
  let url = window.location.pathname;
  let main
  switch (url) {
    case '':
    case "/index":
      main = <MainHome />;
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
