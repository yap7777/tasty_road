import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input'; // input 컴포넌트 불러오기
import { useSupabaseAuth } from '../supabase/auth'; // login 함수 불러오기

function LoginPage() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();
  const { login } = useSupabaseAuth();

  const handleClickLoginButton = async () => {
    const { error } = await login({
      email: emailInput,
      password: passwordInput,
    });

    if (error) {
      alert(`❌ 로그인 실패: ${error.message}`);
      return;
    }

    alert('✅ 로그인 성공! 메인 페이지로 이동합니다.');
    navigate('/main');
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">로그인</h2>

      <Input
        label="이메일"
        type="email"
        input={emailInput}
        setInput={setEmailInput}
        placeholder="이메일을 입력하세요"
      />

      <Input
        label="비밀번호"
        type="password"
        input={passwordInput}
        setInput={setPasswordInput}
        placeholder="비밀번호를 입력하세요"
      />

      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleClickLoginButton}>
        로그인
      </button>
    </div>
  );
}

export default LoginPage;
