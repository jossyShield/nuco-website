import Menu from './components/Menu'
import Main from './components/Main'
import Main_Test from './components/Main_Test'
import Footer from './components/Footer'

function App() {
  
  return (
    <div class="kingster-body-outer-wrapper ">
        <div class="kingster-body-wrapper clearfix  kingster-with-transparent-header kingster-with-frame">
          {/* Menu Section */}
          <Menu />

          {/* Main Section */}
          <Main />
          {/* <Main_Test /> */}

          {/* Footer Section */}
          <Footer />
        </div>
    </div>
  );
}

export default App;
