import React from 'react'
import { useParams } from 'react-router-dom'

import './style.scss'
import Items from 'assets/data/items.json'
import Popup from 'components/popup/comingsoon'
// import SetItems from 'assets/data/set-items.json'

const Detail = () => {
  const { itemId } = useParams()
  const currentItem = Items.find((item) => item.id === Number(itemId))
  return (
    <div id="detail">
      <div className="tab">
        <div className="item">
          Egg basket
          <Popup />
        </div>
        <div className="item">
          Item
          <Popup />
        </div>
      </div>
      <div className="title-box">
        <div className="container">
          <h3>{currentItem.name}</h3>
        </div>
      </div>
      <div className="box-detail">
        <div className="container">
          <div className="left">
            <div className="img">
              <img
                src={require('assets/img/item-detail.png')}
                alt="error png"
              />
            </div>
            <div className="price">
              <img src={require('assets/img/coin.png')} alt="error png" />
              <span>490 MSP</span>
            </div>
            <div className="button">
              <button>
                Buy
                <Popup />
              </button>
            </div>
          </div>
          <div className="right">
            <h3>About</h3>
            <div className="content">
              <div className="item">
                <label>Owner: </label>
                <div className="text">
                  0x490b448ecd1d6609a506dc7cd14966ed0fe888c6
                </div>
              </div>
              <div className="item">
                <label>ID Basket: </label>
                <span>#{currentItem.id}</span>
              </div>
            </div>
            <h3>Description</h3>
            <div className="content">
              <div className="description">{currentItem.introduction}</div>
              <hr />
              <div className="item special">
                <label>Weapon Pow: </label>
                <span>
                  A flurry of demns 3x3 (Continuously issued 3Wave attack, per
                  wave 3Bullet. No one can stop you)
                </span>
              </div>
              {(currentItem.health || currentItem.health === 0) && (
                <div className="item">
                  <label>Health: </label>
                  <span>{currentItem.health}</span>
                </div>
              )}
              {(currentItem.attack || currentItem.attack === 0) && (
                <div className="item">
                  <label>Attack: </label>
                  <span>{currentItem.attack}</span>
                </div>
              )}
              {(currentItem.defense || currentItem.defense === 0) && (
                <div className="item">
                  <label>Defense: </label>
                  <span>{currentItem.defense}</span>
                </div>
              )}
              {(currentItem.speed || currentItem.speed === 0) && (
                <div className="item">
                  <label>Speed: </label>
                  <span>{currentItem.speed}</span>
                </div>
              )}
              {(currentItem.luck || currentItem.luck === 0) && (
                <div className="item">
                  <label>Luck: </label>
                  <span>{currentItem.luck}</span>
                </div>
              )}
              {(currentItem.pet_potential ||
                currentItem.pet_potential === 0) && (
                <div className="item">
                  <label>Pet Potential: </label>
                  <span>{currentItem.pet_potential}</span>
                </div>
              )}
              {(currentItem.armor_break || currentItem.armor_break === 0) && (
                <div className="item">
                  <label>Armor Break: </label>
                  <span>{currentItem.armor_break}</span>
                </div>
              )}
              {(currentItem.critical || currentItem.critical === 0) && (
                <div className="item">
                  <label>Critical: </label>
                  <span>{currentItem.critical}</span>
                </div>
              )}
              {(currentItem.crit_resist || currentItem.crit_resist === 0) && (
                <div className="item">
                  <label>Crit Resist: </label>
                  <span>{currentItem.crit_resist}</span>
                </div>
              )}
              {(currentItem.attack_stone || currentItem.attack_stone === 0) && (
                <>
                  <div className="item">
                    <label>Attack Stone: </label>
                    <span>{currentItem.attack_stone}</span>
                  </div>
                  <div className="item">
                    <label>Health Stone: </label>
                    <span>{currentItem.health_stone}</span>
                  </div>
                  <div className="item">
                    <label>Defense Stone: </label>
                    <span>{currentItem.defense_stone}</span>
                  </div>
                  <div className="item">
                    <label>Infinity Stone: </label>
                    <span>{currentItem.infinity_stone}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
