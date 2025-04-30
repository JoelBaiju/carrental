// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Listing from './pages/Listing';
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Checkout from './pages/Checkout';
// // import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact'


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cars/:category" element={<Listing />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/checkout" element={<Checkout />} />
//         {/* <Route path="/about" element={<About />} /> */}
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* <Route path="/contact" element={<Contact />} /> */}



//       </Routes>
//     </Router>
//   );
// }


// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Listing from './pages/Listing';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import About from './components/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:category" element={<Listing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
