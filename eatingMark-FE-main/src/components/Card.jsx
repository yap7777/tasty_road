// components/Card.jsx
import React from 'react';

// 📦 Card 컴포넌트는 이미지, 제목, 클릭 핸들러를 props로 받음
function Card({ imageSrc, name, handleCardClick }) {
  return (
    // 🖼️ 카드 박스 - hover 시 살짝 그림자
    <div
      className="flex flex-col items-center bg-[#F2EFE8] p-4 rounded-md shadow-sm hover:shadow-md cursor-pointer"
      onClick={handleCardClick} // 👆 카드 클릭 시 실행될 함수
    >
      {/* 🖼️ 이미지 영역 */}
      <img src={imageSrc} alt={name} className="w-full h-40 object-cover rounded-sm mb-2" />
      {/* 🍽️ 식당 이름 */}
      <p className="text-sm font-medium text-gray-800">{name}</p>
    </div>
  );
}

export default Card;
