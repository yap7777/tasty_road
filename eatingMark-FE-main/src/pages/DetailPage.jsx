import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comment from '../components/Comment';

const DetailPage = () => {
  const navigate = useNavigate();

  const [comments] = useState([
    {
      id: '1a2b3c',
      name: '윤혜원',
      comment: '맛있어요',
      rating: 5,
    },
    {
      id: '2d3e4f',
      name: '김철수',
      comment: '분위기도 좋고 맛도 최고예요!',
      rating: 4,
    },
    {
      id: '3g4h5i',
      name: '박영희',
      comment: '양이 좀 적은 게 아쉬웠어요.',
      rating: 3,
    },
    {
      id: '4j5k6l',
      name: '이민호',
      comment: '재방문의사 100%! 추천합니다.',
      rating: 5,
    },
    {
      id: '5m6n7o',
      name: '최수정',
      comment: '무난했어요. 특별한 건 없네요.',
      rating: 3,
    },
  ]);

  const [place] = useState({
    id: 'r1',
    name: '을지로 골목냉면',
    description:
      '시원한 육수와 쫄깃한 면발이 일품인 을지로 대표 냉면 맛집입니다. 30년 전통의 비법 육수로 만든 냉면은 깔끔하면서도 깊은 맛을 자랑합니다. 고소한 육전과 신선한 물김치도 함께 즐겨보세요. 을지로의 정취를 느끼며 즐기는 냉면 한 그릇은 더운 여름날 최고의 선택이 될 것입니다.',
    image: null,
  });

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] py-8">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <button onClick={handleGoBack} className="flex items-center text-gray-600 mb-6">
          <span className="text-2xl mr-2">←</span>
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="aspect-square">
              <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column - Info */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{place.name}</h1>
            <p className="text-gray-600 mb-8">{place.description}</p>

            {/* Save Button */}
            <button className="w-full bg-[#817D73] text-white py-3 rounded-lg mb-8">나의 맛집 목록에 저장하기</button>

            {/* Review Section */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">리뷰 달기</h2>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className="text-2xl text-gray-400 cursor-pointer hover:text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="리뷰를 작성해주세요"
                  className="w-full py-2 pr-20 border-b border-gray-300 bg-transparent focus:outline-none"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-1 bg-[#817D73] text-white rounded">
                  등록하기
                </button>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map(comment => (
                  <Comment key={comment.id} name={comment.name} comment={comment.comment} rating={comment.rating} />
                ))}
              </div>

              {/* Loading More Comments */}
              <div className="text-center mt-8">
                <span className="text-gray-500">댓글 더 불러오는 중...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
