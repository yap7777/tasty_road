import React from 'react';

function Card({ imageSrc, name, handleCardClick }) {
  return (
    <div
      className="flex items-start gap-4 bg-[#F2EFE8] p-4 rounded-md shadow-sm hover:shadow-md cursor-pointer"
      onClick={handleCardClick}
    >
      {/* 프로필 이미지 */}
      <img src={imageSrc} alt={`${name}의 프로필`} className="w-10 h-10 rounded-full object-cover" />

      {/* 텍스트 내용 */}
      <div className="flex-1">
        {/* 이름 */}
        <p className="font-semibold text-sm text-gray-800">{name}</p>

        {/* 댓글 내용 (더미 텍스트로 대체) */}
        <p className="text-sm text-gray-700 mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque mattis molestie eget phasellus tellus amet
          duis in.
        </p>
      </div>

      {/* 별점 */}
      <div className="text-gray-400 text-sm">⭐⭐⭐⭐⭐</div>
    </div>
  );
}

export default Card;
