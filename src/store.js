import { configureStore } from '@reduxjs/toolkit'
import globalSlice from 'reducers/globalSlice'
// import detailPopupSlice from 'components/popup/detail/slice'
import popupSlice from 'components/popup/store'

const store = configureStore({
  reducer: {
    // detailpopup: detailPopupSlice.reducer,
    global: globalSlice.reducer,
    popup: popupSlice.reducer
  }
})
export default store