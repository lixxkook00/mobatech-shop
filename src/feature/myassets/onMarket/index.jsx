import React from 'react'

import './style.scss'
import Popup from 'components/popup/comingsoon'
import CartOnMarket from 'components/CartOnMarket'

const OnMarket = () => {
  return (
    <div className="on-market-box">
      <div className="list-item">
        <div className="container">
          <div className="row">
            <CartOnMarket img={'R174 1.png'} />
            <CartOnMarket img={'R229 1.png'} />
            <CartOnMarket img={'R015 1.png'} />
            <CartOnMarket img={'R336 1.png'} />
            <CartOnMarket img={'R391.png'} />
            <CartOnMarket img={'R174 1.png'} />
            <CartOnMarket img={'R229 1.png'} />
            <CartOnMarket img={'R015 1.png'} />
            <CartOnMarket img={'R336 1.png'} />
            <CartOnMarket img={'R391.png'} />
            <CartOnMarket img={'R174 1.png'} />
            <CartOnMarket img={'R229 1.png'} />
          </div>
        </div>
      </div>
    </div>
  )
}

// function renderItemList() {
//   const items = []
//   for (var i = 0; i < 12; i++) {
//     items.push(
//       <CartOnMarket id={i * 6 } key={i * 6} />
//     )
//   }
//   return items
// }

// function renderItemList() {
//   const items = []
//   for (var i = 0; i < 2; i++) {
//     const itemRow = []
//     for (var j = 0; j < 6; j++) {
//       itemRow.push(<Item id={i * 6 + j} />)
//     }
//     items.push(<div className="row">{itemRow}</div>)
//   }
//   return items
// }

// const Item = ({ id }) => {
//   return (
//     <div className="item col-6 col-sm-2" key={id}>
//       <div className="wrapper" to={'/marketplace/' + id}>
//         <div className="title">
//           <img src={require('assets/img/title.png')} alt="error png" />
//           <span>ID: 3165</span>
//         </div>
//         <div className="img">
//           <img src={require('assets/img/item.png')} alt="error png" />
//         </div>
//         <div className="cancel-button">
//           <button>
//             Cancel
//             <Popup />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

export default OnMarket
