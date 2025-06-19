import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import Search from '../components/Search';

const MainPage = () => {
  const navigate = useNavigate();
  const [allPlaces, setAllplaces] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      try {
        const res = await axios.get('http://localhost:3000/places');
        console.log('출력한 데이터', res);
        console.log(res.data.places);
        setAllplaces(res.data.places);
      } catch (error) {
        console.error('맛집 목록 불러오기 실패:', error);
      }
    }

    fetchDate();
  }, []);

  const handleCardClick = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] py-12">
      <main className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-[#0041BE] text-2xl font-bold mb-2">TASTY ROAD</h2>
          <p className="text-gray-800">당신 주변에 이런 곳이? 지금 바로 확인해보세요.</p>
        </div>

        {/* Search Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-[calc(20%-12px)]">
            <Search />
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-sm text-gray-700 hover:underline">거리순 정렬하기</button>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-5 gap-6">
          {allPlaces.map(place => (
            <Card
              key={place.id}
              imageSrc={`http://localhost:3000/${place.image?.src || '/default.jpg'}`}
              name={place.title}
              handleCardClick={() => {
                navigate(`/detail/${place.id}`);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
