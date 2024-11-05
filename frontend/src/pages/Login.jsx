import React, { useState } from 'react'
import t7m_login from '../assets/logint7m.jpg'
import bgr_logins2 from '../assets/bgr.png'
import { FaRegUser } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {

    const testLogin = [{ email: 'testmod@gmail.com', password: '123456789' }]
  
    // Kiểm tra xem email và password có được nhập hay không
    if (!email || !password) {
      toast.warn('Vui lòng nhập tài khoản và mật khẩu.');
      return;
    }
  
  
    // Tìm kiếm người dùng trong danh sách
    const test = testLogin.find(test => test.email === email);
  
    if (!test) {
      toast.error('Tài khoản không tồn tại.');
      return;
    }
  
    // Kiểm tra mật khẩu
    if (test.password === password) {
      toast.success("Đăng nhập thành công");
      localStorage.setItem('isLogin', 'true')
      navigate('/');
    } else {
      toast.error('Mật khẩu không đúng.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center w-full' >
      <div className='w-[60%] h-[80vh] flex shadow-2xl border'>
        <div className='w-[50%] border' style={{backgroundImage: `url(${t7m_login})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
        <div className='flex-1'>
          <div className='flex flex-col h-full items-center justify-center relative' style={{backgroundImage: `url(${bgr_logins2})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
           <div className=' absolute top-0  backdrop-blur-sm bg-opacity-20 w-full h-full bg-gray-800 flex flex-col justify-center items-center'>
            <h1  className='mt-10 text-2xl font-bold '>ĐĂNG NHẬP</h1>
            <div className='w-[80%] mt-16 relative'>
              <input type='email' placeholder='Tài khoản...' className='w-full border mt-2  rounded-full px-3 pl-10 py-2 outline-none' value={email} onChange={(e) => setEmail(e.target.value)}/>
              < FaRegUser  className='absolute left-3 top-[40%] text-lg'/>
            </div>
            <div className='w-[80%] mt-3 relative'>
              <input type='password' placeholder='Mật khẩu...' className='w-full border mt-2  rounded-full px-3 pl-10 py-2 outline-none' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <CiLock  className='absolute left-3 top-[40%]  text-xl text-black'/>
            </div>
            <div className='flex w-[80%] mt-3'>
              <div className='ml-auto'>
                <p className='text-sm text-white cursor-pointer'>Quên mật khẩu?</p>
              </div>
            </div>
            <button onClick={handleLogin} className='w-[80%] bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg border mt-10 py-2.5 rounded-full text-white font-semibold '>Đăng nhập</button>
            <p className='font-semibold mt-20 text-white  text-sm'>Bạn chưa có tài khoản?</p>
            <p className='font-semibold text-white hover:text-blue-600 cursor-pointer'>ĐĂNG KÍ</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login