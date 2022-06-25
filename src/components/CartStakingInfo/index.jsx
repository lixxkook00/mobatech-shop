import React from 'react'
import './CartStakingInfo.scss'

export default function CartStakingInfo({img}) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-3 col-6">
        <div className="itemCart stackingInfo">
            <div className="itemCart-img centering">
                <img src={require(`assets/img/${img}`)} alt="error png" />
            </div>
            <div className="itemCart-content">

                <div className="itemCart-info">
                    {/* Rarity */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem1.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Rarity: Common
                        </div>
                    </div>

                    {/* Stake Time */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem2.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Stake Time: 04/06/2022
                        </div>
                    </div>

                    {/* Time Left */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem3.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Time Left: 01:30:59s
                        </div>
                    </div>

                    {/* Claimable */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem1.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Claimable : 10 MEAT
                        </div>
                    </div>

                    {/* Rate */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem1.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Rate : 10%
                        </div>
                    </div>

                    {/* TUP */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem1.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text tup">
                            TUP : 10%
                        </div>
                    </div>

                </div>

                <div className="itemCart-btns">
                    <div className="itemCart-btn centering">
                        Unstake
                    </div>
                    <div className="itemCart-btn centering">
                        Claim
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
