import React, { useCallback, useEffect, useRef, useState, memo } from 'react'

import './style.scss'

const Popup = ({ content }) => {
  const mainRef = useRef(null)
  const [state, setState] = useState(false)
  const handlePopup = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setState(!state)
  }
  const handleState = useCallback(() => {
    setState(!state)
  }, [state])
  useEffect(() => {
    mainRef.current.parentElement.style.position = 'relative'
  }, [])
  return (
    <div id="popup" onClick={handlePopup} ref={mainRef}>
      {state && <PopupContent content={content} onState={handleState} />}
    </div>
  )
}
const PopupContent = memo(({ content = 'COMING SOON!', onState }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onState()
      return () => clearTimeout(timeoutId)
    }, 1900)
  }, [onState])
  return <div className="popup">{content}</div>
})
export default Popup
