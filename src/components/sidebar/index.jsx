import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
// import PopupButton from 'components/popup/button'
import './style.scss'
// import Popup from 'components/popup/comingsoon'

const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <div className="sidebar">
      <div className="img">
        <img src={require('assets/img/logo.png')} alt="error png" />
      </div>
      <NavLink
        to="staking"
        className={'item' + (pathname === '/account' ? ' active' : '')}
      >
        Dashboard
        {/* <PopupButton /> */}
      </NavLink>
      <NavLink to="staking">My Assets</NavLink>
      <NavLink to="staking">Shop</NavLink>
      <NavLink className="hehe" to="staking">Staking</NavLink>

    </div>
  )
}

export default Sidebar
