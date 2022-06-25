import React,{useState,useEffect} from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './style.scss'

const Staking = () => {
  const { pathname } = useLocation()

  const [toggle,setToggle] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setToggle(false)
    },1900)
  },[toggle])

  return (
    <div id="staking">
      <div className="tab">
        <div onClick={ () => {setToggle(true)}}
          to="account"
          className={'item' + (pathname === '/staking' ? ' active' : '')}
        >
          Staking
          {/* <PopupButton /> */}
        </div>

        <div onClick={ () => {setToggle(true)}} to="account" className="item">
          {/* <PopupButton /> */}
          Staked
        </div>

        <div onClick={ () => {setToggle(true)}} to="account" className="item">
          Leaderboard
        </div>

        
        {
          toggle
          &&
          <div className="comming-soon">
            COMMING SOON
          </div>
        }
      </div>
      <Outlet />
    </div>
  )
}

export default Staking
