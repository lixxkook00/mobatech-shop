import Router from 'routes'
import { useEffect, useState } from 'react'
import { Web3Provider } from './utils/Web3Provider'
import { getConfig } from './Config/config'
import { connectWallet, listenEvent } from './utils/connectWallet'
import globalSlide, {
  setCurrentAccount,
  setCurrentAccountBalance,
} from 'reducers/globalSlice'
import { getBalance } from 'utils/Wallet'

import './assets/scss/responsiveFFF.scss'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const [account, setAccount] = useState() // state variable to set account.
  useEffect(() => {
    async function load() {
      await getConfig()
      await Web3Provider()
      async function getAccount() {
        let result = await connectWallet()
        dispatch(setCurrentAccount(result))
      }
      getAccount()
      async function getAccountBalance() {
        let balance = await getBalance()
        dispatch(setCurrentAccountBalance(balance))
      }
      getAccountBalance()
    }
    load()
    listenEvent()
  }, [])
  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
