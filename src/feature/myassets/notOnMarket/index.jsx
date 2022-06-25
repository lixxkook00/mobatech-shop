import React , {useState,useEffect} from 'react'
import './style.scss'

import CartNotMarket from 'components/CartNotMarket'
import Loading from 'components/Loading'

import { getRewardsByRarity } from '../../../utils/Staking'
import { getOwnNFT } from 'utils/NFT'

const NotOnMaket = () => {
    const [listItem, setListItem] = useState([]);

    const [tokenID, setTokenID] = useState(1);
    const [rarity,setRarity] = useState(1);

    const [loadingState, setLoadingState] = useState(true)
    const [completeState, setCompleteState] = useState(false)

    setTimeout(() => {
      setCompleteState(true)
    },2000)

   useEffect(() => {
    async function load() { 
      let rewards = await getRewardsByRarity(rarity);
      let list = await getOwnNFT();
      await setListItem(list);
    }
    load();
  }, [])

  return (
    <div className="not-on-market-box">

      <Loading state={loadingState} isComplete={completeState}/>

      <div className="list-item">
        <div className="container">
          <div className="row">
            {
              listItem.map((item,index) => {
                return <CartNotMarket key={index} img={'R174 1.png'} data={item.data}/>
              })
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NotOnMaket
