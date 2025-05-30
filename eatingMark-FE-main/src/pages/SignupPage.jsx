import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { useSupabaseAuth } from '../supabase/auth';

function SignupPage() {
  const [emailInput, setEmailInput] = useState('');
  const [nicknameInput, setNicknameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordCheckInput, setPasswordCheckInput] = useState('');

  const navigate = useNavigate();

  const { signUp } = useSupabaseAuth();

  const handleClickSignupButton = async () => {
    const isPasswordMatch = passwordInput === passwordCheckInput;

    if (isPasswordMatch) {
      // ✅ [4. 회원가입 기능 구현하기 - 시작]
      const { error } = await signUp({
        email: emailInput,
        password: passwordInput,
      });

      if (error) {
        alert(`❌ 회원가입 실패: ${error.message}`);
        return;
      }
      // ✅ [4. 회원가입 기능 구현하기 - 끝]

      // ✅ 비밀번호가 일치할 경우
      alert('✅ 회원가입 성공! 로그인 페이지로 이동합니다.');
      navigate('/login'); // 로그인 페이지로 이동
    } else {
      // ❌ 비밀번호가 다를 경우
      alert('❌ 비밀번호가 일치하지 않습니다!');
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
      <Input input={emailInput} setInput={setEmailInput} label="email" placeholder="이메일을 입력하세요" type="email" />
      <Input
        input={nicknameInput}
        setInput={setNicknameInput}
        label="Nickname"
        placeholder="닉네임을 입력하세요"
        type="text"
      />
      <Input
        input={passwordInput}
        setInput={setPasswordInput}
        label="Password"
        placeholder="비밀번호를 입력하세요"
        type="password"
      />
      <Input
        input={passwordCheckInput}
        setInput={setPasswordCheckInput}
        label="Password Check"
        placeholder="비밀번호를 다시 입력하세요"
        type="password"
      />
      <button
        onClick={handleClickSignupButton}
        className="w-full bg-white rounded-md px-4 py-2 text-gray-800 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        회원가입
      </button>
    </div>
  );
}

export default SignupPage;
