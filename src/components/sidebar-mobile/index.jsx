import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './style.scss'
import { toggleMenu } from 'selectors'
import globalSlice from 'reducers/globalSlice'
import Popup from 'components/popup/comingsoon'

const SidebarMobile = () => {
  const dispatch = useDispatch()
  function handleItem() {
    dispatch(globalSlice.actions.toggleMenu(false))
  }
  const state = useSelector(toggleMenu)
  return (
    <>
      {state && (
        <div className="sidebar-mobile">
          <div className="list">
            <NavLink onClick={handleItem} className="item" to="/">
              Dashboard
            </NavLink>
            {/* <NavLink onClick={handleItem} className="item" to="/egg-baskets">
              <Popup />
              Egg baskets
            </NavLink> */}
            <NavLink onClick={handleItem} className="item" to="/my-assets">
              My Assets
            </NavLink>
            <NavLink onClick={handleItem} className="item" to="/marketplace">
              Marketplace
            </NavLink>
            <NavLink onClick={handleItem} className="item" to="/staking">
              Staking
            </NavLink>
            {/* <NavLink onClick={handleItem} className="item" to="/vesting">
              Vesting
            </NavLink> */}
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarMobile
