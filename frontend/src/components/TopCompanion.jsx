import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { gameData } from "../assets/assets";
import { Link } from "react-router-dom";
import star_icon from "../assets/icons8-star-48.png";
import aov from "../assets/aov.jpeg";
import coin from "../assets/coinlita.png";
import off99 from "../assets/offf99.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";



const TopCompanion = () => {

  const {donghanhuutu} = useContext(ShopContext)

  return (
    <div className="mt-20 mb-4 relative">
      <h1 className="text-3xl font-semibold ml-2">Đề xuất đồng hành ưu tú</h1>
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          navigation={{ nextEl: '.topCompanion-button-next', prevEl: '.topCompanion-button-prev' }}
          className="px-4 mt-5"
        >
          {donghanhuutu.slice(0,5).map((item) => {
            let dataS = Array.isArray(item.Category) ? gameData.filter((data) => item.Category.includes(data.Category)) : gameData.filter((data) => data.Category === item.Category);       
            return (
              <SwiperSlide key={item.id} className="w-fit flex flex-col items-center justify-center mb-24" >
                <Link to={`/player/${item.playerId}`}  className="mt-1 h-fit w-full  group" >
                  <div className="bg-neutral-600 p-4 flex rounded-lg">
                    <div className="flex-initial">
                      <img src={item.imageUser} className="w-44 h-44" />
                    </div>
                    <div className="flex-1 flex-col ml-5">
                      <div className="flex items-center justify-between h-[17%] ">
                        <p className="text-white text-xl font-semibold ine-clamp-1 ">
                          {item.nameUser}
                        </p>
                        <span className="text-white font-semibold text-lg flex items-center gap-1">
                          <img src={star_icon} alt="" className="w-6" />
                          5.0
                        </span>
                      </div>
                      <p className="mt-3 font-semibold h-[23%] text-white text-sm line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex mt-5 relative">
                        <img src={dataS[0].image} alt="" className="w-14 h-[75px] rounded-lg" />
                        <div className="ml-3">
                          <p className="text-lg font-semibold text-white mb-0">
                            {dataS[0].nameGame}
                          </p>
                          <div className="flex items-center">
                            <img src={coin} alt=" " className="w-10 h-10" />
                            <div className="ml-3 flex flex-col ">
                              <p className="text-orange-400">
                                <b className="text-xl">2</b>/ trận
                              </p>
                              <p className="text-sm text-slate-500">
                                <b>105</b>/ trận
                              </p>
                            </div>
                          </div>
                        </div>
                        <img src={off99}  alt="" className="w-12 h-10 absolute right-28 top-8" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="topCompanion-button-prev bg-black text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[40%] -left-10 -translate-x-1"> <MdArrowBackIosNew /> </div>
        <div className="topCompanion-button-next bg-black text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[40%] -right-10 translate-x-1"> <MdArrowForwardIos /> </div>
        <style jsx>{`
        .topCompanion-button-prev:after,
        .topCompanion-button-next:after {
          font-size: 20px; 
          color: white ; 
        }
        .topCompanion-button-prev,
        .topCompanion-button-next {
          cursor: pointer; 
        }
      `}</style>
      </div>
    </div>
  );
};

export default TopCompanion;
