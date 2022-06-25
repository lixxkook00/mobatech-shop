import React from 'react'
import './CartStaking.scss'

export default function CartStaking({img,setClaimPopup,itemInfo,setDetails}) {
    console.log('test',itemInfo.data);
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-6">
        <div className="itemCart itemCart-staking">
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
                            Rarity: {itemInfo.data.rarity}
                        </div>
                    </div>

                    {/* Date */}

                    {/* <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem2.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Date: 04/06/2022
                        </div>
                    </div> */}

                    {/* Type */}
                    <div className="itemCart-info-line">
                        <div className="itemCart-info-line-icon">
                            <img src={require('assets/img/gem3.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text">
                            Type: NFT Genesis
                        </div>
                    </div>

                    {/* <div className="itemCart-info-line itemCart-info-line-price">
                        <div className="itemCart-info-line-icon itemCart-info-line-price-icon">
                            <img src={require('assets/img/coin.png')} alt="error png" />
                        </div>
                        <div className="itemCart-info-line-text itemCart-info-line-price-text">
                            10.000 MEAT
                        </div>
                    </div> */}
                </div>

                <div className="itemCart-btns" onClick={async () =>  {await setDetails(itemInfo.data);await setClaimPopup(true) }}>
                    <div className="itemCart-btn centering">
                        Stake
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
