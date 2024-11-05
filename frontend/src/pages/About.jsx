import React from 'react'
import banner from '../assets/about-us.jpg'
import chplay from '../assets/apps.png'
import ios from '../assets/apple.png'
import mob from '../assets/icon-game-mob.png'
import pubg from '../assets/icon-game-pubg.png'
import lol from '../assets/icon-game-lol.png'
import among from '../assets/icon-game-among.png'
import ff from '../assets/icon-game-free.png'
import cod from '../assets/icon-game-call.png'
import about_1 from '../assets/donghanh-about.png'
import about_1_1 from '../assets/about1_1.png'
import about2 from '../assets/about2.png'
import about2_1 from '../assets/about2_2.png'
import about2_2 from '../assets/about2_3.png'
import dh1 from '../assets/about_dh1.jpeg'
import dh2 from '../assets/about_dh2.jpeg'
import dh3 from '../assets/about_dh3.jpeg'
import coin from '../assets/coin.png'
import star from '../assets/purple-star.png'
import mblg_ab from '../assets/mblg_about.png'
import wheel from '../assets/wheel.png'



const about_dh = [
  {
    id: 'ab1',
    nameAB: 'Agi',
    imageAB: dh1,
    descriptionAB: 'Hello, Aku Agi. Aku pemain Mobile Legends. Role yang aku pegang Marksman, Assasin & Mage. Kalau kalian butuh core aku siap bantu buat naikin tier tapi kalau kalian butuh support aku siap back up kalian agar bisa selalu di jaga. Mabar sama aku di jamin ga toxic, kita bisa ngobrol² dan bercanda. Terimakasih^^',
    priceAB: 100
  },
  {
    id: 'ab2',
    nameAB: 'Agi',
    imageAB: dh2,
    descriptionAB: 'Hello, Aku Agi. Aku pemain Mobile Legends. Role yang aku pegang Marksman, Assasin & Mage. Kalau kalian butuh core aku siap bantu buat naikin tier tapi kalau kalian butuh support aku siap back up kalian agar bisa selalu di jaga. Mabar sama aku di jamin ga toxic, kita bisa ngobrol² dan bercanda. Terimakasih^^',
    priceAB: 100
  },
  {
    id: 'ab3',
    nameAB: 'Agi',
    imageAB: dh3,
    descriptionAB: 'Hello, Aku Agi. Aku pemain Mobile Legends. Role yang aku pegang Marksman, Assasin & Mage. Kalau kalian butuh core aku siap bantu buat naikin tier tapi kalau kalian butuh support aku siap back up kalian agar bisa selalu di jaga. Mabar sama aku di jamin ga toxic, kita bisa ngobrol² dan bercanda. Terimakasih^^',
    priceAB: 100
  }
]


