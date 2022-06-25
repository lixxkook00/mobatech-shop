import React from 'react'
import { Outlet } from 'react-router-dom'

import './style.scss'
import Sidebar from 'components/sidebar'
import SidebarMobile from 'components/sidebar-mobile'
import Header from 'components/header'
// import Firefly from 'components/firefly'
import MenuMobile from 'components/menu-mobile' 
// import DetailPopup from 'components/popup/detail'
// import Popup from 'components/popup'
const Layout = () => {
  return (
    <>
      {window.innerWidth < 1024 && <SidebarMobile />}
      {window.innerWidth < 1024 && <MenuMobile />}
      {/* <DetailPopup /> */}
      <main>
        {/* <div className="comming-soon">
          COMMING SOON !!!
        </div> */}
        {/* <Firefly /> */}
        {/* {window.innerWidth < 1024 && (
          <div className="logo">
          <img src={require('assets/img/logo.png')} alt="error png" />
          </div>
        )} */}
        <Header />
        <Outlet />
      </main>
      {window.innerWidth >= 1024 && <Sidebar />}
      {/* <Popup /> */}
    </>
  )
}

export default Layout
