import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ShopContext } from "../context/ShopContext";
import PlayerItem from "./PlayerItem";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";



const AOV = () => {

    const {donghanhuutu} = useContext(ShopContext)
    const [playerAOV, setPlayerAOV] = useState([])


    useEffect(() => {

      const aovPlayers = donghanhuutu.filter(item => item.Category === "aov" || (Array.isArray(item.Category) && item.Category.includes("aov")));
        setPlayerAOV(aovPlayers.slice(0,5))
    },[])

  return (
    <div className=" mb-4 relative">
      <div className="flex items-center justify-between bg-purple-400 px-2 py-1.5 rounded-lg">
        <h1 className="text-3xl font-semibold ml-2">Liên quân Mobile</h1>
        {
          playerAOV.length > 0 && (
            <Link to={`/game/${playerAOV[0].Category}`}>
              <button className="bg-gray-300 shadow-md border px-4 py-1.5 font-semibold rounded-full"> Xem tất cả </button>
            </Link>
          )
        }
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        navigation={{ nextEl: '.AOV-button-next', prevEl: '.AOV-button-prev' }}
        className="mt-5">
          <div className="grid grid-cols-5 gap-4 mt-6">
            {
              playerAOV.map((item,index) => (
              <SwiperSlide className="mb-3 px-1">
                <PlayerItem key={index} id={item.playerId} image={item.imageUser} name={item.nameUser} price={item.price}/>
              </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
        <div className="AOV-button-prev bg-gray-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[45%] -left-4 -translate-x-1"> <MdArrowBackIosNew /> </div>
        <div className="AOV-button-next bg-gray-500 text-white text-xl w-10 h-10 flex items-center justify-center rounded-full absolute z-10 top-[45%] -right-4 translate-x-1"> <MdArrowForwardIos /> </div>
        <style jsx>{`
        .AOV-button-prev:after,
        .AOV-button-next:after {
          font-size: 20px; 
          color: white ; 
        }
        .AOV-button-prev,
        .AOV-button-next {
          cursor: pointer; 
        }
      `}</style>
      
    </div>
  )
}

export default AOV