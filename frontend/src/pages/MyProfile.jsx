import React, { useRef } from 'react';
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import avt from '../assets/avt.jpg';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";
import { useNavigate } from 'react-router-dom';







const MyProfile = () => {

  const navigate = useNavigate()

  const inputRef = useRef(null);

  const handleDivClick = () => {
    // Kích hoạt click vào input khi người dùng click vào div
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <div className='flex flex-row w-full bg-gray-100'>
      <div className='flex w-64 shadow-lg bg-white'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-center py-10 font-semibold text-lg border-b'>Trung tâm cá nhân</div>
          <ul>
            <li className='py-3 pl-5 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300'>
              <FaUser />
              <p className='font-semibold'>Thông tin của tôi</p>
            </li>
            <li className='py-3 pl-5 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300'>
              <span className='text-lg'><BiLogOut /></span>
              <p className='font-semibold'>Đăng xuất</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <div className='w-full  rounded-lg px-20 py-10'>
          <h1 className='text-3xl font-semibold mb-5'>Sửa hồ sơ</h1>
          <div className='flex gap-5'>
            <div className='flex flex-col w-[30%] max-h-[550px] overflow-y-scroll no-scrollbar px-6 py-4 shadow-md rounded-md bg-white'>
              <p className='text-lg font-semibold'>Ảnh đại diện</p>
              <div className='flex items-center justify-center w-full mt-4 flex-col'>
                <img src={avt} alt='avatar' className='w-40 h-40 object-cover border rounded-lg' />
                <div className='mt-4'>
                  <label className='bg-blue-500 px-7 py-2 rounded-full cursor-pointer font-semibold text-white transition duration-300 hover:bg-blue-600'>
                    Upload
                    <input type='file'  onChange={handleFileChange} hidden />
                  </label>
                </div>
                <div className='mt-8'>
                  <p className='text-xl font-semibold mb-2'>Album (0/6)</p>
                  <div className='grid grid-cols-2 gap-4 items-center justify-center mt-2'>
                   <div>
                    <div onClick={handleDivClick} className='w-32 h-32 bg-gray-300 rounded-md flex items-center justify-center text-xl'><FaPlus/></div>
                    <input type='file' ref={inputRef} onChange={handleFileChange} hidden />
                   </div>
                   <div>
                    <div onClick={handleDivClick} className='w-32 h-32 bg-gray-300 rounded-md flex items-center justify-center text-xl'><FaPlus/></div>
                    <input type='file' ref={inputRef} onChange={handleFileChange} hidden />
                   </div>
                   <div>
                    <div onClick={handleDivClick} className='w-32 h-32 bg-gray-300 rounded-md flex items-center justify-center text-xl'><FaPlus/></div>
                    <input type='file' ref={inputRef} onChange={handleFileChange} hidden />
                   </div>
                   <div>
                    <div onClick={handleDivClick} className='w-32 h-32 bg-gray-300 rounded-md flex items-center justify-center text-xl'><FaPlus/></div>
                    <input type='file' ref={inputRef} onChange={handleFileChange} hidden />
                   </div>
                   <div>
                    <div onClick={handleDivClick} className='w-32 h-32 bg-gray-300 rounded-md flex items-center justify-center text-xl'><FaPlus/></div>
                    <input type='file' ref={inputRef} onChange={handleFileChange} hidden />
                   </div>
                   <div>
                    <div onClick={handleDivClick} className='w-32 h-32 bg-gray-300 rounded-md flex items-center justify-center text-xl'><FaPlus/></div>
                    <input type='file' ref={inputRef} onChange={handleFileChange} hidden />
                   </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-1 max-h-[550px] overflow-y-scroll no-scrollbar shadow-lg py-4 bg-white rounded-md'>
              <div className='w-full'>
                <div className='w-[80%] mx-auto flex flex-col justify-center'>
                  <p className='mb-2 text-lg font-semibold'>Biệt danh</p>
                  <input type='text' className='outline-none w-[70%] h-10 rounded-lg border border-black' />
                  <p className='mt-1 text-red-500 font-semibold text-sm'>*Mỗi tuần chỉ có thể đổi một lần</p>
                  <div className='mt-8 font-semibold  text-lg'>
                    <p>Giới thiệu giọng nói</p>
                    <div className='w-full mt-2 flex flex-col items-center justify-center bg-gray-300 h-32 rounded-lg'>
                      <p className='mb-1 text-sm'>00:00</p>
                        <button className='bg-gradient-to-r from-purple-500 to-blue-500 px-16 py-1 rounded-full hover:scale-110'>
                          <MdOutlineKeyboardVoice className='text-4xl text-white'/>
                        </button>
                      <p className='text-xs mt-2'>Nhấn vào đây để ghi âm</p>
                    </div>
                  </div>
                  <div className='w-full mt-8'>
                    <p className='font-semibold text-lg'>Lý lịch</p>
                    <textarea type='text' placeholder='Giới thiệu về bản thân...' className='w-full h-24 bg-gray-300 border mt-3 p-2'/>
                  </div>
                  <div className='w-[80%] mt-8'>
                    <p className='font-semibold text-lg'>Giới tính</p>
                    <div className='w-full flex items-center justify-center gap-5 mt-2'>
                      <button className='w-[50%] h-14 rounded-lg bg-gray-300 flex items-center justify-center gap-3'>
                        <IoIosMale className='text-lg text-blue-600 ' />
                        <p className='font-semibold text-lg'>Nam</p>
                        </button>
                      <button className='w-[50%] h-14 rounded-lg bg-gray-300 flex items-center justify-center gap-3'>
                        <IoIosFemale className='text-lg text-pink-500' />
                        <p className='font-semibold text-lg'>Nữ</p> 
                      </button>
                    </div>             
                  </div>
                <div className='w-full mt-8'>
                  <p className='font-semibold text-lg'>Ngày sinh</p>
                  <input type='date'  className='border w-[40%] mt-2 px-2 py-1 font-semibold'/>
                </div>
                <div className='w-full mt-10 mb-10'>
                  <button className='w-full h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white'>Lưu</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
