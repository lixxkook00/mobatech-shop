import { configureStore } from '@reduxjs/toolkit'
import globalSlice from 'reducers/globalSlice'
import detailPopupSlice from 'components/popup/detail/slice'

const store = configureStore({
  reducer: {
    detailpopup: detailPopupSlice.reducer,
    global: globalSlice.reducer,
  }
})
export default store