
import React from 'react'
import flightgifi from "../Assets/flightanimation.json"
import Lottie from "lottie-react";

const style ={
  width:"100vw",
  height:"100vh",
  overflow:"hidden"
}

function Flightgif() {
  return (
    <Lottie style={style} animationData={flightgifi} loop={true} autoplay={true} />
  )
}

export default Flightgif