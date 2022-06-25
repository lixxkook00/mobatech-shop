import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

import './style.scss'

const MyAssets = () => {
  const { pathname } = useLocation()
  return (
    <div id="myassets">
      <div className="tab">
        <NavLink
          to="not-on-market"
          className={'item' + (pathname === '/my-assets' ? ' active' : '')}
        >
          Not on market
        </NavLink>
        <NavLink to="on-market" className="item">
          On the market
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default MyAssets
