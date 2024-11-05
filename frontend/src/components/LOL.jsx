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




const LOL = () => {

    const {donghanhuutu} = useContext(ShopContext)
    const [playerLol, setPlayerLol] = useState([])


    useEffect(() => {

        const lolPlayers = donghanhuutu.filter(item => 
            item.Category === "lol" || (Array.isArray(item.Category) && item.Category.includes("lol"))
        );
        setPlayerLol(lolPlayers.slice(0.5))
    },[])

  return (
    <div className="mt-10 mb-4 relative">
      <div className="flex items-center justify-between bg-purple-400 px-2 py-1.5 rounded-lg">
        <h1 className="text-3xl font-semibold ml-2">Liên minh huyền thoại</h1>
        <button className="bg-gray-300 shadow-md border px-4 py-1.5 font-semibold rounded-full">Xem tất cả</button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        navigation={{ nextEl: '.LOL-button-next', prevEl: '.LOL-button-prev' }}
        className="mt-5">
            <div className="grid grid-cols-5 gap-4 mt-6">
                {
                    playerLol.map((item,index) => (
                        <SwiperSlide className="mb-3 px-1">
                            <PlayerItem key={index} id={item.playerId} image={item.imageUser} name={item.nameUser} price={item.price} category = {item.Category}/>
                        </SwiperSlide>             
                    ))
                }
            </div>
        </Swiper>
        <div className="LOL-button-prev bg-gray-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[45%] -left-4 -translate-x-1"> <MdArrowBackIosNew /> </div>
        <div className="LOL-button-next bg-gray-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[45%] -right-4 translate-x-1"> <MdArrowForwardIos /> </div>
        <style jsx>{`
        .LOL-button-prev:after,
        .LOL-button-next:after {
          font-size: 20px; 
          color: white ; 
        }
        .LOL-button-prev,
        .LOL-button-next {
          cursor: pointer; 
        }
      `}</style>
      
    </div>
  )
}

export default LOL