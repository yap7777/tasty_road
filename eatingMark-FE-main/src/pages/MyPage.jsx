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
        src: null,
      },
    },
    {
      id: 'r2',
      title: '전주 한옥마을 비빔밥',
      image: {
        src: null,
      },
    },
    {
      id: 'r3',
      title: '부산 광안리 해산물집',
      image: {
        src: null,
      },
    },
  ]);

  return (
    <div className="min-h-screen bg-[#F2EFE8] py-12">
      <main className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-[#0041BE] text-2xl font-bold mb-2">MY PAGE</h2>
          <p className="text-gray-800">내가 찜한 맛집을 확인해보세요.</p>
        </div>
        {/* 🔃 정렬 버튼 */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-[calc(20%-12px)]">
            <Search />
          </div>
          <div className="flex justify-end mt-4">
            <button className="text-sm text-gray-700 hover:underline">거리순 정렬하기</button>
          </div>
        </div>

        {/* 🧩 카드 리스트 */}
        <div className="grid grid-cols-5 gap-6">
          {allPlaces.map(place => (
            <Card
              imageSrc={place.image.src}
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

export default MyPage;
