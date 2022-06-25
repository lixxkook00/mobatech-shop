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
            <a className="item">
              Dashboard
            </a>
            {/* <a className="item">
              <Popup />
              Egg baskets
            </a> */}
            <a className="item">
              My Assets
            </a>
            <a className="item">
              Shop
            </a>
            <a className="item">
              Staking
            </a>
            {/* <a className="item">
              Vesting
            </a> */}
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarMobile
