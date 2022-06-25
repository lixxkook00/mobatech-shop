import { createSlice } from '@reduxjs/toolkit'

const globalSlide = createSlice({
  name: 'global',
  initialState: {
    account: null,
    balance: null,
    menuMobile: false,
    popup: false,
    detailPopup: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.menuMobile = action.payload
    },
    showPopup: (state, action) => {
      state.popup = action.payload
    },
    showDetailPopup: (state, action) => {
      state.detailPopup = action.payload
    },
    setCurrentAccount: (state, action) => {
      state.account = action.payload
    },
    setCurrentAccountBalance: (state, action) => {
      state.balance = action.payload
    },
  },
})

export const { account, setCurrentAccount, setCurrentAccountBalance } =
  globalSlide.actions

export default globalSlide
