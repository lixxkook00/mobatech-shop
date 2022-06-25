import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

import './style.scss'
import 'assets/scss/tab.scss'


const Dashboard = () => {
  const { pathname } = useLocation()
  return (
    <div id="dashboard">
      <div className="tab">
        {/* <NavLink
          to="account"
          className={'item' + (pathname === '/' ? ' active' : '')}
        >
          Account
        </NavLink> */}
        {/* <NavLink to="leaderboard" className="item">
          <Popup />
          Inventory
        </NavLink>
        <NavLink to="staked" className="item">
          <Popup />
          Selling
        </NavLink> */}
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard
