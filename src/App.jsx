import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import About from './aboutpage';
import Servicespage from './servicespage';
import Careerspage from './careerspage';
import Dashbord from './dashbord';
import Blog from './blog';
import ContactUs from './contactus';
import Servicespage2 from './servicepage2';
import Servicespage3 from './servicepage3';
import Servicespage4 from './servicepage4';
import Blogcontent1 from './blogcontent1';
import Blogcontent2 from './bogcontent2';
import Blogcontent3 from './blogcontent3';
import Blogcontent4 from './blogcontent4';
import Blogcontent5 from './blogcontent5';
import Blogcontent6 from './blogcontent6';
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop component
import Privacypolicy from './privacypolicy';
import Leagalnotice from './Leagalnotice';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        
        <Route path="/hastle/" element={<About />} />
       
      </Routes>
    </Router>
  );
}

export default App;
