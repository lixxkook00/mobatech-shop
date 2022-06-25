import React from 'react'

import './style.scss'
import Pagination from 'components/pagination'

const Leaderboard = () => {
  return (
    <>
      <div className="leaderboard-top container">
        <div className="item top1">
          {/* <div className="addr">0x13...35a70d</div>
          <div className="point">Point: 2088000</div> */}
        </div>
        <div className="item top2">
          {/* <div className="addr">0x13...35a70d</div>
          <div className="point">Point: 2088000</div> */}
        </div>
        <div className="item top3">
          {/* <div className="addr">0x13...35a70d</div>
          <div className="point">Point: 2088000</div> */}
        </div>
      </div>
      <div className="container">
        <div className="input">
          <div className="wrapper">
            <input type="text" placeholder="NFT ID" />
            <img src={require('assets/img/search.png')} alt="error png" />
          </div>
        </div>
      </div>
      {/* <div className="list-data container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Wallet Address</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>6</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>7</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>8</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>9</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
            <tr>
              <td>10</td>
              <td>0x1389...a70d</td>
              <td>2088000</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      {/* <Pagination /> */}
    </>
  )
}

export default Leaderboard