const About = () => {
  return (
    <div className='mx-auto mb-20'>
      <div className='w-full h-[55vh] relative '>
        <img src={banner} alt='' className=' w-full h-[55vh] '/> 
        
        <div className=' absolute top-0 backdrop-blur-lg bg-opacity-50 w-full h-full bg-gray-800 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-semibold text-white'>TÌM MỘT ĐỒNG ĐỘI LÝ TƯỞNG ĐỂ CHƠI GAME CÙNG NHAU</h1>
          <p className='mt-9 font-medium text-xl text-white'>Cảm thấy chán và thua liên tục? Tham gia vào Tho7mau để được chơi game cùng các prolayer và các gamer nữ</p>
          <div className='w-[60%] flex  items-center justify-center gap-14 mt-16'>
            <button className='bg-white rounded-full px-6 py-3 flex items-center'>
              <img src={chplay} alt='' className='w-11'/>
              <div className=' ml-4 font-semibold'>
                <p className='text-left'>Bật lên</p>
                <p>Google Play</p>
              </div>
            </button>
            <button className='bg-white rounded-full px-6 py-3 flex items-center'>
              <img src={ios} alt='' className='w-11'/>
              <div className=' ml-4 font-semibold'>
                <p className='text-left'>Bật lên</p>
                <p>App Store</p>
              </div>
            </button>
          </div>
        </div>
       
      </div>
      <div className=' mx-auto px-48 '>
        <div className='grid grid-cols-6 gap-4 justify-items-center  pt-8 pb-5'>
          <img src={mob} alt='' className='w-36 hover:scale-110 transition-all duration-500'/>
          <img src={pubg} alt='' className='w-36 hover:scale-110 transition-all duration-500'/>
          <img src={ff} alt='' className='w-36 hover:scale-110 transition-all duration-500'/>
          <img src={lol} alt='' className='w-36 hover:scale-110 transition-all duration-500'/>
          <img src={cod} alt='' className='w-36 hover:scale-110 transition-all duration-500'/>
          <img src={among} alt='' className='w-36 hover:scale-110 transition-all duration-500'/>
        </div>
        <div className='flex items-center justify-between mt-20'>
          <div className='flex-1 flex-col px-5'>
            <h2 className='text-4xl font-semibold'>Đồng hành PRO đã sẵn sàng để chơi cùng bạn!</h2>
            <p className='text-base font-semibold mt-4 text-gray-500'>Đồng Hành chuyên nghiệp dày dạn kinh nghiệm của chúng tôi có thể dễ dàng mang theo bạn để giành chiến thắng và giúp bạn thăng cấp như tên lửa</p>
            <p className='text-base font-semibold mt-1 text-gray-500'>Họ cũng có thể cung cấp phiên huấn luyện dựa trên nhu cầu của bạn</p>
          </div>
          <div className='flex-1 flex items-center justify-center pl-10 relative'>
            <img src={about_1} alt='' className='w-[70%] relative' />
            <div className='absolute top-[10%] left-20 w-[65%] rounded-xl border overflow-hidden hover:scale-110 hover:shadow-lg transition-all duration-300'>
              <img src={about_1_1} alt='' className=' object-contain'/>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between mt-20'>
          <div className='flex-1 flex items-center justify-center relative'>
            <img src={about2} alt='' className='w-[60%] relative'/>
            <img src={about2_1} alt='' className='absolute w-36 border rounded-full top-6 left-12 z-10 shadow-xl'/>
            <img src={about2_2} alt='' className='absolute w-28 border rounded-full bottom-24 right-10 z-10 shadow-xl'/>
          </div>
          <div className='flex-1 flex flex-col pl-4'>
            <h2 className='text-4xl font-semibold '> Gamer nữ đã sẵn sàng để cùng đồng hành và tận hưởng niềm vui chiến thắng với bạn</h2>
            <p className='text-base font-semibold mt-4 text-gray-500'>Gamer nữ của chúng tôi rất thích trò chuyện và kết bạn</p>
            <p className='text-base font-semibold mt-1 text-gray-500'>Nhiệm vụ của họ là mang đến cho bạn niềm vui và hạnh phúc tối đa</p>
          </div>
        </div>

        <div className='bg-purple-600 mx-auto mt-20  px-5 py-2 pl-6 pt-10 pb-6 rounded-lg relative'>
          <h1 className='text-3xl font-semibold text-white'>CHỈ DÀNH CHO THỜI GIAN GIỚI HẠN</h1>
          <p className='text-xl mt-4 font-semibold text-white'>Người dùng mới có thể chơi vòng quay may mắn để dành được lượt quay miễn phí </p>
          <img src={wheel} alt='' className='absolute -bottom-2.5 w-56 opacity-50 right-0'/>
          <button className='mt-8 bg-white  px-6 py-2 text-lg rounded-full font-semibold hover:scale-110 transition-all duration-300'>Tham gia ngay</button>
        </div>

        <div className='mx-auto mt-20 '>
          <h1 className='text-center text-3xl font-semibold'>ĐỒNG HÀNH NỔI BẬT</h1>
          <div className='grid grid-cols-3 gap-5 items-center justify-center mt-4'>
            {
              about_dh.map((item) => (
                <div className='rounded-lg shadow-lg relative hover:scale-105 transition-all duration-300'>
                  <div className='overflow-hidden  rounded-t-lg'>
                    <img src={item.imageAB} alt='' className='object-cover h-[310px] w-full'/>
                  </div>
                  <img src = {mblg_ab} alt=''  className='absolute top-[55%] right-2 w-16'/>
                  <div className='px-3 py-2'>
                    <p className='h-8 text-lg font-semibold text-gray-500'>{item.nameAB}</p>
                    <p className='line-clamp-3 text-sm font-semibold text-gray-500 mt-2'>{item.descriptionAB}</p>
                    <div className='flex items-center gap-2 mt-2'>
                      <img src={coin} alt='' className='w-8'/>
                      <p className='font-semibold text-xl  text-orange-400'>{item.priceAB}</p>
                      <p className='text-gray-500 font-semibold'>/ match</p>
                    </div>
                    <div className='flex items-center gap-1 mt-4 mb-2'>
                      <img src={star} alt='' className='w-4'/>
                      <img src={star} alt='' className='w-4'/>
                      <img src={star} alt='' className='w-4'/>
                      <img src={star} alt='' className='w-4'/>
                      <img src={star} alt='' className='w-4'/>
                      <p className='ml-3 text-xs'>(653)</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <h1 className='text-center text-3xl font-semibold mt-12'>Bạn đã sẵn sàng để tận hưởng niềm vui chưa nào?</h1>
        <div className='flex items-center justify-center mt-5 mb-6'>
          <button className='px-8 py-3 bg-purple-600 rounded-full font-semibold text-white text-lg hover:scale-110 transition-all duration-300 hover:shadow-md'>Tham gia ngay</button>
        </div>
      </div>
    </div>
  )
}

export default About