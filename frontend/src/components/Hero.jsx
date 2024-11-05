import React from 'react'
import t7m from '../assets/t7m-removebg-preview.png'
import buico1 from '../assets/buico1.jpg'
import buico2 from '../assets/buico2.jpg'
import buico3 from '../assets/buico3.jpg'
import t7m_ong5 from '../assets/baodoi.png'
import caucatra from '../assets/caucatra.png'



const bgr_t7m = {
  backgroundImage: `url(${t7m_ong5})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "contain",
}

const Hero = () => {
  return (
    <div className='bg-purple-600 min-h-[600px] text-white  flex justify-center items-center overflow-hidden mt-3 rounded-lg relative'  > {/**style={bgr_t7m} */}
       <div className='absolute inset-0'  style={{ ...bgr_t7m, filter: 'blur(5px)' }}></div>
      <div className='grid md:grid-cols-2 place-items-center mx-7'>
        <div className='text-left space-y-6 relative z-10'>
          <p className='text-lg font-semibold ' data-aos = 'fade-down' data-aos-duration ='1000' data-aos-delay='600'>Chào mừng đến với <b className='text-purple-200'>Tho7Mau</b></p>
          <h1 className='text-5xl font-bold text-shadow-cyan'data-aos='zoom-out-down' data-aos-delay='600' data-aos-duration='1000'>GẶP GỠ <br/> ĐỒNG HÀNH <br/> CÙNG CHƠI GAME</h1>
          <p className='text-base font-semibold'data-aos = 'fade-right' data-aos-duration ='1000' data-aos-delay='600'>Bạn sẽ không còn phải chơi game một mình nữa, hãy nhanh tay tìm kiếm bạn đồng hành nào!</p>
          <div className='group' data-aos = 'zoom-in' data-aos-duration ='1000' data-aos-delay='600'>
            <button className='bg-white text-black font-semibold text-lg px-3 py-2 rounded-lg shadow-[0_0_20px_rgba(0,0,0)] transition-all ease-in-out duration-300 hover:bg-purple-500 hover:text-white group-hover:scale-110'>Khởi hành nào</button>
          </div>
        </div>
        <div>
          <div data-aos='zoom-in' data-aos-delay='600' data-aos-duration='1000'>
            <img src={t7m} alt='' className='drop-shadow-[0_0_25px_rgba(255,255,255)] relative z-10 animate-t7m'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero