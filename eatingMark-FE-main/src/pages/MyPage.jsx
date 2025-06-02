import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import Card from '../components/Card';

const MyPage = () => {
  const navigate = useNavigate();
  const [allPlaces, setAllPlaces] = useState([
    {
      id: 'r1',
      title: '을지로 골목냉면',
      image: {
        src: 'euljiro-naengmyeon.jpg',
      },
    },
    {
      id: 'r2',
      title: '전주 한옥마을 비빔밥',
      image: {
        src: 'jeonju-bibimbap.jpg',
      },
    },
    {
      id: 'r3',
      title: '부산 광안리 해산물집',
      image: {
        src: 'busan-seafood.jpg',
      },
    },
  ]);

  return (
    <div className="p-6 bg-[#f6f4ef] min-h-screen">
      {/* 🔍 검색창 */}
      <Search />

      {/* 🧾 상단 텍스트 안내 */}
      <div className="text-center mt-8">
        <h2 className="text-xl font-bold text-blue-600">TASTY ROAD</h2>
        <p className="text-lg font-bold text-[#222] mt-1">내가 찜한 맛집을 확인해보세요.</p>
      </div>

      {/* 🔃 정렬 버튼 */}
      <div className="flex justify-end mt-4">
        <button className="text-sm text-gray-700 hover:underline">거리순 정렬하기</button>
      </div>

      {/* 🧩 카드 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {allPlaces.map(place => (
          <Card
            key={place.id}
            imageSrc={place.image.src}
            name={place.title}
            handleCardClick={() => navigate(`/detail/${place.id}`)} // ✅ 카드 클릭 시 해당 디테일 페이지로 이동
          />
        ))}
      </div>
    </div>
  );
};

export default MyPage;
