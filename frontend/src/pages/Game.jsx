import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import PlayerItem from '../components/PlayerItem';
import { useParams } from 'react-router-dom';

const Game = () => {
  const { donghanhuutu } = useContext(ShopContext);
  const { Category } = useParams();
  const [filterPlayer, setFilterPlayer] = useState([]);
  const [rank, setRank] = useState([]);
  const [sex, setSex] = useState("All"); 
  const [forte, setForte] = useState([]);


  const getFiltersByCategory = (category) => {
    
    switch (category) {
      case 'pubg':
        return {
          ranks: [
            { value: 'Bronze', label: 'Đồng' },
            { value: 'Silver', label: 'Bạc' },
            { value: 'Gold', label: 'Vàng' },
            { value: 'Platinum', label: 'Bạch kim' },
            { value: 'Diamond', label: 'Kim cương' },
            { value: 'Elite', label: 'Tinh Anh' }
          ],
          fortes: [
            { value: 'AD', label: 'Xạ thủ' },
            { value: 'Tank', label: 'Đỡ đòn' },
            { value: 'Jungle', label: 'Đi rừng' },
            { value: 'Mid', label: 'Đường giữa' },
            { value: 'Support', label: 'Hỗ trợ' }
          ]
        };
      case 'aov':
        return {
          ranks: [
            { value: 'Gold', label: 'Vàng' },
            { value: 'Platinum', label: 'Bạch kim' },
            { value: 'Diamond', label: 'Kim cương' }
          ],
          fortes: [
            { value: 'AD', label: 'Xạ thủ' },
            { value: 'Tank', label: 'Đỡ đòn' },
            { value: 'Mage', label: 'Pháp sư' }
          ]
        };
      case 'lol':
        return {
          ranks: [
            { value: 'Iron', label: 'Sắt' },
            { value: 'Bronze', label: 'Đồng' },
            { value: 'Silver', label: 'Bạc' },
            { value: 'Gold', label: 'Vàng' },
            { value: 'Platinum', label: 'Bạch kim' },
            { value: 'Diamond', label: 'Kim cương' },
            { value: 'Master', label: 'Cao thủ' },
            { value: 'Challenger', label: 'Thách đấu' }
          ],
          fortes: [
            { value: 'AD', label: 'Xạ thủ' },
            { value: 'Tank', label: 'Đỡ đòn' },
            { value: 'Jungle', label: 'Đi rừng' },
            { value: 'Mid', label: 'Đường giữa' },
            { value: 'Support', label: 'Hỗ trợ' }
          ]
        };
      default:
        return {
          ranks: [],
          fortes: []
        };
    }
  };

  const toggleRank = (e) => {
    const value = e.target.value;
    setRank(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const toggleSex = (e) => {
    setSex(e.target.value);
  };
    
  const toggleForte = (e) => {
    const value = e.target.value;
    if (value === 'All') {
      setForte(prev => prev.length === 0 ? ['All'] : []);
    } else {
      setForte(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    }
  };

  const applyfilter = () => {
    let playerCopy = donghanhuutu.slice();

    playerCopy = playerCopy.filter(item => item.Category.includes(Category));

    if (sex !== "All") { 
      playerCopy = playerCopy.filter(item => item.sex === sex);
    }

    if (rank.length > 0) {  
      playerCopy = playerCopy.filter(item => 
          Array.isArray(item.rank) && item.rank.some(r => rank.includes(r))
      );
    }

 
    if (forte.length > 0) {
      playerCopy = playerCopy.filter(item => 
          Array.isArray(item.forte) && item.forte.some(f => forte.includes(f))
      ); 
    }

    

    setFilterPlayer(playerCopy);
  };

  useEffect(() => {
    setFilterPlayer(donghanhuutu.filter(item => item.Category.includes(Category))); 
  }, [donghanhuutu,Category]);

  useEffect(() => {
    applyfilter(); 
  }, [sex, rank, forte,]);

  const { ranks, fortes } = getFiltersByCategory(Category);

  return (
    <div className='flex min-h-screen flex-row gap-10'>
      <div className='w-[15%] h-full border-t border'>
        <div className='pl-3 pt-4'>
          <h2 className='text-lg font-semibold text-gray-500 mb-3'>Giới tính </h2>
          <div className='flex flex-col gap-1.5 pl-2 font-semibold'>
            <p className='flex items-center gap-2'>
              <input type='radio' name="gender" value="All" checked={sex === "All"} onChange={toggleSex} />
              Tất cả
            </p>
            <p className='flex items-center gap-2'>
              <input type='radio' name="gender" value="Male" checked={sex === "Male"} onChange={toggleSex} />
              Nam
            </p>
            <p className='flex items-center gap-2'>
              <input type='radio' name="gender" value="Female" checked={sex === "Female"} onChange={toggleSex} />
              Nữ
            </p>
          </div>

          <h2 className='mt-6 text-lg font-semibold text-gray-500'>Hạng</h2>
          <div className='flex flex-col gap-1.5 pl-2 mt-2 font-semibold'>
            {ranks.map(({ value, label }) => (
              <p className='flex items-center gap-2' key={value}>
                <input type='checkbox' value={value} onChange={toggleRank}/>
                {label}
              </p>
            ))}
          </div>

          <h2 className='mt-6 text-lg font-semibold text-gray-500'>Vị trí sở trường</h2>
          <div className='flex flex-col gap-1.5 pl-2 mt-2 mb-10 font-semibold'>
            {fortes.map(({ value, label }) => (
              <p className='flex items-center gap-2' key={value}>
                <input type='checkbox' value={value} onChange={toggleForte}/>
                {label}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className='flex-1 ml-6 h-full'>
        <div className='flex items-center justify-between pt-5 pr-5 mb-4'>
          <h2 className='text-xl font-semibold text-gray-500'>{Category === 'lol' ? 'Liên Quân Mobile' : 'Game'}</h2>
          <div className='flex items-center gap-5'>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-full'>Xóa tất cả bộ loc</button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded-full'>Ẩn bộ lọc</button>
          </div>
        </div>
        <div className='grid grid-cols-5 gap-5 items-center pr-5'>
          {
            filterPlayer.map((item, index) => (
              <PlayerItem key={index} id={item.playerId} image={item.imageUser} name={item.nameUser} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Game;
