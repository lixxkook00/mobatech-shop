import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import './style.scss'
import Popup from 'components/popup/comingsoon'

const Sidebar = () => {
  const { pathname } = useLocation()
  return (
    <div className="sidebar">
      <div className="img">
        <img src={require('assets/img/logo.png')} alt="error png" />
      </div>
      <NavLink
        to="/"
        className={'item' + (pathname === '/account' ? ' active' : '')}
      >
        Dashboard
      </NavLink>
      {/* <NavLink to="/egg-baskets">
        Egg baskets
      </NavLink> */}
      <NavLink to="my-assets">My Assets</NavLink>
      <NavLink to="marketplace">Marketplace</NavLink>
      <NavLink to="staking">Staking</NavLink>
      {/* <NavLink to="vesting">Vesting</NavLink> */}
    </div>
  )
}

export default Sidebar
