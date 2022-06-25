import React,{useEffect, useState} from 'react'

import './style.scss'
// import Popup from 'components/popup/comingsoon'
// import { useSelector } from 'react-redux'
import {getBalance,getBalanceBUSD} from '../../utils/Wallet'


import { connectWallet } from '../../utils/connectWallet'

let dollarUSLocale = Intl.NumberFormat('en-US');

const Header = () => {

  const [wallletAcount,setWallletAcount] = useState('')

  const [balanceMEAT,setBalanceMEAT] = useState(0)
  const [balanceBUSD,setBalanceBUSD] = useState(0)

  const handleResizeWalletAddress = (address) => {
    return address.substr(0,5) + "..."+ address.substr(-4,4)
  }

  useEffect(() => {
    handleConnectWallet()
    // setBalanceMEAT(dollarUSLocale.format(getBalance().parseInt()))
    let balanceMEAT, balanceBUSD
    async function load() {
      balanceMEAT = await getBalance();
      balanceBUSD = await getBalanceBUSD();
      setBalanceMEAT(dollarUSLocale.format(balanceMEAT))
      setBalanceBUSD(dollarUSLocale.format(balanceBUSD))
    }
    load()

  },[])



  const handleConnectWallet = () => {
    let wallletAddress
    async function load() {
        wallletAddress = await connectWallet();
        await setWallletAcount(handleResizeWalletAddress(wallletAddress))
    }
    load()
  }
  
  return (
    <header>
      <div className="hd-items">
        <div className="item">
          <img src={require('assets/img/Meat icon.png')} alt="error png" />
          <span className="primary-tex-yellow font-weight-700">{balanceMEAT}</span>
        </div>
        <div className="item">
          <img src={require('assets/img/coin2.png')} alt="error png" />
          <span className="primary-tex-yellow font-weight-700">{balanceBUSD}</span>
        </div>
      </div>
      <div className="button" onClick={() => handleConnectWallet()}>
        {
          wallletAcount === ''
          ?
          'CONNECT WALLET'
          :
          wallletAcount
        }
        {/* <Popup /> */}
      </div>
    </header>
  )
}

export default Header
