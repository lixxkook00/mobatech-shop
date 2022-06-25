import React from 'react'
import './CartMarket.scss'

export default function CartMarket({img}) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-3 col-6">
        <div className="itemCart">
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

                    {/* Date */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem2.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Date: 04/06/2022
                        </div>
                    </div>

                    {/* Type */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem3.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Type: NFT Baby
                        </div>
                    </div>

                    <div className="itemCart-info-line itemCart-info-line-price">
                        <div className="itemCart-info-line-icon itemCart-info-line-price-icon">
                            <img src={require('assets/img/coin.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text itemCart-info-line-price-text">
                            10.000 MEAT
                        </div>
                    </div>
                </div>

                <div className="itemCart-btns">
                    <div className="itemCart-btn centering">
                        Buy
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
