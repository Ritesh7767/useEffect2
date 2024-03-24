import React from 'react'
import { useEffect } from 'react'

const Browser = ({config, setConfig}) => {

    const handleScroll = event => {
        setConfig({"clientX" : event.clientX, "clientY" : event.clientY})
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleScroll)

        return () => window.removeEventListener("mousemove", handleScroll)
    })
  return (
    <>
        <h1>{`ClientX : ${config.clientX}`}</h1>
        <h1>{`ClientY : ${config.clientY}`}</h1>
    </>
  )
}

export default Browser