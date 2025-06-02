import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <Link to="/" className="text-2xl font-bold text-gray-800 no-underline">
        TastyRoad
      </Link>

      {isLogin ? (
        <div className="flex items-center gap-4">
          <Link to="/main" className="px-4 py-2 text-gray-600 hover:text-gray-800 no-underline">
            맛집 구경하기
          </Link>
          <Link to="/mypage" className="px-4 py-2 text-gray-600 hover:text-gray-800 no-underline">
            마이페이지
          </Link>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <span role="img" aria-label="notifications">
              🔔
            </span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span role="img" aria-label="profile">
                👤
              </span>
            </div>
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Button types="outlineDark" onClick={handleLoginClick}>
            로그인
          </Button>
          <Button types="colorDark" onClick={handleSignupClick}>
            회원가입
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
