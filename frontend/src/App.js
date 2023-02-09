import React, { useState } from 'react';
import './App.css';
import NavBarTop from './Navbar/NavBarTop.js';

import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Navbar from './Navbar';




function App() {
  const [showTerminal, setShowTerminal] = useState(false);
  
 
  return (
    <div className="App">
      <div className ="top">
       {/* <NavBarTop/>*/}
          
            <Router>
              <Navbar/>
            <Routes>

              
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/sign-up' element={<SignUp/>} />
            </Routes>
            </Router>




            </div>
    </div>
    
  );
}

export default App;
