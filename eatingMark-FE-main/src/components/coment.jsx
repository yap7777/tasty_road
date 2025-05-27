Comment

import React from 'react';

function Comment({ name, comment, profileImage }) {
  return (
    <div className="flex items-start bg-[#f5f3eb] p-4 rounded-xl shadow-sm justify-between w-full max-w-2xl mx-auto">
      {/* 왼쪽: 프로필 + 텍스트 */}
      <div className="flex items-start space-x-4">
        {/* 프로필 이미지 */}
        <img src={'/profile.jpeg'} alt={`${name}의 프로필`} className="w-10 h-10 rounded-full" />

        {/* 텍스트 영역 */}
        <div>
          <p className="font-semibold text-sm text-gray-800">{name}</p>
          <p className="text-sm text-gray-700 mt-1">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;