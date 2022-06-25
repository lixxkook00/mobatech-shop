import React from 'react'

import './style.scss'

const ComingSoon = () => {
  return (
    <div className="box">
      <div className="left item">
        <img src={require('assets/img/item2.png')} alt="error png" />
      </div>
      <div className="right item">
        <h1>About</h1>
        <p>
          Vested balance: <span className="green-color">0</span> MSP
        </p>
        <p>
          Total MSP claimed: <span className="green-color">0</span>
        </p>
        <p>Next claimable on:...</p>
        <p>
          Amount of MSP can claim: <span className="green-color">0</span>
        </p>
        <p>
          Distribution will start 1 day after listing, 6% of the total tokens
          purchased will be unlocked at TGE, and Cliff for 2 months after TGE.
          Then, <span className="yellow-color">5%</span> monthly unlock.
        </p>
      </div>
    </div>
  )
}

export default ComingSoon
