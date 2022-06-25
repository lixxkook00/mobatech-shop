import React, { useState, useEffect } from 'react'
import { Stake } from '../../../utils/Staking'


import './style.scss'
// import Icons from 'assets/icons'
// import Popup from 'components/popup/comingsoon'
import CartStaking from 'components/CartStaking'
import { getRewardsByRarity } from '../../../utils/Staking'
import { getOwnNFT } from 'utils/NFT'

const Account = () => {

  const [claimPopup, setClaimPopup] = useState(false);

  const [tokenID, setTokenID] = useState(1);

  const [rarity,setRarity] = useState(1);

  const [rewards, setRewards] = useState(0);
  const [listItem, setListItem] = useState([]);

  const [details, setDetails] = useState({});

  useEffect(() => {
    async function load() { 
      let rewards = await getRewardsByRarity(rarity);
      let list = await getOwnNFT();
      console.log(list);
      list.map(i => { 
        console.log(i);
      })
      await setListItem(list);
      
      await setRewards(rewards);
    }
    load();
  }, [])

  useEffect(() => { 
    console.log('details',details);
  },[details]);

  const Staking = async () => {
    let body = {
      idToken: tokenID,
      monthlyRewards: rewards,
      ref: "0x00000000000"
    }
    const stake = await Stake(body);
    console.log('staking...', stake);
  }


  return (
    <>
      <div className="box-staking">
        <div className="container ">
          <div className="row staking-account">
            <div className="col-xl-8">
              <div className="staking-wrapper">
                <div className="row">
                  {listItem.map((item,idx) => { 
                    return <CartStaking setDetails={setDetails} setClaimPopup={setClaimPopup} itemInfo={item} key={idx} img={'R174 1.png'} />
                  })}
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="staking-wrapper mb-5">
                <div className="item right">
                  <h1 className="primary-tex-yellow">Token Staked</h1>
                  <div className="coin">
                    <span className="primary-tex-yellow font-weight-700">0</span>
                    <span className="primary-tex-gray font-weight-700 font-size-18">OBA</span>
                  </div>
                </div>
                <div className="item right">
                  <h1 className="primary-tex-yellow">All partners</h1>
                  <div className="item-content">
                    <div className="">
                      <div className="coin">
                        <span className="primary-tex-yellow font-weight-700">0</span>
                        <span className="primary-tex-gray font-weight-700 font-size-18">
                          <i className="fa-solid fa-people-group"></i>
                        </span>
                      </div>
                    </div>
                    <div className="primary-btn" >Reflink</div>
                  </div>
                </div>
                <div className="item right">
                  <h1 className="primary-tex-yellow">Team funds in total</h1>
                  <div className="item-content">
                    <div className="">
                      <div className="coin">
                        <span className="primary-tex-yellow font-weight-700">0</span>
                        <span className="primary-tex-gray font-weight-700 font-size-18">
                          OBA
                        </span>
                      </div>
                    </div>
                    <div className="primary-btn" >Claim</div>
                  </div>
                </div>
                <div className="item right">
                  <h1 className="primary-tex-yellow">Direct commissions</h1>
                  <div className="item-content">
                    <div className="">
                      <div className="coin">
                        <span className="primary-tex-yellow font-weight-700">0</span>
                        <span className="primary-tex-gray font-weight-700 font-size-18">
                          OBA
                        </span>
                      </div>
                    </div>
                    <div className="primary-btn" >Claim</div>
                  </div>
                </div>
                <div className="item right">
                  <h1 className="primary-tex-yellow">Token rewards by stake</h1>
                  <div className="item-content">
                    <div className="">
                      <div className="coin">
                        <span className="primary-tex-yellow font-weight-700">0</span>
                        <span className="primary-tex-gray font-weight-700 font-size-18">
                          OBA
                        </span>
                      </div>
                    </div>
                    <div className="primary-btn" >Claim</div>
                  </div>
                  {/* <div className="primary-btn" onClick={() => setClaimPopup(true)}>Claim</div>   */}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* claim popup */}
      {
        claimPopup
        &&
        <div className="claim" onClick={() => setClaimPopup(false)}>
          <div className="claim-content">
            <div className="claim-close" onClick={() => setClaimPopup(false)}>
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <div className="claim-wrapper" onClick={(e) => e.stopPropagation()}>
              <div className="claim-content-title primary-tex-yellow">
                TOKEN ID : {details.idToken}
              </div>


              <div className="claim-content-line">
                <div className="claim-content-line-name">
                  Rarity
                </div>
                <div className="claim-content-line-content">
                  {details.rarity}
                </div>
              </div>

              <div className="claim-content-line">
                <div className="claim-content-line-name">
                  Stake Date
                </div>
                <div className="claim-content-line-content">
                  {new Date(Date.now()).toString()}
                </div>
              </div>

              <div className="claim-content-line">
                <div className="claim-content-line-name">
                  Daily Rewards :
                </div>
                <div className="claim-content-line-content">
                  1 Days
                </div>
              </div>

              <div className="claim-content-line">
                <div className="claim-content-line-name">
                  Monthly Rewards :
                </div>
                <div className="claim-content-line-content">
                  {rewards} OBA
                </div>
              </div>

              <div className="claim-content-line">
                <div className="claim-content-line-name">
                  Referral
                </div>
                <div className="claim-content-line-content primary-tex-yellow">
                  0x00...000
                </div>
              </div>
              <div className="claim-content-btn primary-btn font-weight-700" onClick={() => Staking()}>
                Confirm
              </div>

            </div>

          </div>
        </div>
      }
    </>
  )
}

export default Account
