import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/MyProfile';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './pages/Footer';
import Player from './pages/Player';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  // Kiểm tra xem đường dẫn hiện tại có phải là "/login" hay không
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`mx-auto ${isLoginPage ? 'min-h-screen flex' : ''}`}>
      {/* Chỉ hiển thị Navbar nếu không phải là trang login */}
      {!isLoginPage && (
        <div className='bg-white'>
          <Navbar />
        </div>
      )}
      <div className={`${isLoginPage ? 'flex-1 flex justify-center items-center' : 'mx-auto'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<Game />} />
          <Route path='/game/:Category' element={<Game />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path='/player/:playerId' element={<Player />} />
        </Routes>
      </div>
      {/* Footer sẽ chỉ hiển thị nếu không phải là trang login */}
      {!isLoginPage && (
        <div className='bg-purple-600'>
          <Footer />
        </div>
      )}
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default App;
