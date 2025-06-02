// src/pages/Homepage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button'; // 경로는 폴더 구조에 맞게 수정!

const Homepage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-[#f6f4ef]">
      {/* 상단 헤더 */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#817D73]">
        <h1 className="text-white font-bold text-lg">TastyRoad</h1>
        <div className="space-x-2">
          <Button types="outlineLight" onClick={goToLogin}>
            Log In
          </Button>
          <Button types="colorLight" onClick={goToSignup}>
            Start Free Trial
          </Button>
        </div>
      </header>

      {/* 메인 본문 */}
      <main className="flex flex-col md:flex-row items-center justify-between px-10 py-16 max-w-6xl mx-auto">
        {/* 왼쪽 설명 영역 */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">TastyRoad와 함께 '진짜 맛집'을 발견해보세요!</h2>
          <p className="text-gray-700 leading-relaxed">
            사용자들이 직접 방문하고 검증한 진짜 맛집 정보만을 담았어요.
            <br />
            별점, 리뷰, 위치 기반 추천까지 – 내 취향에 꼭 맞는 식당을 쉽게 찾고,
            <br />
            잊고 싶지 않은 그 순간을 기록해보세요.
          </p>
          <div className="flex gap-4">
            <Button types="outlineDark" onClick={goToLogin}>
              Log In
            </Button>
            <Button types="colorDark" onClick={goToSignup}>
              Signup
            </Button>
          </div>
        </div>

        {/* 오른쪽 이미지 영역 */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src="/logo.svg" alt="TastyRoad Logo" className="w-64" />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
