import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../components/Comment';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ [3] URL에서 id 가져오기

  const handleGoBack = () => {
    navigate(-1);
  };

  // ✅ [2] 상태 정의
  const [place, setPlace] = useState(null); // 선택한 장소 정보
  const [isSaved, setIsSaved] = useState(false); // 저장 여부 상태

  // ✅ 댓글은 고정된 더미 데이터
  const [comments] = useState([
    { id: '1a2b3c', name: '윤혜원', comment: '맛있어요', rating: 5 },
    { id: '2d3e4f', name: '김철수', comment: '분위기도 좋고 맛도 최고예요!', rating: 4 },
    { id: '3g4h5i', name: '박영희', comment: '양이 좀 적은 게 아쉬웠어요.', rating: 3 },
    { id: '4j5k6l', name: '이민호', comment: '재방문의사 100%! 추천합니다.', rating: 5 },
    { id: '5m6n7o', name: '최수정', comment: '좋습니다', rating: 3 },
  ]);

  // ✅ [4] 상세 정보 가져오기 함수
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/places/${id}`);
      console.log('📦 불러온 데이터:', res.data);
      setPlace(res.data.place); // place 정보 저장
      setIsSaved(res.data.isSaved); // 저장 여부 저장
    } catch (error) {
      console.error('❌ 데이터 불러오기 실패:', error);
    }
  };

  // ✅ [5] 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchData(); // 페이지 열릴 때 데이터 요청
  }, [id]);

  // ✅ [6] 맛집 저장 요청 함수
  const saveMyList = async () => {
    try {
      // 스웨거 문서에 맞춰 place 키로 감싸서 보내기
      await axios.post('http://localhost:3000/users/places', {
        place: place,
      });
      console.log('✅ 저장 성공!');
    } catch (error) {
      console.error('❌ 저장 실패:', error);
    }
  };

  // ✅ [7] 저장 버튼 클릭 시 실행
  const handleClickMyList = async () => {
    if (isSaved) {
      const confirmGo = window.confirm('이미 저장된 맛집입니다.\n마이페이지로 이동할까요?');
      if (confirmGo) {
        navigate('/mypage'); // 마이페이지로 이동
      }
    } else {
      await saveMyList(); // 저장 API 호출
      await fetchData(); // 다시 불러와서 isSaved 업데이트
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] py-8">
      <div className="container mx-auto px-6">
        {/* 뒤로가기 버튼 */}
        <button onClick={handleGoBack} className="flex items-center text-gray-600 mb-6">
          <span className="text-2xl mr-2">←</span>
        </button>

        {/* 데이터 로딩 중 */}
        {!place ? (
          <p>로딩 중...</p>
        ) : (
          <div className="grid grid-cols-2 gap-8">
            {/* 좌측 이미지 */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-square">
                <img
                  src={`http://localhost:3000/${place.image?.src}`} // ✅ 서버 경로로 이미지 출력
                  alt={place.image?.alt || place.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 우측 정보 */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{place.name}</h1>
              <p className="text-gray-600 mb-8">{place.description}</p>

              {/* ✅ 저장 버튼 */}
              <button className="w-full bg-[#817D73] text-white py-3 rounded-lg mb-8" onClick={handleClickMyList}>
                {isSaved ? '❤️ 내가 저장한 맛집입니다' : '🤍 나의 맛집 목록에 저장하기'}
              </button>

              {/* ✅ 리뷰 작성 UI */}
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

                {/* ✅ 댓글 리스트 */}
                <div className="space-y-4">
                  {comments.map(comment => (
                    <Comment key={comment.id} name={comment.name} comment={comment.comment} rating={comment.rating} />
                  ))}
                </div>

                {/* ✅ 더보기 문구 */}
                <div className="text-center mt-8">
                  <span className="text-gray-500">댓글 더 불러오는 중...</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
