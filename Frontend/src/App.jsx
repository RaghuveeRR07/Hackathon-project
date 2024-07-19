import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Navbar from './components/Navbar2.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <Router>
      
      <div>
        <Navbar />
        {/* <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>

// import Categories from './categories';

// const App = () => {
//   return (
    
//     // <Router>
//     //   <div>
//     //     <Routes>
//     //       <Route path="/" element={<Login />} />
//     //       <Route path="/register" element={<Register />} />
//     //       {/* <Route path="/categories" element={<Categories />}/> */}
//     //     </Routes>
//     //   </div>
//     // </Router>
//     <div>
//       <button className='categories'>
//           <Categories />
//           </button>

//     </div>
  );
};

export default App;
