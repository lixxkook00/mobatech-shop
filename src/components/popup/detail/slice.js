import { createSlice } from '@reduxjs/toolkit'

const detailPopupSlice = createSlice({
  name: 'detailpopup',
  initialState: {
    popupState: false,
    content: null
  },
  reducers: {
    showPopup: (state, action) => {
      state.popupState = true
      state.content = action.payload
    },
    closePopup: state => {
      state.popupState = false
      state.content = null
    }
  }
})
export default detailPopupSlice