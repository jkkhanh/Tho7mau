import React, { useState } from 'react';
import { gameData } from '../assets/assets';
import { Link } from 'react-router-dom';
import skill from '../assets/skill.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const GameMenu = () => {

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setProgress(value);
    if (swiperInstance) {
      const slideIndex = Math.round(
        (value / 100) * (swiperInstance.slides.length - swiperInstance.params.slidesPerView)
      );
      swiperInstance.slideTo(slideIndex);
    }
  };


  const handleSwiperChange = (swiper) => {
    setProgress((swiper.activeIndex / (swiper.slides.length - swiper.params.slidesPerView)) * 100);
  };


  return (
    <div id='gamemenu' className='mt-6 mb-9 relative'>
      <div className='mb-3 flex items-center justify-between px-4'>
        <h1 className='text-3xl font-semibold'>TÌM ĐỒNG HÀNH CHƠI GAME</h1>
        <button className='bg-gray-300 px-5 text-xl font-semibold py-2 rounded-full flex items-center gap-2'> 
          Toàn bộ kĩ năng 
          <img src={skill} alt='' className='w-8'/>
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={5}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSwiperChange}
        navigation={{ nextEl: '.gameMenu-button-next', prevEl: '.gameMenu-button-prev' }}
        className='px-4 mt-10'
      >
        {gameData.map((item) => (
          <SwiperSlide key={item.id} className='w-fit flex flex-col items-center justify-center mb-24'>
            <Link to={`/game/${item.Category}`} className='mt-3 h-fit w-full relative group'>
              <div className='w-44 h-56 flex justify-center items-center relative z-10 overflow-hidden mx-auto rounded-lg '>
                <img src={item.image} alt='' className='w-full h-56 object-cover transition-transform duration-500 transform group-hover:scale-110'/>
              </div>
              <div className='bg-white border shadow-lg w-full h-[250px] mt-2 rounded-lg rounded-t-[30px]  flex flex-col justify-end absolute top-8 transition-transform duration-500 transform group-hover:bg-purple-500 group-hover:text-white'>
                <h2 className='text-center font-semibold text-[16px] mb-5'>
                  {item.nameGame}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Slider Input */}
      <div className='flex justify-center mt-4'>
        <input
          type='range'
          min='0'
          max='100'
          value={progress}
          onChange={handleSliderChange}
          className='w-1/3'
        />
      </div>

      {/* Navigation Buttons */}
      <div
        className={`gameMenu-button-prev rounded-full bg-black text-white text-xl w-10 h-10 flex items-center justify-center  absolute top-[98%] left-[32%] transform -translate-y-1/2 -translate-x-8 transition-opacity duration-300 ${progress === 0 ? 'opacity-100' : 'opacity-100'}`}><MdArrowBackIosNew /> </div>
      <div
        className={`gameMenu-button-next rounded-full bg-black text-white text-xl w-10 h-10 flex items-center justify-center  absolute top-[98%] right-[32%] transform -translate-y-1/2 translate-x-8 transition-opacity duration-300 ${progress === 100 ? 'opacity-100' : 'opacity-100'}`}> <MdArrowForwardIos /> </div>
      
      <style jsx>{`
        .gameMenu-button-prev:after,
        .gameMenu-button-next:after {
          font-size: 20px; 
          color: white; 
        }
        .gameMenu-button-prev,
        .gameMenu-button-next {
          cursor: pointer; 
        }
      `}</style>
    </div>
  );
};

export default GameMenu;
