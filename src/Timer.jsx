import React from 'react'
import { useEffect } from 'react'

const Timer = ({seconds, setSeconds}) => {

    useEffect(() => {
        const clearId = setInterval(() => setSeconds(prev => prev + 1), 1000)

        return () => clearInterval(clearId)
    })

  return (
    <h1>Seconds :- {seconds}</h1>
  )
}

export default Timer