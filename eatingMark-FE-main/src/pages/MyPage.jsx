import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
import Card from '../components/Card';
import axios from 'axios';

const MyPage = () => {
  const navigate = useNavigate();

  // ✅ API로 받아올 찜한 맛집 목록 저장
  const [allPlaces, setAllPlaces] = useState([]);

  // ✅ 데이터 불러오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/places');
      console.log('찜한 맛집 목록:', response.data);
      // ✅ 서버 응답에서 places 배열만 추출
      setAllPlaces(response.data.places);
    } catch (error) {
      console.error('찜한 맛집 불러오기 실패:', error);
    }
  };

  // ✅ 컴포넌트가 마운트될 때 한 번만 실행
  useEffect(() => {
    fetchData();
  }, []);

  // ✅ 좋아요(찜한 맛집) 삭제 함수
  const deleteData = async id => {
    try {
      await axios.delete(`http://localhost:3000/users/places/${id}`);
      console.log(`맛집 ${id} 삭제 성공`);
      await fetchData(); // 삭제 후 데이터 다시 불러오기
    } catch (error) {
      console.error(`맛집 ${id} 삭제 실패:`, error);
    }
  };

  // ✅ 카드 클릭 시 삭제 여부 확인 후 삭제 요청
  const handleCardClick = id => {
    const isConfirmed = window.confirm('정말로 이 맛집을 찜 목록에서 삭제하시겠습니까?');
    if (isConfirmed) {
      deleteData(id); // 삭제 진행
    }
  };

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
              key={place.id} // ✅ key 꼭 넣어주기!
              // ✅ 이미지 경로 앞에 서버 주소 붙여서 완성된 URL로 전달
              imageSrc={`http://localhost:3000/${place.image?.src || 'default.jpg'}`}
              name={place.title}
              // ✅ 카드 클릭 시 handleCardClick 실행되게 설정
              handleCardClick={() => handleCardClick(place.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyPage;
