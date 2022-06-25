import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
	name: 'popup',
	initialState: {
		sooncoming: false,
	},
	reducers: {
		togglePopup: (state, action) => {
			state.sooncoming = action.payload
		},
	},
})
