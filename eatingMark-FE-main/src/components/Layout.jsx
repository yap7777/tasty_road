import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="layout">
      <Header></Header>
      <Outlet>Outlet</Outlet>
    </div>
  );
}

export default Layout;
