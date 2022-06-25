import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import style from './css.module.scss'
import popupSlice from './store'

const PopupSlice = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.popup.sooncoming)
	useEffect(() => {
		if (state) {
			const timeoutId = setTimeout(() => {
				dispatch(popupSlice.actions.togglePopup(false))
				return () => clearTimeout(timeoutId)
			}, 1900)
		}
	}, [state, dispatch])
	return <>{state && <div className={style.popup}>Coming Soon!</div>}</>
}

export default PopupSlice
