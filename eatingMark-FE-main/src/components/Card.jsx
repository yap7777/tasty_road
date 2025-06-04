import React from 'react';

// 📦 Card 컴포넌트는 이미지, 제목, 클릭 핸들러를 props로 받음
function Card({ imageSrc, name, handleCardClick }) {
  return (
    <div className="group cursor-pointer hover:shadow-lg transition-shadow" onClick={handleCardClick}>
      <div className="aspect-square bg-gray-200 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
        <img src={imageSrc ? imageSrc : '/defaultImage.png'} className="w-full h-full object-cover" />
      </div>
      <div className="bg-white rounded-lg p-4 h-[100px]">
        <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
      </div>
    </div>
  );
}

export default Card;
