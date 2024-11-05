import React, { useEffect, useState } from 'react'
import logo from '../assets/logo_t7m.png'
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import coin from '../assets/coinlita.png'
import mobile from '../assets/dowload.png'
import qr from '../assets/qr lita.png'
import apple from '../assets/apple.png'
import apps from '../assets/apps.png'
import { gameData } from '../assets/assets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import avt from '../assets/avt.jpg'
import copy from '../assets/copy.png'
import { FaAngleRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";





const Navbar = () => {
    
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false);


    useEffect(() => {
        const tokenLogin = localStorage.getItem('isLogin') === 'true';
        setIsLogin(tokenLogin);
      }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        setIsLogin(false);
        navigate('/login');
      };
    

    // const services = [
    //     { id: 1, name: "Liên quân mobile", image: aov },
    //     { id: 2, name: "Đấu trường chân lý", image: dtcl },
    //     { id: 3, name: "Liên minh huyền thoại", image: lmht },
    //     { id: 4, name: "PUBG Mobile", image: pubg },
    //     { id: 5, name: "Free Fire", image: ff },
    //     { id: 6, name: "Liên minh: Tốc chiến", image: tocchien },
    //     { id: 7, name: "Play Together", image: together },
    //     { id: 8, name: "Mobile Lengend Bang Bang", image: mblg },
    //     { id: 9, name: "Au Mobile", image: au_mobile},
    //     { id: 10, name: "ARK: Survival Evolved", image: ark },
    //     { id: 11, name: "Valorant", image: valorant },
    //     { id: 12, name: "COD: Mobile", image: cod },
    // ];

  return (
    <nav className='bg-white py-4 px-3 shadow-md'>
        <div className='flex justify-between items-center '>
            <div className='flex items-center gap-6'>
                <NavLink to = '/' className='flex flex-col justify-center items-center'>
                    <img src={logo} alt='' className='w-16'/>
                    <h1 className='text-2xl font-semibold text-black text-shadow-cyan'>Tho7Mau</h1>
                </NavLink>
                <ul className=' flex text-[17px] font-semibold cursor-pointer ml-3'> 
                    <NavLink to ='/' className={({ isActive }) => `transition-colors duration-500 inline-block px-3 py-1 ${ isActive ? 'text-purple-600 font-bold' : 'text-black'}`}>
                        <li >Trang chủ</li>
                    </NavLink>
                    <div className='relative group flex items-center transition-colors duration-500 px-3 py-1 cursor-pointer'>
                        <li className='flex items-center gap-1 group-hover:text-purple-600 group-hover:font-bold'>
                            Tất cả dịch vụ 
                            <FaChevronDown className='transition-transform duration-500 inline-block group-hover:rotate-180'/>
                        </li>
                        <div className="absolute border min-w-[150vh] max-w-max h-auto left-0 top-[150%] p-3 bg-white rounded shadow-lg z-50 opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
                            <div className="grid grid-cols-4 gap-6">
                                {gameData.map((item) => (
                                    <Link to={`/game/${item.Category}`} key={item.id} className="flex flex-col items-center">
                                        <div className='w-full h-fit relative shadow-md'>
                                            <img src={item.image} alt='' className='w-14 h-[70px] relative rounded-lg z-10'/>
                                            <button className='border flex flex-wrap items-center justify-center text-black text-sm font-semibold py-4 w-[80%] bg-white rounded-md absolute top-[10px] left-[51px] z-1 shadow-md transition-all ease-in-out duration-300 hover:bg-blue-600 hover:text-white'>
                                                {item.nameGame}
                                            </button>
                                        </div>
                                    </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <NavLink to ='/about' className={({ isActive }) => `transition-colors duration-500 inline-block px-3 py-1 ${ isActive ? 'text-purple-600 font-bold' : 'text-black'}`}><li >Về chúng tôi</li></NavLink>
                    <NavLink to= '/contact' className={({ isActive }) => `transition-colors duration-500 inline-block px-3 py-1 ${ isActive ? 'text-purple-600 font-bold' : 'text-black'}`}><li >Liên hệ</li></NavLink>
                </ul>
                
            </div>  
            <div className='flex items-center justify-center gap-6'>
                
                <div className=' sm:block group hidden relative'>
                    <input type="text" placeholder="Tìm kiếm ở đây..." className='border-2 outline-none placeholder:text-sm px-5 py-2 rounded-full transition-all duration-300 w-0 group-hover:w-[400px] relative' />
                    <IoIosSearch  className='absolute text-2xl top-[10px] right-[10px] bg-white'/>
                    
                </div>
                <div className='relative group z-10'>
                    <img src={mobile}  alt='' className='w-8 relative cursor-pointer'/>
                    <div className='absolute top-14 -right-9 hidden group-hover:block w-28 bg-white shadow-md border rounded-lg px-2 py-3'>
                        <img src={qr} alt ='' className=' w-20 mx-auto'/>
                        <div className='flex flex-col mt-2 gap-2'>
                            <div className='flex items-center justify-center gap-1'>
                                <img src={apple} alt='' className='w-2'/>
                                <p className='text-[9px] font-semibold'>Apple Store</p>
                            </div>
                            <div className='flex items-center justify-center gap-1'>
                                <img src={apps} alt='' className='w-2'/>
                                <p className='text-[9px] font-semibold'>Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='flex items-center gap-1 bg-white px-2.5 rounded-md py-1.5 border-2  font-bold  text-black group'>
                    <img src={coin} alt='' className='w-6 transition-transform ease-in-out duration-300 group-hover:scale-125'/>
                    Nạp xu
                </button>
                {
                    isLogin ? (
                        <div className='relative group'>
                            <FaRegUser className='text-3xl cursor-pointer w-10' />
                            <div className="absolute border min-w-[50vh] max-w-max h-auto -right-2 top-[130%] p-3 bg-white rounded shadow-lg z-50 opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
                                <div className='flex justify-between items-center hover:bg-gray-300 transition duration-200 py-2 px-2'>
                                    <div className='flex items-center '>
                                        <div className='w-14 h-14 flex items-center justify-center border rounded-full'>
                                            <img src={avt} alt='' className='object-contain rounded-full' />
                                        </div>
                                        <div className='ml-2'>
                                            <p className='font-semibold'>Lita 18717844</p>
                                            <div className='flex items-center'>
                                                <button className='bg-purple-500 p-0.5 text-xs rounded-sm font-semibold text-white'>ID</button>
                                                <p className='text-gray-500 ml-1 font-semibold'>zero1111</p>
                                                <img src={copy} alt='' className='w-3 ml-1'/>
                                            </div>
                                        </div>
                                    </div>
                                    <FaAngleRight className='text-xl'/>
                                </div>
                                <div className='flex items-center justify-center mt-4'>
                                    <div className='flex w-[50%] flex-col justify-center items-center border-r'>
                                        <p>0</p>
                                        <p className='text-sm text-gray-500 font-semibold'>Đang theo dõi</p>
                                    </div>
                                    <div className='flex w-[50%] flex-col justify-center items-center'>
                                        <p>0</p>
                                        <p className='text-sm text-gray-500 font-semibold'>Người theo dõi</p>
                                    </div>
                                </div>
                                <hr className='mt-5'/>
                                <ul className='flex flex-col'>    
                                    <li className='py-2 px-2 font-semibold flex items-center justify-between hover:bg-gray-300 transition duration-200'>
                                        <Link to = '/my-profile' className='flex items-center gap-3'><FaUser/> Trung tâm cá nhân</Link>
                                        <FaAngleRight className='text-base'/>
                                    </li>
                                    <li className='py-2 px-2 font-semibold flex items-center justify-between hover:bg-gray-300 transition duration-200'>
                                        <div className='flex items-center gap-3'><FaWallet/> Ví</div>
                                        <FaAngleRight className='text-base'/>
                                    </li>
                                    <li className='py-2 px-2 font-semibold flex items-center justify-between hover:bg-gray-300 transition duration-200'>
                                        <div className='flex items-center gap-3'><FaClipboardList/> Đơn đặt</div>
                                        <FaAngleRight className='text-base'/>
                                    </li>
                                </ul>
                                <hr className='mt-2'/>
                                <div className='flex flex-col space-y-2 mt-2'>
                                    <button className='px-2 text-left py-2 font-semibold flex items-center gap-3 hover:bg-gray-300 transition duration-200'>
                                        <MdLanguage className='text-lg'/>Ngôn ngữ
                                    </button>
                                    <button onClick={handleLogout} className='px-2 text-left py-2 font-semibold flex items-center gap-3 hover:bg-gray-300 transition duration-200'>
                                        <BiLogOut className='text-lg'/>Đăng xuất
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                    <button onClick={() => navigate('/login')} className='bg-purple-600 px-2.5 rounded-lg py-1.5 border-2 border-purple-500 text-white font-semibold transition-all ease-in-out duration-300 hover:bg-purple-700'>
                        Đăng nhập
                    </button>
                        )
                }
                
            </div>    
        </div>
    </nav>
  )
}

export default Navbar