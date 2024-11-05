import React from 'react'
import logo_ft from '../assets/logo_t7m.png'
import fb from '../assets/facebook-icon.png'
import ins from '../assets/instagram-icon.png'
import zalo from '../assets/zalo-icon.png'
import chplay from '../assets/apps.png'
import appstore from '../assets/apple.png'


const Footer = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <div className='grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 pb-10 pt-3'>
            <div className='flex flex-col'>
                <img src={logo_ft} alt='' className='w-20' />
                <p className=' mt-1 font-semibold text-white'>Tho7Mau Đồng Hành Chơi Game giúp bạn tìm được đồng đội hoàn hảo.</p>
                <div className='mt-2 flex items-center gap-3'>
                    <button className='px-1 py-0.5 bg-white rounded-lg hover:bg-green-400'>
                        <img src={fb} alt='' className='w-10' />
                    </button>
                    <button className='px-1 py-0.5 bg-white rounded-lg hover:bg-green-400'>
                        <img src={ins} alt='' className='w-10' />
                    </button>
                    <button className='px-1 py-0.5 bg-white rounded-lg hover:bg-green-400'>
                        <img src={zalo} alt='' className='w-10' />
                    </button>
                </div>
                <p className='mt-2 text-xs font-semibold text-gray-600'>© 2024 BATTUTA TECHNOLOGY PTE. LTD.</p>
            </div>
            <div className='ml-4 mt-4'>
                <p className='text-xl font-semibold text-white'>BẮT ĐẦU</p>
                <ul className='mt-2 flex flex-col gap-1'>
                    <li className='text-white font-semibold ml-1'>Trang chủ</li>
                    <li className='text-white font-semibold ml-1'>Tất cả dịch vụ</li>
                    <li className='text-white font-semibold ml-1'>Khoảnh khắc</li>
                    <li className='text-white font-semibold ml-1'>Đồng hành</li>
                    <li className='text-white font-semibold ml-1'>Nạp xu</li>
                </ul>
            </div>
            <div className='ml-4 mt-4'>
                <p className='text-xl font-semibold text-white'>CÔNG TY</p>
                <ul className='mt-2 flex flex-col gap-1'>
                    <li className='text-white font-semibold ml-1'>Về chúng tôi</li>
                    <li className='text-white font-semibold ml-1'>Liên hệ với chúng tôi</li>
                    <li className='text-white font-semibold ml-1'>Chương trình giới thiệu</li>
                    <li className='text-white font-semibold ml-1'>Điều khoản sử dụng</li>
                    <li className='text-white font-semibold ml-1'>Sản phẩm thay thế</li>
                </ul>
            </div>
            <div className='ml-4 mt-4 flex flex-col'>
                <p className='text-xl font-bold text-white'>TẢI APP THO7MAU</p>
                <button className='mt-4 bg-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-500 hover:text-white'>
                    <img src={chplay} alt=''/>
                    <div className='text-left ml-5'>
                        <p className='text-sm font-semibold'>Bật lên</p>
                        <b>GOOGLE PLAY</b>
                    </div>
                </button>
                <button className='mt-4 bg-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-500 hover:text-white'>
                    <img src={appstore} alt/>
                    <div className='text-left ml-5'>
                        <p className='text-sm font-semibold'>Tải xuống từ</p>
                        <b>APPLE STORE</b>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer