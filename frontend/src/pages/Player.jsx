import React from 'react'
import copy from '../assets/copy.png'
import avt from '../assets/testimage.jpg'
import { IoIosFemale } from "react-icons/io";
import { useParams } from 'react-router-dom';
import chat from '../assets/chat.png'
import share from '../assets/share.png'
import tim from '../assets/tim.png'

const Player = () => {
   

  return (
    <div className='px-[13%] mt-5 mb-10'>
        <div className='flex items-center justify-between shadow-lg py-3 rounded-lg '>
            <div className='flex items-center gap-3'>
                <div className='w-24 overflow-hidden rounded-full'>
                    <img src = {avt} alt='' className='object-contain' />
                </div>
                <div className='flex flex-col '>
                    <p className='font-semibold'>Prolayer</p>
                    <div className='flex items-center gap-2 mt-1'>
                        <button className='flex items-center text-xs font-semibold gap-1 bg-pink-500 px-1.5 rounded-full'> <IoIosFemale /> 25</button>
                        <button className='flex items-center gap-2 rounded-full px-1.5 text-xs bg-green-500 border border-white text-white font-semibold'>
                            <p className='w-2 h-2 bg-white rounded-full'></p>
                            Online
                        </button>
                        
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                            <button className='bg-gray-500 text-white text-xs px-1 rounded-md'>ID</button>
                            <p className='font-semibold text-gray-500'>protozero</p>
                            <img src={copy} alt='' className='w-4' />
                        </div>
                </div>
            </div>
            <div className='flex items-center gap-4 pr-4'>
                <button className='border border-black p-1.5 rounded-lg flex items-center justify-center'>
                    <img src={chat} alt='' className='w-5'/>
                </button>
               <button className='flex items-center justify-center px-3 py-1 border rounded-lg border-gray-600 gap-2'>
                <img src={share} alt='' className='w-5'/>
                <p>Chia sẻ</p>
               </button>
                <button className='flex items-center justify-center px-3 py-1 border rounded-lg border-gray-600 bg-blue-500 gap-2'>
                    <img src={tim} alt='' className='w-5'/>
                    <p className='text-white font-semibold'>Yêu thích</p>
                </button>
            </div>
        </div>
        <div className='flex items-center justify-between  mt-10'>

        </div>
    </div>
  )
}

export default Player