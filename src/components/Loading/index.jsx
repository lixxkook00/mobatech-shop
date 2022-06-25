import React , {useState,useEffect} from 'react'

import LoadingScreen from '../LoadingScreen'
import CompleteScreen from '../CompleteScreen'

export default function Loading({state,isComplete}) {
    const [loading,setLoading] = useState(state)
    const [complete,setComplete] = useState(false)

   useEffect(() => {
        if(isComplete){
            setLoading(false)
            setComplete(true)
            setTimeout(() => {
                setComplete(false)
            },1000)
        }
   },[isComplete])

    return (
    <>
        {
            loading 
            &&
            <LoadingScreen />
        }

        {
            complete
            &&
            <CompleteScreen />
        }
    </>
    )
}
