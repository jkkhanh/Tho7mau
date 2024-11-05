import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ShopContext } from "../context/ShopContext";
import PlayerItem from "./PlayerItem";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";




const FreeFire = () => {

    const {donghanhuutu} = useContext(ShopContext)
    const [playerFF, setPlayerFF] = useState([])


    useEffect(() => {

        const ffPlayers = donghanhuutu.filter(item => 
            item.Category === "free_fire" || (Array.isArray(item.Category) && item.Category.includes("free_fire"))
        );
        setPlayerFF(ffPlayers.slice(0.5))
    },[])

  return (
    <div className="mt-10 mb-4 relative">
      <div className="flex items-center justify-between bg-purple-400 px-2 py-1.5 rounded-lg">
        <h1 className="text-3xl font-semibold ml-2">Free Fire</h1>
        <button className="bg-gray-300 shadow-md border px-4 py-1.5 font-semibold rounded-full">Xem tất cả</button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        navigation={{ nextEl: '.FF-button-next', prevEl: '.FF-button-prev' }}
        className="mt-5">
            <div className="grid grid-cols-5 gap-4 mt-6">
                {
                    playerFF.map((item,index) => (
                        <SwiperSlide className="mb-3 px-1">
                            <PlayerItem key={index} id={item.playerId} image={item.imageUser} name={item.nameUser} price={item.price} category={item.Category}/>
                        </SwiperSlide>             
                    ))
                }
            </div>
        </Swiper>
        <div className="FF-button-prev bg-gray-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[45%] -left-4 -translate-x-1"> <MdArrowBackIosNew /> </div>
        <div className="FF-button-next bg-gray-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[45%] -right-4 translate-x-1"> <MdArrowForwardIos /> </div>
        <style jsx>{`
        .FF-button-prev:after,
        .FF-button-next:after {
          font-size: 20px; 
          color: white ; 
        }
        .FF-button-prev,
        .FF-button-next {
          cursor: pointer; 
        }
      `}</style>
      
    </div>
  )
}

export default FreeFire