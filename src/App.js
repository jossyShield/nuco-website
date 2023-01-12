/* import Menu from './components/Menu'
import Main from './components/Main'
import Main_Test from './components/Main_Test'
import Footer from './components/Footer' */
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

function App() {
  
  return (
    <div class="kingster-body-outer-wrapper ">
        <div class="kingster-body-wrapper clearfix  kingster-with-transparent-header kingster-with-frame">
        
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="index" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<BlogDetails />} />
            </Routes>
          </BrowserRouter>

          
        </div>
    </div>
  );
}

export default App;
