import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import './style.scss'

const Vesting = () => {
  const { pathname } = useLocation()
  return (
    <div id="vesting">
      <div className="tab">
        <NavLink
          to="private-sale"
          className={'item' + (pathname === '/vesting' ? ' active' : '')}
        >
          Private sale
        </NavLink>
        <NavLink to="presale" className="item">
          Pre-Sale
        </NavLink>
        <NavLink to="public-sale" className="item">
          Public Sale
        </NavLink>
        <NavLink to="airdrop" className="item">
          Airdrop
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Vesting
