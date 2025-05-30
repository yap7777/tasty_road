import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const [allPlaces] = useState([
    {
      "id": "r1",
      "title": "을지로 골목냉면",
      "image": {
        "src": "euljiro-naengmyeon.jpg",
        "alt": "을지로 골목에서 유명한 시원한 냉면."
      },
      "lat": 37.5665,
      "lon": 126.978,
      "description": "시원한 육수와 쫄깃한 면발로 유명한 을지로 냉면 맛집."
    },
    {
      "id": "r2",
      "title": "전주 한옥마을 비빔밥",
      "image": {
        "src": "jeonju-bibimbap.jpg",
        "alt": "전주의 대표 음식인 화려한 비빔밥."
      },
      "lat": 35.8111,
      "lon": 127.148,
      "description": "다양한 재료가 어우러진 전통 비빔밥을 즐될 수 있는 곳."
    },
    {
      "id": "r3",
      "title": "부산 광안리 해산물집",
      "image": {
        "src": "busan-seafood.jpg",
        "alt": "광안대교가 보이는 해산물 요리."
      },
      "lat": 35.1533,
      "lon": 129.118,
      "description": "광안리 바다를 바라보며 신선한 해산물을 맛볼 수 있는 맛집."
    }
  ]);

  const handleCardClick = (id) => {
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
            <input
              type="text"
              placeholder="맛집 검색하기"
              className="w-full py-2 pl-10 pr-4 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500"
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-5 gap-6">
          {allPlaces.map((place) => (
            <div 
              key={place.id} 
              className="group cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCardClick(place.id)}
            >
              <div className="aspect-square bg-gray-200 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={place.image.src}
                  alt={place.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-lg p-4 h-[100px]">
                <h3 className="font-semibold text-gray-800 mb-2">{place.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{place.description}</p>
              </div>
            </div>
          ))}
          {/* Add empty placeholder cards to fill the grid */}
          {[...Array(12)].map((_, index) => (
            <div key={`empty-${index}`} className="group">
              <div className="aspect-square bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-4xl text-gray-400">▢</span>
              </div>
              <div className="bg-white rounded-lg p-4 h-[100px]"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
