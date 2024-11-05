import React from 'react'
import { Link } from 'react-router-dom'
import sound from '../assets/sound.png'
import star from '../assets/star_lt.png'
import coin_lt from '../assets/coinlita.png'


const PlayerItem = ({id, image, name, price, category }) => {
  const isFreeFire = (Array.isArray(category) && category.includes('free_fire')) || category === 'free_fire';
  return (
    <div className='h-[340px] rounded-lg group shadow-md relative'>
        <Link   to={`/player/${id}`}  className=' cursor-pointer'>
            <div className='overflow-hidden rounded-t-lg w-full mx-auto'>
                <img className='group-hover:scale-110 transition-all ease-in-out rounded-t-lg  w-full object-contain'  src={image} alt=''/>   
            </div>
            <img src ={sound} alt=''  className='bg-slate-700 rounded-full absolute top-[59%] w-9 right-1 cursor-pointer'/>
            <div className='absolute top-1 left-1 bg-green-600 px-2 rounded-full border border-white flex items-center gap-1'>
              <button className='bg-white w-2 h-2 rounded-lg'></button>
              <p className='text-xs font-semibold text-white'>Online</p>
            </div>
            <div className=' flex  flex-col px-2 mt-3 gap-y-1'>
                <p className='text-purple-500 font-medium text-lg line-clamp-1' title={name}>{name}</p>
                <div className='flex items-center'>
                  <div className='flex items-center gap-2'>
                    <b>5.00</b>
                    <img src = {star} alt='' className='w-4 h-4'/>
                  </div>
                  <p className=' ml-2 -mt-1 text-gray-400'>|</p>
                  <p className='ml-2 font-semibold text-sm'>Đơn đã nhận: 50</p>
                </div>
               <div className='flex'>
                <div className='flex items-center gap-2'>
                  <img src = {coin_lt} alt='' className='w-5'/>
                  <p className=' text-xl font-bold text-yellow-400'>{price} </p>
                </div>
                <p className='mt-2 ml-1 text-gray-400 font-semibold text-sm'>
                  {isFreeFire  ? '/ 30 phút' : '/ trận'}
                </p>
               </div>
            </div>
        </Link>
    </div>
  )
}

export default PlayerItem