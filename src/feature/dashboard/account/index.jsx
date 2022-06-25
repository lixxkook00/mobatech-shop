import React,{useState, useEffect} from 'react'
// link router
import {useSearchParams} from 'react-router-dom'

import './style.scss'
import Icons from 'assets/icons'
// import { account } from '../../../reducers/globalSlice'
import { useSelector } from 'react-redux'
// import store from 'store'

import { connectWallet } from '../../../utils/connectWallet'


const Account = () => {
  const [copied,setCopied] = useState(false);
  const {account} = useSelector(store => store.global);
  const [searchParams, setSearchParams] = useSearchParams();

  // handle get and save ref link to local storage
  const handleQueryParams = () => {
    const param = searchParams.get('ref');

    if (param) {
      const refLink = searchParams.get('ref') !== null ? searchParams.get('ref') : "";
    
      localStorage.setItem('refLink', refLink);

      // 👇️ delete each query param
      searchParams.delete('ref');

      // 👇️ update state after
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    // get value of ref link with console.log(localStorage.getItem('refLink'));
    handleQueryParams()
  },[])
  
  const valuable = {
    // address: '0x307e415778f2aa486e20387a8ecddf69c68783fe',
    address: account,
    reference_link: 'https://marketplace.cybertigers.io/?ref='+account,
  }

  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    },1000)
  },[copied])

  function handleClipBoard(type) {
    switch (type) {
      case 'address':
        navigator.clipboard.writeText('https://sqfgame.com/buy-token/'+valuable.address)
        break
      case 'reference_link':
        navigator.clipboard.writeText(valuable.reference_link)
        break
    }
    setCopied(true)
  }
  
  return (
    <div className="account">
      <div className="container">

        <h3 className="primary-tex-yellow" >
          My Wallet
        </h3>
        <div className="content content-my-wallet">
          <div className="content-wrap">

            <div className="item">
              <label>Level:</label>
              <div className="item-content">
                <span className="primary-tex-gray">0</span>
                <span className="unit primary-tex-yellow "></span>  
              </div>
            </div>

            <div className="item">
              <label>Balance:</label>
              <div className="item-content">
                <span className="primary-tex-gray">0</span>
                <span className="unit primary-tex-yellow "> MEAT</span>  
              </div>
            </div>

            <div className="item">
              <label>Balance Genesis:</label>
              <div className="item-content">
                <span className="primary-tex-gray">0</span>
                <span className="unit primary-tex-yellow "> NFTs</span>  
              </div>
            </div>

            <div className="item">
              <label>Balance Baby:</label>
              <div className="item-content">
                <span className="primary-tex-gray">0</span>
                <span className="unit primary-tex-yellow "> NFTs</span>  
              </div>
            </div>

            <div className="item2" >
              <label>Address:</label>
              <span className="primary-tex-yellow ml-10 ref">{valuable.address}</span>
              <span className="btn-copy" onClick={() => handleClipBoard('address')}>
                <Icons.Copy height={'20'} />
              </span>
            </div>

            <div
              className="item2"
              
            >
              <label>Reference Link:</label>
              <span className='primary-tex-yellow ml-10 ref'>{valuable.reference_link}</span>
              <span className="btn-copy" onClick={() => handleClipBoard('reference_link')}>
                <Icons.Copy height={'20'} />
              </span>
            </div>

          </div>
        </div>

        <h3 className="primary-tex-yellow">Activity History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>


        <h3 className="primary-tex-yellow">Buy Token History</h3>
        <div className="content">
          <div className="item">No data</div>
        </div>

        {
          copied
          &&
          (
             <div className="popup-copied">
              <div className="popup-copied-wrap">
                COPIED!
              </div>
            </div>
          )
        }

        {/* <h3>Overview</h3>
        <div className="content overview">
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/weapon.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/outfit.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/stone.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
          <div className="item">
            <img
              src={require('assets/img/dashboard-account/pet.png')}
              alt="error png"
            />
            <span> 0</span>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Account
