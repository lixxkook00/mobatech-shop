import React from 'react'
import { Outlet } from 'react-router-dom'

import './style.scss'
import Sidebar from 'components/sidebar'
import SidebarMobile from 'components/sidebar-mobile'
import Header from 'components/header'
// import Firefly from 'components/firefly'
import MenuMobile from 'components/menu-mobile' 
import DetailPopup from 'components/popup/detail'

const Layout = () => {
  return (
    <>
      {window.innerWidth >= 1024 && <Sidebar />}
      {window.innerWidth < 1024 && <SidebarMobile />}
      {window.innerWidth < 1024 && <MenuMobile />}
      <DetailPopup />
      <main>
        {/* <Firefly /> */}
        {/* {window.innerWidth < 1024 && (
          <div className="logo">
            <img src={require('assets/img/logo.png')} alt="error png" />
          </div>
        )} */}
        <Header />
        <Outlet />
      </main>
    </>
  )
}

export default Layout
