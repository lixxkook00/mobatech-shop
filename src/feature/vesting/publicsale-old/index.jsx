import React from 'react'

import './style.scss'

const PublicSale = () => {
  return (
    <>
      <div className="container box-vesting">
        <div>
          <h1>MetaSpets Fan's Public Sales Ended</h1>
          <div className="total-raise">
            Successfully Raised :<span>$45K</span>
          </div>
          <div className="text">
            MetaSpets wishes to offer our lucky and kind tamers exciting
            benefits as a gesture of appreciation to your support.
          </div>
        </div>
      </div>
      <div className="box-around">
        <div className="item">
          <div className="label">
            Whitelist Round
            <span>10:00 - 14:00 UTC, April 28th</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '100%' }}></div>
          </div>
          <div className="detail">
            0%
            <span>7.14MSP - 1BUSD</span>
          </div>
        </div>
        <div className="item">
          <div className="label">
            Whitelist Round
            <span>10:00 - 14:00 UTC, April 28th</span>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: '100%' }}></div>
          </div>
          <div className="detail">
            0%
            <span>7.14MSP - 1BUSD</span>
          </div>
        </div>
      </div>
      <div className="summary">
        <div className="item">
          <h3>$0.045</h3>
          <span>MSP price</span>
        </div>
        <div className="item">
          <h3>$0.045</h3>
          <span>MSP price</span>
        </div>
        <div className="item">
          <h3>$0.045</h3>
          <span>MSP price</span>
        </div>
      </div>
      <div className="box-sale">
        <div className="content">
          <p>There are two rounds:</p>
          <p>
            - People who join the Whitelist will have the privilege to purchase
            first.
          </p>
          <p>
            - After the 1st round is over, the 2nd round will start with first
            come first serve.
          </p>
          <p>
            Make sure that you have at least 100 BUSD in your wallet to buy MSP.
          </p>

          <p>Each user will be equally distributed 2222.22 MSP.</p>
          <p>
            Purchased MSP will be unlocked in stages in turn: 20% - 16% - 16% -
            16% - 16% - 16%.
          </p>
          <p>
            <br />
            Your next claiming in May 29, 2022
          </p>
        </div>
        <div className="img">
          <img src={require('assets/img/item2.png')} alt="error png" />
        </div>
      </div>
    </>
  )
}

export default PublicSale
