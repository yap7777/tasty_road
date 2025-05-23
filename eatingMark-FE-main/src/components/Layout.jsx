import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      {/* Header란 화면 맨 위에 항상 나오는 고정 메뉴 같은것 예를들면 홈,마이페이지,로그인 같은 메뉴 버튼들 */}
      {/* <Header /> */}
      {/* Outlet은 페이지 내용이 바뀌는 공간임 */}
      <Outlet>Outlet</Outlet>
    </div>
  );
}

export default Layout;
