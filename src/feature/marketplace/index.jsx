// import { Link } from 'react-router-dom'
import React, { useRef, useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'

// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import './style.scss'
import Pagination from 'components/pagination'
import Icons from 'assets/icons'
import CartMarket from 'components/CartMarket'
// import Items from 'assets/data/items.json'
// import detailPopupSlice from 'components/popup/detail/slice'
// import Popup from 'components/popup/comingsoon'

const MarketPlace = () => {

   // Handle Modal Nav Filter

    const [valueType,setValueType] = useState("Weapon")

    const onChangeValue = (event) => {
      console.log(event.target.value);
    }


    const [stateNav, setStateNav] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    }); 

    const modalCartNav = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          // onClick={toggleDrawerNav(anchor, false)}
          onKeyDown={toggleDrawerNav(anchor, false)}
        >
            <div className="filter-tab">
              <div className="closebtn" onClick={toggleDrawerNav(anchor, false)}>
                <Icons.XMark height={'16'} />
              </div>
              <div className="filter-tab-content">
                <div className="title ">
                  Properties
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Common" name="Properties"/> Common
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Rare" name="Properties" /> Rare
                </div>
                <div className="filter-tab-item">
                  <input type="radio" value="Rare" name="Properties" /> Super Rare
                </div>
              </div>

              <div className="filter-tab-content">
                <div className="title">
                  Type
                </div>

                <div className="filter-tab-item">
                  <input type="radio" value="Genesis" name="Type" onClick={() => setValueType("Genesis")} checked={valueType=="Genesis"}/> Genesis
                </div>

                <div className="filter-tab-item">
                  <input type="radio" value="Baby" name="Type" onClick={() => setValueType("Baby")} checked={valueType=="Baby"}/> Baby
                </div>
              </div>

            </div>
        </Box>
    );

    const toggleDrawerNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setStateNav({ ...stateNav, [anchor]: open });
    };

  return (
    <div id="marketplace">
      <div className="main">

        {/* Modal Nav Mobile Menu*/}
        <Drawer
            anchor={'right'}
            open={stateNav['right']}
            onClose={toggleDrawerNav('right', false)}
        >
            {modalCartNav('right')}
        </Drawer>

        <div className="summary container">
          <div className="row">

            <div className="col-xl-4 col-12">
              <div className="d-flex container justify-content-center">
                <div className="item cart-title">
                  <span className="img">
                    <img src={require('assets/img/summary.png')} alt="error png" />
                  </span>
                  <span className="infor">
                    <h4>Total volume</h4>
                    <span className="primary-tex-yellow">10.000 MEAT</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-12">
              <div className="d-flex container justify-content-center">
               <div className="item cart-title">
                  <span className="img">
                    <img src={require('assets/img/summary.png')} alt="error png" />
                  </span>
                  <span className="infor ">
                    <h4>MEAT price</h4>
                    <span className="primary-tex-yellow">
                      0.18 BUSD
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-12">
              <div className="d-flex container justify-content-center">
               <div className="item cart-title">
                  <span className="img">
                    <img src={require('assets/img/summary.png')} alt="error png" />
                  </span>
                  <span className="infor ">
                    <h4>Total NFTs supply</h4>
                    <span className="primary-tex-yellow">
                      0.18 TIGER
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="filter">
                <div className="filter-title primary-tex-gray font-weight-700 font-size-18" onClick={toggleDrawerNav('right', true)}>
                  Filter
                </div>
                <div className="select">
                  <Icons.AngleDown height={'10'} />
                  <select>
                    <option value="lowest">Lowest Price</option>
                    <option value="highest">Highest Price</option>
                  </select>
                </div>
                <div className="input">
                  <input type="text" placeholder="Egg basket ID" />
                  <img src={require('assets/img/search.png')} alt="error png" />
                </div>
                <div className="filter-icon" onClick={toggleDrawerNav('right', true)}>
                  <i className="fa-solid fa-filter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-item">
          <div className="container">
            <div className="row">
              <CartMarket img={'R174 1.png'} />
              <CartMarket img={'R229 1.png'} />
              <CartMarket img={'R015 1.png'} />
              <CartMarket img={'R336 1.png'} />
              <CartMarket img={'R391.png'} />
              <CartMarket img={'R174 1.png'} />
              <CartMarket img={'R229 1.png'} />
              <CartMarket img={'R015 1.png'} />
              <CartMarket img={'R336 1.png'} />
              <CartMarket img={'R391.png'} />
              <CartMarket img={'R174 1.png'} />
              <CartMarket img={'R229 1.png'} />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default MarketPlace
