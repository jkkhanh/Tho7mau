import React from 'react'
import add from '../assets/add-icon.png'

const Contact = () => {
  return (
    <div className=' mx-auto w-full mb-28 '>
        <div className='flex flex-col items-center justify-center mt-28'>
          <h1 className='text-3xl font-semibold'>LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <div className='flex mt-10 '>
            <h3 className='text-xl font-semibold text-purple-700'>Partnership & Marketing:  </h3>
            <p className='ml-3 text-lg font-semibold'>devtoanbug@mkt.com,</p>
            <p className='ml-3 text-lg font-semibold'>devtoanbug@gmail.com</p>
          </div>
          <div className='flex mt-5'>
            <h3 className='text-xl font-semibold text-purple-700'>Pháp lý:  </h3>
            <p className='ml-3 text-lg font-semibold'>devtoanbug@contact.com</p>
          </div>
          <div className='flex mt-5'>
            <h3 className='text-xl font-semibold text-purple-700'>Hỗ trợ:  </h3>
            <p className='ml-3 text-lg font-semibold'>devtoanbug@support.com</p>
          </div>
          <div className='flex mt-5'>
            <h3 className='text-xl font-semibold text-purple-700'>Địa chỉ:  </h3>
            <p className='ml-3 text-lg font-semibold'>19/8 Trần Văn Ơn, Tp.Quy Nhơn, tỉnh Bình Định</p>
          </div>
          <div className='flex mt-5'>
            <h3 className='text-xl font-semibold text-purple-700'>Số điện thoại:  </h3>
            <p className='ml-3 text-lg font-semibold'>1900 8098</p>
          </div>
          
        </div>
    </div>
  )
}

export default Contact